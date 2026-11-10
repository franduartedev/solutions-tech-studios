import type { CSSProperties } from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';
import type { StudioConfig } from '../config';
import { Photo } from './Photo';
import { Lines, plain } from '../lib/rich';

/**
 * Hero: cuatro composiciones según el rubro (config.hero.layout) o ?hero=…
 * - full:      foto a sangre; título, bajada y botones forman un único bloque.
 * - editorial: columna tipográfica + foto vertical con foto de detalle superpuesta (asimétrica).
 * - split:     columna de texto + foto vertical con marco desplazado.
 * - arch:      foto recortada en arco junto al título.
 * Sin tarjetas flotantes, métricas ni mockups: la fotografía y la tipografía hacen el trabajo.
 */
export function Hero({ studio }: { studio: StudioConfig }) {
  const { hero } = studio;

  const title = (
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
        <span className="btn-ico" aria-hidden="true"><ArrowRight size={16} strokeWidth={1.75} /></span>
      </a>
      <a href="#areas" className="btn-link">
        <span>{hero.secondaryCta}</span>
        <ArrowDown size={16} strokeWidth={1.5} aria-hidden="true" />
      </a>
    </div>
  );

  const foot = (
    <div className="hero-foot">
      <p className="hero-lede">{hero.lede}</p>
      {actions}
    </div>
  );

  if (hero.layout === 'full') {
    return (
      <section id="inicio" className="hero hero-full" style={{ '--overlay': hero.overlay ?? 0.5 } as CSSProperties}>
        <div className="hero-media">
          <Photo studio={studio} n={hero.photo} sizes="100vw" eager className="hero-img" />
          <div className="hero-shade" aria-hidden="true" />
        </div>
        <div className="hero-rules" aria-hidden="true"><i /><i /></div>
        <div className="container hero-grid">
          <div className="hero-copy">{title}</div>
          {foot}
          <p className="hero-credit">{studio.studio.caption}</p>
        </div>
      </section>
    );
  }

  if (hero.layout === 'editorial') {
    const ed = hero.editorial ?? { photo: hero.photo, detail: (hero.photo % 6) + 1 };
    return (
      <section id="inicio" className="hero hero-editorial">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="hero-headline">{title}</div>
            {foot}
          </div>
          <figure className="hero-figure">
            <div className="ed-main">
              <Photo studio={studio} n={ed.photo} sizes="(min-width:1024px) 42vw, 92vw" eager className="hero-img" />
            </div>
            <div className="ed-detail">
              <Photo studio={studio} n={ed.detail} sizes="(min-width:1024px) 16vw, 36vw" decorative />
            </div>
            <figcaption>{studio.studio.caption}</figcaption>
          </figure>
        </div>
      </section>
    );
  }

  return (
    <section id="inicio" className={`hero hero-${hero.layout}`}>
      <div className="container hero-grid">
        <div className="hero-copy">
          {title}
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
