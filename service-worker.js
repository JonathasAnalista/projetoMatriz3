// Legmaster Service Worker - atualização imediata e fetch via rede
self.addEventListener('install', event => {
  self.skipWaiting(); // ativa imediatamente após instalar
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim()); // assume controle das páginas
});

self.addEventListener('fetch', event => {
  const dest = event.request.destination;
  // Para HTML/CSS/JS pedimos sempre no-store para garantir atualização sem trocar versão
  if (dest === 'document' || dest === 'script' || dest === 'style' || dest === 'worker' || dest === 'manifest') {
    event.respondWith(fetch(event.request, { cache: 'no-store' }));
  } else {
    event.respondWith(fetch(event.request));
  }
});

// Permite ativação forçada via mensagem
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});



/* <script>
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    .then(reg => {
      console.log("✅ Service Worker registrado:", reg.scope);

      // (Opcional) Detecta nova versão, mas NÃO recarrega automaticamente
      reg.onupdatefound = () => {
        const novoWorker = reg.installing;
        novoWorker.onstatechange = () => {
          if (novoWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              console.log("🆕 Nova versão disponível. Recarregue manualmente se quiser.");
              // Aqui você pode exibir um aviso visual se quiser
            } else {
              console.log("🎉 Service Worker instalado pela primeira vez.");
            }
          }
        };
      };
    })
    .catch(error => {
      console.error("❌ Falha ao registrar o Service Worker:", error);
    });
}
</script> */

