import type { CSSProperties } from 'react';
import type { StudioConfig } from '../config';

interface Props {
  studio: StudioConfig;
  n: number;
  sizes: string;
  eager?: boolean;
  className?: string;
  style?: CSSProperties;
  /** Imagen decorativa repetida: se oculta a lectores de pantalla. */
  decorative?: boolean;
}

/** Imagen responsive con tres anchos (800/1400/2200) y carga diferida salvo el hero. */
export function Photo({ studio, n, sizes, eager, className, style, decorative }: Props) {
  const meta = studio.photos[n];
  const base = `/img/${studio.photoSet ?? studio.id}/${n}`;
  return (
    <img
      className={className}
      src={`${base}-1400.jpg`}
      srcSet={`${base}-800.jpg 800w, ${base}-1400.jpg 1400w, ${base}-2200.jpg 2200w`}
      sizes={sizes}
      alt={decorative ? '' : meta.alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      {...(eager ? { fetchPriority: 'high' as const } : {})}
      style={{ objectPosition: meta.focus, ...style }}
    />
  );
}
