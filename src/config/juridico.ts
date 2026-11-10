import type { StudioConfig } from './types';
import { demoContact, demoForm } from './shared';

/** Estudio jurídico · identidad: tinta, papel cálido y bordó. Hero a sangre sobre biblioteca. */
export const juridico: StudioConfig = {
  id: 'juridico',
  label: 'Jurídico',
  name: 'Meridiano',
  descriptor: 'Estudio jurídico',
  mark: "M",
  sectionMark: "§",
  demo: true,
  seo: {
    title: 'Meridiano · Estudio jurídico',
    description:
      'Asesoramiento jurídico a personas, familias y empresas con atención directa, lenguaje claro y estrategia a medida. Sitio demostrativo.',
  },
  theme: {
    paper: '#f2eee7',
    paper2: '#e9e3d9',
    ink: '#1a1714',
    muted: '#51493f',
    line: '#d5cdbf',
    accent: '#6e1f2b',
    onAccent: '#f7f1e8',
    night: '#16120f',
    onNight: '#efe8dc',
  },
  nav: { studio: 'El estudio', areas: 'Áreas de práctica', philosophy: 'Forma de trabajo', contact: 'Contacto' },
  hero: {
    layout: 'full',
    eyebrow: 'Estudio jurídico',
    title: 'Cada caso\nmerece *criterio*,\nno fórmulas.',
    lede: 'Asesoramos a personas, familias y empresas con atención directa, lenguaje claro y una estrategia pensada para cada situación.',
    primaryCta: 'Coordinar una consulta',
    secondaryCta: 'Ver áreas de práctica',
    photo: 1,
    overlay: 0.62,
  },
  studio: {
    eyebrow: 'El estudio',
    title: 'Una práctica jurídica *cercana*, rigurosa y sin rodeos.',
    paragraphs: [
      'Creemos que un buen asesoramiento empieza por escuchar. Antes de proponer una solución, entendemos qué está en juego, qué plazos corren y qué resultado es razonable esperar.',
      'Trabajamos con un enfoque estratégico y preventivo. Te explicamos cada alternativa con sus riesgos, costos y tiempos, para que decidas con la información completa.',
    ],
    pillars: [
      { title: 'Trato directo', text: 'Hablás con quienes llevan tu asunto, sin vueltas ni intermediarios.' },
      { title: 'Lenguaje claro', text: 'Entendés cada paso y cada documento, sin tecnicismos innecesarios.' },
      { title: 'Estrategia a medida', text: 'Cada situación se analiza por sí misma; no se resuelve con modelos genéricos.' },
    ],
    photo: 2,
    caption: 'Fotografía ilustrativa',
  },
  areas: {
    eyebrow: 'Áreas de práctica',
    title: 'Donde podemos *acompañarte*',
    intro:
      'Materias que este estudio de ejemplo podría abordar. En el sitio definitivo se ajustan a las especialidades reales del estudio.',
    consultLabel: 'Consultar por esta área',
    items: [
      {
        title: 'Familia y sucesiones',
        summary: 'Procesos familiares y patrimoniales atravesados por lo personal, tratados con prudencia y reserva.',
        topics: ['Divorcios y acuerdos', 'Alimentos y cuidado personal', 'Sucesiones', 'Planificación patrimonial'],
        photo: 3,
      },
      {
        title: 'Contratos y derecho civil',
        summary: 'Redacción y revisión de contratos, reclamos por incumplimientos y asuntos inmobiliarios.',
        topics: ['Contratos civiles y comerciales', 'Locaciones', 'Reclamos por daños', 'Compraventas'],
        photo: 5,
      },
      {
        title: 'Derecho laboral',
        summary: 'Asesoramiento a trabajadores y empleadores en la relación de trabajo, desde su inicio hasta su extinción.',
        topics: ['Despidos e indemnizaciones', 'Registración laboral', 'Acuerdos y conciliaciones', 'Prevención'],
        photo: 4,
      },
      {
        title: 'Empresas y sociedades',
        summary: 'Estructura legal y acompañamiento permanente para la actividad comercial.',
        topics: ['Constitución y reformas', 'Acuerdos entre socios', 'Contratación comercial', 'Asesoramiento periódico'],
        photo: 6,
      },
    ],
  },
  philosophy: {
    eyebrow: 'Forma de trabajo',
    title: 'La confianza se construye *explicando*.',
    intro: 'Tres compromisos que sostenemos en cada consulta, desde la primera conversación.',
    principles: [
      { title: 'Confianza', text: 'Confidencialidad y honestidad desde el primer contacto, incluso cuando la respuesta no es la que esperabas.' },
      { title: 'Atención personalizada', text: 'Un interlocutor claro, tiempos de respuesta acordados y seguimiento activo de tu asunto.' },
      { title: 'Claridad', text: 'Alcances, honorarios y próximos pasos explicados por escrito desde el comienzo.' },
    ],
    photo: 3,
  },
  contact: {
    eyebrow: 'Contacto',
    title: 'Contanos tu situación.\n*Te escuchamos* primero.',
    text: 'La primera conversación sirve para entender tu caso y explicarte, con claridad, qué camino tiene sentido seguir.',
    data: demoContact,
    form: {
      ...demoForm,
      submit: 'Solicitar consulta',
    },
  },
  photos: {
    1: { alt: 'Biblioteca de madera oscura con estantes altos y escaleras de mano', focus: '50% 55%', author: 'Alex Block', unsplashId: 'PdDBTrkGYLo' },
    2: { alt: 'Galería con arcos y ventanas iluminadas por luz cálida', focus: '50% 50%', author: 'Phillip Flores', unsplashId: 'bz5dJ48tyRE' },
    3: { alt: 'Columnas clásicas vistas desde abajo contra el cielo', focus: '50% 40%', author: 'Jesse Collins', unsplashId: 'ICXMkhRdquA' },
    4: { alt: 'Columnata de mármol blanco bañada de luz', focus: '50% 40%', author: 'Courtney Cantu', unsplashId: '-o5aiE8BR3c' },
    5: { alt: 'Cielorraso ornamentado de un edificio clásico', focus: '50% 50%', author: 'Karla Caloca', unsplashId: '2uGxst615P4' },
    6: { alt: 'Fachada de columnas de piedra en blanco y negro', focus: '50% 40%', author: 'Sebastian Schuster', unsplashId: 'lCkHnqTnjXw' },
  },
};
