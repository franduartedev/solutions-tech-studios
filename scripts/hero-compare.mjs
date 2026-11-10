// Capturas comparativas de las dos alternativas de hero (A: foto a sangre · B: editorial asimétrica).
// Uso: npm run build && node scripts/hero-compare.mjs [rubro|cliente=slug]   → screenshots/comparar/
import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import fs from 'node:fs';

const PORT = 4176;
const BASE = `http://localhost:${PORT}`;
const target = process.argv[2] ?? 'juridico';
const query = target.includes('=') ? target : `rubro=${target}`;
const slug = target.replace(/\W+/g, '-');
const OPTIONS = [['A-fotoasangre', 'full'], ['B-editorial', 'editorial']];
const VPS = [['desktop', 1440, 900], ['tablet', 768, 1024], ['mobile', 390, 844]];

const server = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--strictPort'], { shell: true, stdio: 'ignore' });
for (let i = 0; i < 60; i++) { try { if ((await fetch(BASE)).ok) break; } catch { /* espera */ } await new Promise((r) => setTimeout(r, 250)); }
fs.mkdirSync('screenshots/comparar', { recursive: true });
const browser = await chromium.launch();
try {
  for (const [name, hero] of OPTIONS) {
    for (const [vp, w, h] of VPS) {
      const ctx = await browser.newContext({ viewport: { width: w, height: h } });
      const page = await ctx.newPage();
      await page.goto(`${BASE}/?${query}&hero=${hero}&demo=0`, { waitUntil: 'networkidle' });
      await page.waitForTimeout(2200);
      await page.screenshot({ path: `screenshots/comparar/${slug}-hero-${name}-${vp}.png` });
      console.log('ok', name, vp);
      await ctx.close();
    }
  }
} finally {
  await browser.close();
  server.kill();
  if (process.platform === 'win32') spawn('taskkill', ['/pid', String(server.pid), '/T', '/F'], { shell: true, stdio: 'ignore' });
}
