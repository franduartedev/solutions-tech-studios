// Pruebas de humo sobre el build: consola limpia, sin desborde horizontal, imágenes cargadas,
// menú móvil, formulario simulado (sin red), selector de rubros y prefers-reduced-motion.
// Uso: npm run build && npm run test:e2e
import { chromium } from 'playwright';
import { spawn } from 'node:child_process';

const PORT = 4174;
const BASE = `http://localhost:${PORT}${process.env.E2E_PATH ?? ""}`;
const RUBROS = ['juridico', 'contable', 'gestoria', 'arquitectura'];
const VPS = [[1440, 900], [768, 1024], [390, 844]];
let fails = 0;
const check = (ok, msg) => { console.log(`${ok ? 'PASS' : 'FAIL'}  ${msg}`); if (!ok) fails++; };

const server = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--strictPort'], { shell: true, stdio: 'ignore' });
for (let i = 0; i < 60; i++) { try { if ((await fetch(BASE)).ok) break; } catch { /* espera */ } await new Promise((r) => setTimeout(r, 250)); }

const browser = await chromium.launch();
try {
  for (const rubro of RUBROS) {
    for (const [w, h] of VPS) {
      const ctx = await browser.newContext({ viewport: { width: w, height: h } });
      const page = await ctx.newPage();
      const errors = [];
      const external = [];
      page.on('console', (m) => ['error', 'warning'].includes(m.type()) && errors.push(m.text()));
      page.on('pageerror', (e) => errors.push(String(e)));
      page.on('request', (r) => { if (!r.url().startsWith(BASE)) external.push(r.url()); });
      await page.goto(`${BASE}/?rubro=${rubro}`, { waitUntil: 'networkidle' });
      // Recorre la página para activar imágenes diferidas y revelados.
      const H = await page.evaluate(() => document.documentElement.scrollHeight);
      for (let y = 0; y < H; y += 600) { await page.evaluate((v) => scrollTo(0, v), y); await page.waitForTimeout(60); }
      await page.waitForTimeout(600);
      const r = await page.evaluate(() => ({
        sw: document.documentElement.scrollWidth,
        iw: window.innerWidth,
        broken: [...document.images].filter((i) => i.offsetParent !== null && (!i.complete || i.naturalWidth === 0)).map((i) => i.src),
        noAlt: [...document.images].filter((i) => i.getAttribute('alt') === null).length,
        h1: document.querySelectorAll('h1').length,
        title: document.title,
      }));
      const tag = `${rubro} ${w}px`;
      check(errors.length === 0, `${tag}: consola sin errores/avisos ${errors[0] ?? ''}`);
      check(r.sw <= r.iw, `${tag}: sin desborde horizontal (${r.sw} <= ${r.iw})`);
      check(r.broken.length === 0, `${tag}: imágenes cargadas ${r.broken[0] ?? ''}`);
      check(r.noAlt === 0 && r.h1 === 1, `${tag}: alt presente y un único h1`);
      check(external.length === 0, `${tag}: sin pedidos a dominios externos ${external[0] ?? ''}`);
      await ctx.close();
    }
  }

  // Menú móvil
  {
    const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
    const page = await ctx.newPage();
    await page.goto(`${BASE}/?rubro=juridico&demo=0`, { waitUntil: 'networkidle' });
    await page.getByRole('button', { name: 'Menú' }).click();
    await page.waitForTimeout(500);
    check(await page.locator('#menu-movil').evaluate((e) => getComputedStyle(e).visibility === 'visible'), 'menú móvil abre');
    check(await page.evaluate(() => document.activeElement?.textContent?.includes('Cerrar')), 'foco pasa al botón Cerrar');
    await page.keyboard.press('Escape');
    await page.waitForTimeout(700);
    check(await page.locator('#menu-movil').evaluate((e) => getComputedStyle(e).visibility === 'hidden'), 'Escape cierra el menú');
    await page.getByRole('button', { name: 'Menú' }).click();
    await page.waitForTimeout(500);
    await page.locator('#menu-movil').getByRole('link', { name: /Contacto/ }).click();
    await page.waitForTimeout(900);
    check(await page.locator('#menu-movil').evaluate((e) => getComputedStyle(e).visibility === 'hidden'), 'elegir un enlace cierra el menú');
    await ctx.close();
  }

  // Formulario simulado: no debe emitir ninguna petición POST ni de red
  {
    const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
    const page = await ctx.newPage();
    const posts = [];
    page.on('request', (r) => r.method() !== 'GET' && posts.push(r.url()));
    await page.goto(`${BASE}/?rubro=contable&demo=0`, { waitUntil: 'networkidle' });
    await page.locator('#contacto').scrollIntoViewIfNeeded();
    await page.fill('#f-name', 'Prueba');
    await page.fill('#f-email', 'prueba@example.com');
    await page.fill('#f-msg', 'Mensaje de prueba');
    await page.getByRole('button', { name: 'Enviar consulta' }).click();
    await page.waitForTimeout(300);
    check((await page.getByRole('status').textContent()).includes('simulación'), 'formulario muestra confirmación simulada');
    check(posts.length === 0, 'formulario no realiza ninguna petición');
    // Consultar por un área precarga el motivo
    await page.goto(`${BASE}/?rubro=juridico&demo=0`, { waitUntil: 'networkidle' });
    await page.locator('.area[data-active] a.btn-link').click();
    await page.waitForTimeout(500);
    check((await page.inputValue('#f-subject')) === 'Familia y sucesiones', 'enlace "Consultar" precarga el motivo');
    await ctx.close();
  }

  // Selector de rubros + parámetros de personalización
  {
    const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
    const page = await ctx.newPage();
    await page.goto(`${BASE}/?rubro=juridico`, { waitUntil: 'networkidle' });
    await page.getByRole('link', { name: 'Arquitectura', exact: true }).click();
    await page.waitForTimeout(400);
    check((await page.title()).includes('Cuadra') && page.url().includes('rubro=arquitectura'), 'selector de rubro cambia contenido y URL');
    await page.goto(`${BASE}/?rubro=gestoria&nombre=Estudio%20Prueba&color=0b5d3b&demo=0`, { waitUntil: 'networkidle' });
    check((await page.locator('.wordmark-name').first().textContent()) === 'Estudio Prueba', '?nombre= personaliza el estudio');
    check((await page.evaluate(() => getComputedStyle(document.documentElement).getPropertyValue('--accent').trim())) === '#0b5d3b', '?color= personaliza el acento');
    check((await page.locator('.demobar').count()) === 0, '?demo=0 oculta la barra de demo');
    await ctx.close();
  }

  // prefers-reduced-motion: todo visible sin animación
  {
    const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: 'reduce' });
    const page = await ctx.newPage();
    await page.goto(`${BASE}/?rubro=arquitectura&demo=0`, { waitUntil: 'networkidle' });
    const hidden = await page.evaluate(() => [...document.querySelectorAll('[data-reveal]')].filter((e) => getComputedStyle(e).opacity !== '1').length);
    check(hidden === 0, 'reduced-motion: contenido visible sin esperar scroll');
    await ctx.close();
  }
} finally {
  await browser.close();
  server.kill();
  if (process.platform === 'win32') spawn('taskkill', ['/pid', String(server.pid), '/T', '/F'], { shell: true, stdio: 'ignore' });
}
console.log(fails ? `\n${fails} prueba(s) fallaron` : '\nTodas las pruebas pasaron');
process.exit(fails ? 1 : 0);
