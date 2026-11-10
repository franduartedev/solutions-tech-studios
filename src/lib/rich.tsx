import { Fragment, type CSSProperties } from 'react';

/** Renderiza "*cursiva*" como <em> y "\n" como salto de línea. */
export function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split('\n').map((line, i, all) => (
        <Fragment key={i}>
          {line.split('*').map((part, j) => (j % 2 === 1 ? <em key={j}>{part}</em> : <Fragment key={j}>{part}</Fragment>))}
          {i < all.length - 1 && <br />}
        </Fragment>
      ))}
    </>
  );
}

/** Igual que Rich, pero cada línea es un bloque enmascarado para la entrada animada del hero. */
export function Lines({ text }: { text: string }) {
  return (
    <>
      {text.split('\n').map((line, i) => (
        <span className="ln" key={i}>
          <span className="ln-in" style={{ '--i': i } as CSSProperties}>
            {line.split('*').map((part, j) => (j % 2 === 1 ? <em key={j}>{part}</em> : <Fragment key={j}>{part}</Fragment>))}
          </span>
        </span>
      ))}
    </>
  );
}

/** Versión en texto plano (sin marcas) para atributos como aria-label. */
export function plain(text: string) {
  return text.replace(/\*/g, '').replace(/\n/g, ' ');
}

/** Nombre del estudio: el "&" se compone en cursiva (gesto de marca). */
export function Name({ text }: { text: string }) {
  return (
    <>
      {text.split('&').map((part, i, all) => (
        <Fragment key={i}>
          {part}
          {i < all.length - 1 && <span className="amp">&amp;</span>}
        </Fragment>
      ))}
    </>
  );
}

/** Marca de sección: "§ 01". */
export function Mk({ s, n }: { s: { sectionMark: string }; n: number }) {
  return <>{s.sectionMark} {String(n).padStart(2, '0')}</>;
}
