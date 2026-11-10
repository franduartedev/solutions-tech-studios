import type { StudioConfig } from '../config';
import { Photo } from './Photo';
import { Reveal } from './Reveal';
import { Mk } from '../lib/rich';
import { Rich } from '../lib/rich';

export function Philosophy({ studio }: { studio: StudioConfig }) {
  const p = studio.philosophy;
  return (
    <section id="filosofia" className="section philosophy">
      <div className="container">
        <header className="phil-head">
          <div>
            <Reveal>
              <p className="eyebrow"><span className="eyebrow-n"><Mk s={studio} n={3} /></span>{p.eyebrow}</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display h-xl-sec"><Rich text={p.title} /></h2>
            </Reveal>
          </div>
          <Reveal as="p" delay={160} className="phil-intro">{p.intro}</Reveal>
        </header>

        <Reveal variant="mask" className="phil-band">
          <Photo studio={studio} n={p.photo} sizes="(min-width:1480px) 1370px, 92vw" />
        </Reveal>

        <ol className="principles">
          {p.principles.map((pr, i) => (
            <Reveal as="li" key={pr.title} delay={i * 100} className="principle">
              <span className="principle-n display" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="display">{pr.title}</h3>
              <p>{pr.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
