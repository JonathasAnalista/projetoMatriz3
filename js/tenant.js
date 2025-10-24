(function (global) {
  "use strict";

  const STORAGE_KEY = "legmaster.activeTenant";

  const state = {
    tenants: {},
    defaultId: null,
    activeId: null,
  };

  function normalizeId(id) {
    return id === undefined || id === null
      ? null
      : String(id).trim().toLowerCase() || null;
  }

  function clone(obj) {
    if (!obj || typeof obj !== "object") return obj;
    try {
      return structuredClone(obj);
    } catch (err) {
      return JSON.parse(JSON.stringify(obj));
    }
  }

  const safeStorage = {
    get() {
      try {
        return localStorage.getItem(STORAGE_KEY) || null;
      } catch (err) {
        return null;
      }
    },
    set(id) {
      try {
        if (!id) {
          localStorage.removeItem(STORAGE_KEY);
        } else {
          localStorage.setItem(STORAGE_KEY, id);
        }
      } catch (err) {
        /* ignore */
      }
    },
  };

  function hostMatches(host, rule) {
    if (!host || !rule) return false;
    const h = host.toLowerCase();
    const r = rule.toLowerCase();

    if (r === "*") return true;
    if (r === h) return true;
    if (r.startsWith("*.")) {
      return h.endsWith(r.slice(1));
    }
    if (r.startsWith(".")) {
      return h.endsWith(r);
    }
    return false;
  }

  function resolveFromHost() {
    const host = global.location && global.location.hostname;
    if (!host) return null;
    const ids = Object.keys(state.tenants);
    for (let i = 0; i < ids.length; i += 1) {
      const id = ids[i];
      const tenant = state.tenants[id];
      if (!tenant || !tenant.hosts || !tenant.hosts.length) continue;
      const found = tenant.hosts.some((rule) => hostMatches(host, rule));
      if (found) return id;
    }
    return null;
  }

  function resolveFromQuery() {
    if (!global.location || !global.location.search) return null;
    try {
      const params = new URLSearchParams(global.location.search);
      const raw = params.get("tenant");
      const id = normalizeId(raw);
      if (id && state.tenants[id]) return id;
    } catch (err) {
      /* ignore */
    }
    return null;
  }

  function detectTenant() {
    const fromQuery = resolveFromQuery();
    if (fromQuery) return fromQuery;

    const fromHost = resolveFromHost();
    if (fromHost) return fromHost;

    const fromStorage = safeStorage.get();
    if (fromStorage && state.tenants[fromStorage]) return fromStorage;

    if (state.defaultId && state.tenants[state.defaultId]) {
      return state.defaultId;
    }

    const ids = Object.keys(state.tenants);
    return ids.length ? ids[0] : null;
  }

  function applyActive(id, opts) {
    const tenant = id ? state.tenants[id] : null;
    if (!tenant) return null;

    state.activeId = id;
    global.LEGMASTER_ACTIVE_TENANT = id;

    if (!global.LEGMASTER_CONFIG) {
      global.LEGMASTER_CONFIG = {};
    }

    if (tenant.firebaseConfig) {
      global.LEGMASTER_CONFIG.FIREBASE_CONFIG = tenant.firebaseConfig;
    }

    if (!opts || opts.persist !== false) {
      safeStorage.set(id);
    }

    if (typeof global.CustomEvent === "function" && typeof global.dispatchEvent === "function") {
      try {
        global.dispatchEvent(
          new CustomEvent("legmaster:tenant-change", {
            detail: { id, tenant: clone(tenant) },
          })
        );
      } catch (err) {
        /* ignore */
      }
    }

    return id;
  }

  function registerTenants(payload = {}) {
    const { defaultId, tenants } = payload;

    if (defaultId) {
      const normalizedDefault = normalizeId(defaultId);
      if (normalizedDefault) {
        state.defaultId = normalizedDefault;
      }
    }

    if (tenants && typeof tenants === "object") {
      Object.entries(tenants).forEach(([rawId, data]) => {
        const id = normalizeId(rawId);
        if (!id) return;
        const sanitized = {
          id,
          label: data && data.label ? String(data.label) : id,
          firebaseConfig: data && data.firebaseConfig ? clone(data.firebaseConfig) : null,
          hosts: Array.isArray(data?.hosts)
            ? data.hosts
                .map((host) => (host ? String(host).trim() : ""))
                .filter((host) => Boolean(host))
            : [],
          meta: data && data.meta ? clone(data.meta) : undefined,
        };
        state.tenants[id] = sanitized;
      });
    }

    if (!state.activeId) {
      const detected = detectTenant();
      if (detected) {
        applyActive(detected, { persist: false });
      }
    }
  }

  function setActiveTenant(id, opts) {
    const normalized = normalizeId(id);
    if (!normalized || !state.tenants[normalized]) return null;
    return applyActive(normalized, opts);
  }

  function getActiveTenantId() {
    return state.activeId;
  }

  function getTenant(id) {
    const normalized = normalizeId(id || state.activeId);
    const tenant = normalized ? state.tenants[normalized] : null;
    return tenant ? clone(tenant) : null;
  }

  function getFirebaseConfig(id) {
    const tenant = getTenant(id);
    return tenant ? tenant.firebaseConfig || null : null;
  }

  function listTenants() {
    return Object.keys(state.tenants).map((id) => clone(state.tenants[id]));
  }

  const api = {
    registerTenants,
    setActiveTenant,
    getActiveTenantId,
    getTenant,
    getFirebaseConfig,
    listTenants,
  };

  global.LEGMASTER_TENANT = api;
})(window);
