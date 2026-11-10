import { studios, rubroIds, clients, clientSlugs } from '../config';

/** Clave de selección: id de rubro ("contable") o de cliente con prefijo ("cliente:slug"). */
export type DemoKey = string;

interface Props {
  current: DemoKey;
  onChange: (key: DemoKey) => void;
}

/**
 * Barra de demostración de Solutions Tech (no forma parte del sitio del cliente).
 * Se oculta con ?demo=0 y no se incluye en la versión final.
 */
export function DemoBar({ current, onChange }: Props) {
  const items: { key: DemoKey; label: string; href: string }[] = [
    ...clientSlugs.map((s) => ({ key: `cliente:${s}`, label: clients[s].label, href: `?cliente=${s}` })),
    ...rubroIds.map((id) => ({ key: id, label: studios[id].label, href: `?rubro=${id}` })),
  ];
  return (
    <div className="demobar" role="region" aria-label="Barra de demostración">
      <p className="demobar-label">
        <span className="demobar-dot" aria-hidden="true" />
        <span className="demobar-long">Demostración de Solutions Tech · </span>
        <span>Ver como</span>
      </p>
      <nav aria-label="Cambiar de rubro o propuesta" className="demobar-nav">
        {items.map((it) => (
          <a
            key={it.key}
            href={it.href}
            aria-current={it.key === current ? 'true' : undefined}
            onClick={(e) => {
              e.preventDefault();
              onChange(it.key);
            }}
          >
            {it.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
