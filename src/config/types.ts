/**
 * Esquema de configuración de un estudio.
 *
 * Todo lo que cambia entre un rubro y otro (o entre un cliente y otro) vive en un
 * archivo de configuración con esta forma. Los componentes no contienen textos.
 *
 * Convención en títulos: el texto entre *asteriscos* se muestra en cursiva (acento
 * editorial) y "\n" marca un salto de línea intencional.
 */

export type RubroId = 'juridico' | 'contable' | 'gestoria' | 'arquitectura';

/** Composición del hero: 'full' (foto a sangre), 'split' (columna + foto vertical), 'arch' (foto en arco). */
export type HeroLayout = 'full' | 'split' | 'arch' | 'editorial';

export interface Theme {
  /** Fondo principal (papel). */
  paper: string;
  /** Fondo alternativo para secciones. */
  paper2: string;
  /** Texto principal / tinta. */
  ink: string;
  /** Texto secundario (debe mantener contraste AA sobre paper). */
  muted: string;
  /** Líneas finas. */
  line: string;
  /** Color de acento de la identidad. */
  accent: string;
  /** Texto sobre el acento. */
  onAccent: string;
  /** Fondo oscuro (sección de filosofía y footer). */
  night: string;
  /** Texto sobre fondo oscuro. */
  onNight: string;
}

export interface PhotoMeta {
  /** Texto alternativo descriptivo (accesibilidad). */
  alt: string;
  /** object-position, p. ej. "50% 30%". */
  focus?: string;
  /** Autoría (para el listado de créditos). */
  author: string;
  /** Identificador de la página de la foto en Unsplash. */
  unsplashId: string;
}

export interface Principle {
  title: string;
  text: string;
}

export interface AreaItem {
  title: string;
  summary: string;
  topics: string[];
  /** Número de foto (1–6) que se muestra al activar el área. */
  photo: number;
}

export interface ContactData {
  email: string;
  phone: string;
  address: string;
  hours: string;
}

export interface StudioConfig {
  id: RubroId;
  /** Nombre del rubro para el selector de demo. */
  label: string;
  /** Nombre del estudio (logo tipográfico). */
  name: string;
  /** Descriptor bajo el nombre, p. ej. "Estudio jurídico". */
  descriptor: string;
  /** Inicial para el monograma y el favicon. */
  mark: string;
  /** Signo tipográfico del rubro que numera las secciones (§, №, →, +). */
  sectionMark: string;
  /** Carpeta de fotos en public/img si difiere del id (demos por cliente). */
  photoSet?: RubroId;
  /** Identificador de una demo por cliente (?cliente=slug). */
  slug?: string;
  /** Reemplaza la nota por defecto del pie (p. ej. propuesta para un cliente). */
  footerNote?: string;
  seo: { title: string; description: string };
  theme: Theme;
  /** true mientras los datos sean de ejemplo: marca todo como demostrativo. */
  demo: boolean;
  nav: { studio: string; areas: string; philosophy: string; contact: string };
  hero: {
    layout: HeroLayout;
    eyebrow: string;
    title: string;
    lede: string;
    primaryCta: string;
    secondaryCta: string;
    photo: number;
    /** Oscurecimiento de la foto en layout 'full' (0–1). */
    overlay?: number;
    /** Fotos para el layout 'editorial': principal (vertical) y detalle (material/luz). */
    editorial?: { photo: number; detail: number };
  };
  studio: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    pillars: Principle[];
    photo: number;
    caption: string;
  };
  areas: {
    eyebrow: string;
    title: string;
    intro: string;
    consultLabel: string;
    /** Si existe, cada área muestra esta etiqueta (contenido ilustrativo a confirmar). */
    illustrativeLabel?: string;
    items: AreaItem[];
  };
  philosophy: {
    eyebrow: string;
    title: string;
    intro: string;
    principles: Principle[];
    photo: number;
  };
  contact: {
    eyebrow: string;
    title: string;
    text: string;
    data: ContactData;
    form: {
      name: string;
      email: string;
      subject: string;
      subjectPlaceholder: string;
      message: string;
      submit: string;
      notice: string;
      success: string;
    };
  };
  /** Metadatos de las 6 fotos del rubro (public/img/<rubro>/1..6). */
  photos: Record<number, PhotoMeta>;
}
