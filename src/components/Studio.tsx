import type { StudioConfig } from '../config';
import { Photo } from './Photo';
import { Reveal } from './Reveal';
import { Mk } from '../lib/rich';
import { Rich } from '../lib/rich';

export function Studio({ studio }: { studio: StudioConfig }) {
  const s = studio.studio;
  return (
    <section id="estudio" className="section studio">
      <div className="container studio-grid">
        <Reveal variant="mask" className="studio-media">
          <figure>
            <div className="studio-photo">
              <Photo studio={studio} n={s.photo} sizes="(min-width:1024px) 38vw, 90vw" />
            </div>
            <figcaption>{s.caption}</figcaption>
          </figure>
        </Reveal>

        <div className="studio-text">
          <Reveal>
            <p className="eyebrow"><span className="eyebrow-n"><Mk s={studio} n={1} /></span>{s.eyebrow}</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display h-lg"><Rich text={s.title} /></h2>
          </Reveal>
          <div className="studio-cols">
            {s.paragraphs.map((p, i) => (
              <Reveal as="p" key={i} delay={120 + i * 80} className="body-lg">
                {p}
              </Reveal>
            ))}
          </div>
          <ul className="pillars">
            {s.pillars.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 90} className="pillar">
                <h3 className="display">{p.title}</h3>
                <p>{p.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
