import type { CSSProperties, ElementType, ReactNode } from 'react';
import { useReveal } from '../lib/hooks';

interface Props {
  as?: ElementType;
  variant?: 'up' | 'mask' | 'fade';
  delay?: number;
  className?: string;
  children: ReactNode;
}

/** Entrada suave al hacer scroll. Sin movimiento si el usuario prefiere reducirlo (ver CSS). */
export function Reveal({ as: Tag = 'div', variant = 'up', delay = 0, className, children }: Props) {
  const ref = useReveal<HTMLElement>();
  return (
    <Tag ref={ref} data-reveal={variant} className={className} style={{ '--d': `${delay}ms` } as CSSProperties}>
      {children}
    </Tag>
  );
}
