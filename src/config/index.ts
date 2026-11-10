import type { RubroId, StudioConfig } from './types';
import { juridico } from './juridico';
import { contable } from './contable';
import { gestoria } from './gestoria';
import { arquitectura } from './arquitectura';

export type { RubroId, StudioConfig } from './types';

export const studios: Record<RubroId, StudioConfig> = { juridico, contable, gestoria, arquitectura };
export const rubroIds = Object.keys(studios) as RubroId[];
export const defaultRubro: RubroId = 'juridico';

/** Propuestas por cliente (?cliente=slug). Sumar un cliente = crear su archivo en ./clients y registrarlo acá. */
export const clients: Record<string, StudioConfig> = {};
export const clientSlugs = Object.keys(clients);

export function isRubro(v: string | null | undefined): v is RubroId {
  return !!v && v in studios;
}

const HEX = /^#?([0-9a-f]{6})$/i;

/**
 * Resuelve la configuración desde la URL para personalizar la demo en segundos:
 *   ?rubro=contable              → cambia de rubro
 *   ?cliente=slug              → propuesta preparada para un cliente
 *   ?nombre=Estudio%20Ferreyra   → reemplaza el nombre del estudio
 *   ?color=0b5d3b                → reemplaza el color de acento
 *   ?demo=0                      → oculta la barra de demostración
 */
export function resolveStudio(search: string): { config: StudioConfig; showDemoBar: boolean } {
  const q = new URLSearchParams(search);
  const cliente = q.get('cliente');
  const rubro = q.get('rubro');
  const base =
    cliente && cliente in clients ? clients[cliente] : studios[isRubro(rubro) ? rubro : defaultRubro];
  const nombre = q.get('nombre')?.trim().slice(0, 40);
  const color = q.get('color')?.match(HEX);
  const config: StudioConfig = {
    ...base,
    name: nombre || base.name,
    theme: color ? { ...base.theme, accent: `#${color[1]}` } : base.theme,
  };
  return { config, showDemoBar: q.get('demo') !== '0' };
}
