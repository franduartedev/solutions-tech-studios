import type { StudioConfig } from '../config';
import { Name } from '../lib/rich';
import { builder } from '../config/shared';

export function Footer({ studio }: { studio: StudioConfig }) {
  // Créditos únicos (varias imágenes pueden compartir autoría).
  const credits = Object.values(studio.photos);
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <p className="footer-name display"><Name text={studio.name} /></p>
            <p className="footer-desc">{studio.descriptor}</p>
          </div>
          <nav aria-label="Pie de página" className="footer-nav">
            <a href="#estudio">{studio.nav.studio}</a>
            <a href="#areas">{studio.nav.areas}</a>
            <a href="#filosofia">{studio.nav.philosophy}</a>
            <a href="#contacto">{studio.nav.contact}</a>
          </nav>
        </div>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} {studio.name}. {studio.demo ? (studio.footerNote ?? builder.note) : 'Todos los derechos reservados.'}
          </p>
          <details className="credits">
            <summary>Créditos fotográficos</summary>
            <p>
              Fotografías publicadas en{' '}
              <a href="https://unsplash.com/license" target="_blank" rel="noreferrer">Unsplash</a>{' '}
              bajo la licencia Unsplash:{' '}
              {credits.map((c, i) => (
                <span key={c.unsplashId}>
                  <a href={`https://unsplash.com/photos/${c.unsplashId}`} target="_blank" rel="noreferrer">{c.author}</a>
                  {i < credits.length - 1 ? ', ' : '.'}
                </span>
              ))}
            </p>
          </details>
        </div>
      </div>
    </footer>
  );
}
