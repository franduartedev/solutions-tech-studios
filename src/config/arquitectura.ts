import type { StudioConfig } from './types';
import { demoContact, demoForm } from './shared';

/** Estudio de arquitectura · identidad: piedra, hormigón y naranja óxido. Hero a sangre sobre hormigón. */
export const arquitectura: StudioConfig = {
  id: 'arquitectura',
  label: 'Arquitectura',
  name: 'Cuadra',
  descriptor: 'Estudio de arquitectura',
  mark: "C",
  sectionMark: "+",
  demo: true,
  seo: {
    title: 'Cuadra · Estudio de arquitectura',
    description:
      'Arquitectura y dirección de obra para viviendas, locales y espacios de trabajo. Sitio demostrativo.',
  },
  theme: {
    paper: '#edebe6',
    paper2: '#dfddd6',
    ink: '#1b1b1a',
    muted: '#585751',
    line: '#cbc8bf',
    accent: '#a53a14',
    onAccent: '#fff6ee',
    night: '#161615',
    onNight: '#ecebe6',
  },
  nav: { studio: 'El estudio', areas: 'Servicios', philosophy: 'Forma de trabajo', contact: 'Contacto' },
  hero: {
    layout: 'full',
    eyebrow: 'Estudio de arquitectura',
    title: 'Proyectamos con\n*materia*, luz\ny oficio.',
    lede: 'Arquitectura y dirección de obra para viviendas, locales y espacios de trabajo: ideas precisas, bien resueltas y construibles.',
    primaryCta: 'Contanos tu proyecto',
    secondaryCta: 'Ver servicios',
    photo: 1,
    overlay: 0.48,
  },
  studio: {
    eyebrow: 'El estudio',
    title: 'Una arquitectura que *nace del lugar* y de quien lo habita.',
    paragraphs: [
      'Cada proyecto empieza por entender el terreno, el clima, el presupuesto y, sobre todo, la forma de vida de quienes van a usarlo.',
      'Acompañamos desde el primer boceto hasta la obra terminada, cuidando que lo dibujado sea lo que finalmente se construye.',
    ],
    pillars: [
      { title: 'Proyecto a medida', text: 'Sin plantillas: cada espacio responde a quien lo habita.' },
      { title: 'Rigor técnico', text: 'Documentación completa, detalles resueltos y obra coordinada.' },
      { title: 'Obra acompañada', text: 'Seguimiento en obra para que el proyecto llegue intacto.' },
    ],
    photo: 2,
    caption: 'Fotografía ilustrativa',
  },
  areas: {
    eyebrow: 'Servicios',
    title: 'Del primer trazo *a la obra*',
    intro:
      'Servicios que este estudio de ejemplo podría ofrecer. En el sitio definitivo se complementan con obras y proyectos reales.',
    consultLabel: 'Consultar por este servicio',
    items: [
      {
        title: 'Proyecto residencial',
        summary: 'Viviendas nuevas, ampliaciones y reformas pensadas para la manera de vivir de cada familia.',
        topics: ['Vivienda unifamiliar', 'Ampliaciones', 'Reformas integrales', 'Anteproyecto y documentación'],
        photo: 3,
      },
      {
        title: 'Espacios comerciales y de trabajo',
        summary: 'Locales, oficinas y consultorios con identidad, funcionalidad y eficiencia.',
        topics: ['Locales comerciales', 'Oficinas', 'Consultorios', 'Gastronomía'],
        photo: 4,
      },
      {
        title: 'Documentación y trámites',
        summary: 'Planos, relevamientos y presentaciones ante las autoridades competentes.',
        topics: ['Relevamientos', 'Planos municipales', 'Regularizaciones', 'Habilitaciones'],
        photo: 6,
      },
      {
        title: 'Dirección y control de obra',
        summary: 'Seguimiento técnico, control de calidad, plazos y costos durante la construcción.',
        topics: ['Dirección de obra', 'Cómputo y presupuesto', 'Coordinación de gremios', 'Visitas y registros'],
        photo: 5,
      },
    ],
  },
  philosophy: {
    eyebrow: 'Forma de trabajo',
    title: 'Decisiones *compartidas*, obra sin sorpresas.',
    intro: 'Tres compromisos que sostienen cada proyecto, de la idea a la llave.',
    principles: [
      { title: 'Confianza', text: 'Presupuestos y alcances claros, y decisiones que se toman en conjunto.' },
      { title: 'Atención personalizada', text: 'Un equipo que escucha, propone y explica cada decisión de diseño.' },
      { title: 'Claridad', text: 'Planos, plazos y costos presentados de forma comprensible.' },
    ],
    photo: 6,
  },
  contact: {
    eyebrow: 'Contacto',
    title: 'Si tenés un terreno,\nuna idea o *una duda*,\nempecemos por ahí.',
    text: 'Contanos qué querés construir o transformar. Te respondemos con los pasos para empezar a trabajar juntos.',
    data: demoContact,
    form: { ...demoForm, submit: 'Enviar consulta' },
  },
  photos: {
    1: { alt: 'Vigas diagonales de hormigón visto bajo la luz de la tarde', focus: '50% 50%', author: 'Anton Lammert', unsplashId: 'oMCC7gKDBYE' },
    2: { alt: 'Muros de hormigón con luz y sombra que marcan el espacio', focus: '50% 45%', author: '준영 박', unsplashId: 'IWYcrdO93WY' },
    3: { alt: 'Muro de hormigón con un vano abierto hacia el jardín', focus: '50% 45%', author: 'Pierre Châtel-Innocenti', unsplashId: 'YVD3VT79AcY' },
    4: { alt: 'Hormigón texturado con luz rasante', focus: '50% 40%', author: 'Pascal Meier', unsplashId: 'h3zP4X6OuZ8' },
    5: { alt: 'Planos de hormigón y sombras en una galería', focus: '50% 40%', author: 'Pascal Meier', unsplashId: 'of2bV2tO3CA' },
    6: { alt: 'Muros de hormigón con una abertura y vegetación al fondo', focus: '50% 40%', author: 'Dorsa Masghati', unsplashId: 'NRLnzGXtoE4' },
  },
};
