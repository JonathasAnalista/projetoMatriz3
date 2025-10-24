from pathlib import Path
lines = Path('script.js').read_text(encoding='utf-8').splitlines()
for i, line in enumerate(lines, 1):
    if '<div style="display:flex;justify-content:center;margin-top:30px;">' in line:
        print(i)
