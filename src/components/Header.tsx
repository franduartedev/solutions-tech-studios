import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import type { StudioConfig } from '../config';
import { useActiveSection, useScrollY } from '../lib/hooks';
import { Name } from '../lib/rich';

interface Props {
  studio: StudioConfig;
  /** Alto de la barra de demo, para apilar el header debajo mientras está visible. */
  offset: number;
}

const SECTION_IDS = ['estudio', 'areas', 'filosofia', 'contacto'];

export function Header({ studio, offset }: Props) {
  const y = useScrollY();
  const active = useActiveSection(SECTION_IDS);
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const openRef = useRef<HTMLButtonElement>(null);

  const solid = y > 24;
  const overPhoto = studio.hero.layout === 'full' && !solid && !open;
  const links = [
    { id: 'estudio', label: studio.nav.studio },
    { id: 'areas', label: studio.nav.areas },
    { id: 'filosofia', label: studio.nav.philosophy },
  ];

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        openRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  // Cierra el menú si se pasa a escritorio.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const on = () => mq.matches && setOpen(false);
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, []);

  const top = Math.max(0, offset - y);

  return (
    <>
      <header
        className="header"
        data-solid={solid || undefined}
        data-tone={overPhoto ? 'light' : 'dark'}
        style={{ top }}
      >
        <div className="container header-in">
          <a href="#inicio" className="wordmark" aria-label={`${studio.name}, ${studio.descriptor}. Ir al inicio`}>
            <span className="mono" aria-hidden="true">{studio.mark}</span>
            <span className="wordmark-text">
              <span className="wordmark-name"><Name text={studio.name} /></span>
              <span className="wordmark-desc">{studio.descriptor}</span>
            </span>
          </a>

          <nav className="nav" aria-label="Principal">
            {links.map((l) => (
              <a key={l.id} href={`#${l.id}`} aria-current={active === l.id ? 'location' : undefined}>
                {l.label}
              </a>
            ))}
          </nav>

          <a href="#contacto" className="header-cta">
            <span>{studio.nav.contact}</span>
            <span className="btn-ico" aria-hidden="true"><ArrowUpRight size={15} strokeWidth={1.75} /></span>
          </a>

          <button
            ref={openRef}
            type="button"
            className="menu-btn"
            aria-expanded={open}
            aria-controls="menu-movil"
            onClick={() => setOpen(true)}
          >
            <Menu size={20} strokeWidth={1.5} aria-hidden="true" />
            <span>Menú</span>
          </button>
        </div>
      </header>

      <div id="menu-movil" className="menu" data-open={open || undefined} aria-hidden={!open} {...(!open ? { inert: true } : {})}>
        <div className="menu-top container">
          <span className="wordmark-name"><Name text={studio.name} /></span>
          <button ref={closeRef} type="button" className="menu-btn" onClick={() => { setOpen(false); openRef.current?.focus(); }}>
            <X size={20} strokeWidth={1.5} aria-hidden="true" />
            <span>Cerrar</span>
          </button>
        </div>
        <nav aria-label="Menú móvil" className="menu-links container">
          {[...links, { id: 'contacto', label: studio.nav.contact }].map((l, i) => (
            <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)} style={{ '--i': i } as React.CSSProperties}>
              <span className="menu-num">0{i + 1}</span>
              <span>{l.label}</span>
            </a>
          ))}
        </nav>
        <p className="menu-foot container">{studio.descriptor}</p>
      </div>
    </>
  );
}
