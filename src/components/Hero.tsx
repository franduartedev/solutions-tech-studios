import type { CSSProperties } from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';
import type { StudioConfig } from '../config';
import { Photo } from './Photo';
import { Lines, plain } from '../lib/rich';

/**
 * Hero: tres composiciones según el rubro (config.hero.layout).
 * - full:  foto a sangre con tipografía protagonista sobre ella.
 * - split: columna de texto + foto vertical con marco desplazado.
 * - arch:  foto recortada en arco (eco de las arcadas) junto al título.
 * Sin tarjetas flotantes, métricas ni mockups: la foto y la tipografía hacen el trabajo.
 */
export function Hero({ studio }: { studio: StudioConfig }) {
  const { hero } = studio;

  const copy = (
    <>
      <p className="eyebrow hero-eyebrow">{hero.eyebrow}</p>
      <h1 className="display hero-title" aria-label={plain(hero.title)}>
        <span aria-hidden="true"><Lines text={hero.title} /></span>
      </h1>
    </>
  );

  const actions = (
    <div className="hero-actions">
      <a href="#contacto" className="btn btn-primary">
        <span>{hero.primaryCta}</span>
        <ArrowRight size={18} strokeWidth={1.5} aria-hidden="true" />
      </a>
      <a href="#areas" className="btn-link">
        <span>{hero.secondaryCta}</span>
        <ArrowDown size={16} strokeWidth={1.5} aria-hidden="true" />
      </a>
    </div>
  );

  if (hero.layout === 'full') {
    return (
      <section id="inicio" className="hero hero-full" style={{ '--overlay': hero.overlay ?? 0.55 } as CSSProperties}>
        <div className="hero-media">
          <Photo studio={studio} n={hero.photo} sizes="100vw" eager className="hero-img" />
          <div className="hero-shade" aria-hidden="true" />
        </div>
        <div className="container hero-grid">
          <div className="hero-copy">{copy}</div>
          <div className="hero-foot">
            <p className="hero-lede">{hero.lede}</p>
            {actions}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="inicio" className={`hero hero-${hero.layout}`}>
      <div className="container hero-grid">
        <div className="hero-copy">
          {copy}
          <p className="hero-lede">{hero.lede}</p>
          {actions}
        </div>
        <figure className="hero-figure">
          <div className="hero-frame">
            <Photo studio={studio} n={hero.photo} sizes="(min-width:1024px) 40vw, 90vw" eager className="hero-img" />
          </div>
          <figcaption>{studio.studio.caption}</figcaption>
        </figure>
      </div>
    </section>
  );
}
