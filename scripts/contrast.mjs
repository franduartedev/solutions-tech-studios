// Auditoría de contraste (WCAG AA) sobre el texto renderizado de cada rubro/cliente en escritorio y móvil.
// Calcula color efectivo (con opacidad heredada) contra el fondo sólido más cercano.
// Se omite el texto sobre fotografías (hero a sangre), donde el contraste depende de la imagen y el degradé.
// Uso: npm run build && npm run test:contrast
import { chromium } from 'playwright';
import { spawn } from 'node:child_process';

const PORT = 4175;
const BASE = `http://localhost:${PORT}`;
const TARGETS = ['rubro=juridico', 'rubro=contable', 'rubro=gestoria', 'rubro=arquitectura'];
const VPS = [[1440, 900], [390, 844]];
let bad = 0;

const server = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--strictPort'], { shell: true, stdio: 'ignore' });
for (let i = 0; i < 60; i++) { try { if ((await fetch(BASE)).ok) break; } catch { /* espera */ } await new Promise((r) => setTimeout(r, 250)); }
const browser = await chromium.launch();

const audit = () => {
  const cv = document.createElement('canvas');
  cv.width = cv.height = 1;
  const g = cv.getContext('2d', { willReadFrequently: true });
  const rgba = (css) => { g.clearRect(0, 0, 1, 1); g.fillStyle = '#000'; g.fillStyle = css; g.fillRect(0, 0, 1, 1); const d = g.getImageData(0, 0, 1, 1).data; return [d[0], d[1], d[2], d[3] / 255]; };
  const over = (f, b) => [0, 1, 2].map((i) => f[i] * f[3] + b[i] * (1 - f[3]));
  const lum = ([r, g2, b]) => { const s = [r, g2, b].map((v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; }); return 0.2126 * s[0] + 0.7152 * s[1] + 0.0722 * s[2]; };
  const out = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const seen = new Set();
  while (walker.nextNode()) {
    const n = walker.currentNode;
    if (!n.textContent.trim()) continue;
    const el = n.parentElement;
    if (!el || seen.has(el)) continue;
    seen.add(el);
    if (el.closest('.hero-media, .hero-full, .demobar, .skip, .menu, [aria-hidden="true"]') || el.closest('.areas-sticky')) continue;
    const cs = getComputedStyle(el);
    if (cs.visibility === 'hidden' || cs.display === 'none') continue;
    const r = el.getBoundingClientRect();
    if (r.width === 0 || r.height === 0) continue;
    // opacidad acumulada
    let op = 1; let bg = null; let p = el;
    while (p && p !== document.documentElement) {
      const s = getComputedStyle(p);
      op *= parseFloat(s.opacity);
      if (!bg) { const c = rgba(s.backgroundColor); if (c[3] > 0.99) bg = c; }
      p = p.parentElement;
    }
    if (!bg) bg = rgba(getComputedStyle(document.body).backgroundColor);
    const fg = rgba(cs.color);
    fg[3] *= op;
    const eff = over(fg, bg);
    const L1 = lum(eff); const L2 = lum(bg);
    const ratio = (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
    const px = parseFloat(cs.fontSize); const bold = parseInt(cs.fontWeight, 10) >= 700;
    const large = px >= 24 || (px >= 18.66 && bold);
    out.push({ text: n.textContent.trim().slice(0, 40), ratio: +ratio.toFixed(2), need: large ? 3 : 4.5, px: +px.toFixed(1), cls: el.className?.toString().slice(0, 30) });
  }
  return out;
};

try {
  for (const t of TARGETS) {
    for (const [w, h] of VPS) {
      const ctx = await browser.newContext({ viewport: { width: w, height: h } });
      const page = await ctx.newPage();
      await page.goto(`${BASE}/?${t}&demo=0`, { waitUntil: 'networkidle' });
      const H = await page.evaluate(() => document.documentElement.scrollHeight);
      for (let y = 0; y < H; y += 600) { await page.evaluate((v) => scrollTo(0, v), y); await page.waitForTimeout(40); }
      await page.waitForTimeout(1200);
      // abre <details> de créditos para auditarlo
      await page.evaluate(() => document.querySelectorAll('details').forEach((d) => (d.open = true)));
      const rows = await page.evaluate(audit);
      const fails = rows.filter((r) => r.ratio < r.need);
      const small = rows.filter((r) => r.px < 12);
      console.log(`${fails.length || small.length ? 'FAIL' : 'PASS'}  ${t} ${w}px · ${rows.length} textos · mínimo ${Math.min(...rows.map((r) => r.ratio))} · fuente mín ${Math.min(...rows.map((r) => r.px))}px`);
      fails.forEach((f) => console.log('   contraste', f));
      small.forEach((f) => console.log('   tamaño', f));
      bad += fails.length + small.length;
      await ctx.close();
    }
  }
} finally {
  await browser.close();
  server.kill();
  if (process.platform === 'win32') spawn('taskkill', ['/pid', String(server.pid), '/T', '/F'], { shell: true, stdio: 'ignore' });
}
process.exit(bad ? 1 : 0);
