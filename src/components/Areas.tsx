import { useId, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { StudioConfig } from '../config';
import { Photo } from './Photo';
import { Reveal } from './Reveal';
import { Mk } from '../lib/rich';
import { Rich } from '../lib/rich';
import { useMediaQuery } from '../lib/hooks';

interface Props {
  studio: StudioConfig;
  onConsult: (areaTitle: string) => void;
}

/**
 * Áreas: composición tipográfica en lista editorial. En escritorio, una foto sticky cambia
 * con el área activa (hover, foco o clic) y sólo el área activa se expande. En pantallas
 * chicas todas las áreas se muestran completas, sin interacciones ocultas.
 */
export function Areas({ studio, onConsult }: Props) {
  const a = studio.areas;
  const uid = useId();
  const [active, setActive] = useState(0);
  const wide = useMediaQuery('(min-width: 1024px)');

  return (
    <section id="areas" className="section areas">
      <div className="container">
        <header className="areas-head">
          <div>
            <Reveal>
              <p className="eyebrow"><span className="eyebrow-n"><Mk s={studio} n={2} /></span>{a.eyebrow}</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display h-xl-sec"><Rich text={a.title} /></h2>
            </Reveal>
          </div>
          <Reveal as="p" delay={160} className="areas-intro">{a.intro}</Reveal>
        </header>

        <div className="areas-body">
          <div className="areas-sticky" aria-hidden="true">
            <div className="areas-photo">
              {a.items.map((it, i) => (
                <Photo
                  key={it.title}
                  studio={studio}
                  n={it.photo}
                  sizes="(min-width:1024px) 34vw, 0px"
                  decorative
                  className={i === active ? 'on' : ''}
                />
              ))}
            </div>
            <p className="areas-count">
              <span>{String(active + 1).padStart(2, '0')}</span> / {String(a.items.length).padStart(2, '0')}
            </p>
          </div>

          <ol className="area-list">
            {a.items.map((it, i) => {
              const open = !wide || i === active;
              const panel = `${uid}-p${i}`;
              return (
                <li key={it.title} className="area" data-active={i === active || undefined} onMouseEnter={() => wide && setActive(i)}>
                  <Reveal delay={i * 60} className="area-in">
                    <span className="area-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                    <div className="area-main">
                      {a.illustrativeLabel && <span className="badge">{a.illustrativeLabel}</span>}
                      <h3 className="display area-title">
                        {wide ? (
                          <button type="button" aria-expanded={open} aria-controls={panel} onClick={() => setActive(i)} onFocus={() => setActive(i)}>
                            {it.title}
                          </button>
                        ) : (
                          it.title
                        )}
                      </h3>
                      <div id={panel} className="area-collapse" data-open={open || undefined}>
                        <div className="area-collapse-in">
                          <p className="area-summary">{it.summary}</p>
                          <ul className="topics">
                            {it.topics.map((t) => (
                              <li key={t}>{t}</li>
                            ))}
                          </ul>
                          <a href="#contacto" className="btn-link" onClick={() => onConsult(it.title)}>
                            <span>{a.consultLabel}</span>
                            <ArrowUpRight size={16} strokeWidth={1.5} aria-hidden="true" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
