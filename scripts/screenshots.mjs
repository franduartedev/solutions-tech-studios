// Capturas de los 4 rubros en 1440×900, 768×1024 y 390×844 (página completa + primer pantallazo).
// Uso: npm run build && npm run shots   (levanta `vite preview` automáticamente)
import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import fs from 'node:fs';

const PORT = 4173;
const BASE = `http://localhost:${PORT}`;
const RUBROS = ['juridico', 'contable', 'gestoria', 'arquitectura'];
const VIEWPORTS = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'mobile', width: 390, height: 844 },
];
const only = process.argv.slice(2); // p. ej.: node scripts/screenshots.mjs contable mobile

const server = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--strictPort'], { shell: true, stdio: 'ignore' });
const ready = async () => {
  for (let i = 0; i < 60; i++) {
    try { if ((await fetch(BASE)).ok) return; } catch { /* aún no */ }
    await new Promise((r) => setTimeout(r, 250));
  }
  throw new Error('preview no levantó');
};

async function scrollThrough(page) {
  const h = await page.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y < h; y += 500) {
    await page.evaluate((v) => window.scrollTo(0, v), y);
    await page.waitForTimeout(90);
  }
  await page.evaluate(async () => {
    await Promise.all([...document.images].map((i) => { i.loading = 'eager'; return i.decode().catch(() => {}); }));
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(1500);
}

try {
  await ready();
  fs.mkdirSync('screenshots', { recursive: true });
  const browser = await chromium.launch();
  for (const vp of VIEWPORTS) {
    if (only.length && !only.includes(vp.name) && !only.some((o) => RUBROS.includes(o))) continue;
    for (const rubro of RUBROS) {
      if (only.some((o) => RUBROS.includes(o)) && !only.includes(rubro)) continue;
      if (only.some((o) => VIEWPORTS.some((v) => v.name === o)) && !only.includes(vp.name)) continue;
      const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height }, deviceScaleFactor: 1 });
      const page = await ctx.newPage();
      await page.goto(`${BASE}/?rubro=${rubro}&demo=0`, { waitUntil: 'networkidle' });
      await page.waitForTimeout(1800); // entrada del hero
      await page.screenshot({ path: `screenshots/${rubro}-${vp.name}-hero.png` });
      await scrollThrough(page);
      await page.screenshot({ path: `screenshots/${rubro}-${vp.name}-full.png`, fullPage: true });
      await ctx.close();
      console.log('ok', rubro, vp.name);
    }
  }
  await browser.close();
} finally {
  server.kill();
  if (process.platform === 'win32') spawn('taskkill', ['/pid', String(server.pid), '/T', '/F'], { shell: true, stdio: 'ignore' });
}
