import { useCallback, useLayoutEffect, useMemo, useState } from 'react';
import { resolveStudio } from './config';
import { DemoBar } from './components/DemoBar';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Studio } from './components/Studio';
import { Areas } from './components/Areas';
import { Philosophy } from './components/Philosophy';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const DEMO_BAR_H = 40;

export default function App() {
  const [search, setSearch] = useState(() => window.location.search);
  const [subject, setSubject] = useState('');
  const { config: studio, showDemoBar } = useMemo(() => resolveStudio(search), [search]);

  // Aplica el tema del rubro como variables CSS y actualiza metadatos del documento.
  useLayoutEffect(() => {
    const root = document.documentElement;
    const t = studio.theme;
    const vars: Record<string, string> = {
      '--paper': t.paper, '--paper-2': t.paper2, '--ink': t.ink, '--muted': t.muted, '--line': t.line,
      '--accent': t.accent, '--on-accent': t.onAccent, '--night': t.night, '--on-night': t.onNight,
    };
    Object.entries(vars).forEach(([k, v]) => root.style.setProperty(k, v));
    root.dataset.rubro = studio.id;
    root.style.setProperty("--section-mark", JSON.stringify(studio.sectionMark));
    // Favicon con el monograma y el acento del estudio.
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" fill="${t.accent}"/><text x="16" y="23.5" text-anchor="middle" font-family="Georgia,serif" font-size="22" fill="${t.onAccent}">${studio.mark}</text></svg>`;
    document.querySelector('link[rel="icon"]')?.setAttribute("href", "data:image/svg+xml," + encodeURIComponent(svg));
    document.title = studio.seo.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', studio.seo.description);
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', t.paper);
  }, [studio]);

  const change = useCallback((key: string) => {
    const q = new URLSearchParams();
    if (key.startsWith("cliente:")) q.set("cliente", key.slice(8));
    else q.set("rubro", key);
    const keep = new URLSearchParams(window.location.search).get("demo");
    if (keep) q.set("demo", keep);
    const next = `?${q.toString()}`;
    window.history.pushState({}, "", next);
    setSearch(next);
    setSubject("");
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  useLayoutEffect(() => {
    const on = () => setSearch(window.location.search);
    window.addEventListener('popstate', on);
    return () => window.removeEventListener('popstate', on);
  }, []);

  const onConsult = useCallback((title: string) => setSubject(title), []);

  return (
    <>
      <a href="#contenido" className="skip">Saltar al contenido</a>
      {showDemoBar && <DemoBar current={studio.slug ? `cliente:${studio.slug}` : studio.id} onChange={change} />}
      <Header studio={studio} offset={showDemoBar ? DEMO_BAR_H : 0} />
      <main id="contenido" key={studio.slug ?? studio.id}>
        <Hero studio={studio} />
        <Studio studio={studio} />
        <Areas studio={studio} onConsult={onConsult} />
        <Philosophy studio={studio} />
        <Contact studio={studio} subject={subject} onSubject={setSubject} />
      </main>
      <Footer studio={studio} />
    </>
  );
}


