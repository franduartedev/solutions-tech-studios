import type { StudioConfig } from './types';
import { demoContact, demoForm } from './shared';

/** Estudio jurídico · Modern Boutique: carbón, marfil, gris piedra y bordó suave. Arquitectura contemporánea y travertino. */
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
    paper: '#f4f1eb',
    paper2: '#e5e1da',
    ink: '#1c1b1a',
    muted: '#55514b',
    line: '#cfcac0',
    accent: '#7a3441',
    onAccent: '#f8f4ee',
    night: '#1d1c1b',
    onNight: '#eeeae3',
  },
  nav: { studio: 'El estudio', areas: 'Áreas de práctica', philosophy: 'Forma de trabajo', contact: 'Contacto' },
  hero: {
    layout: 'full',
    eyebrow: 'Estudio jurídico · Argentina',
    title: 'Cada caso\nmerece *criterio*,\nno fórmulas.',
    lede: 'Asesoramos a personas, familias y empresas con atención directa, lenguaje claro y una estrategia pensada para cada situación.',
    primaryCta: 'Coordinar una consulta',
    secondaryCta: 'Ver áreas de práctica',
    photo: 1,
    overlay: 0.5,
    editorial: { photo: 2, detail: 7 },
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
    photo: 4,
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
        photo: 6,
      },
      {
        title: 'Empresas y sociedades',
        summary: 'Estructura legal y acompañamiento permanente para la actividad comercial.',
        topics: ['Constitución y reformas', 'Acuerdos entre socios', 'Contratación comercial', 'Asesoramiento periódico'],
        photo: 7,
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
    photo: 8,
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
    1: { alt: 'Atrio interior de travertino claro con pasarelas y barandas de vidrio', focus: '50% 22%', author: 'Paul Menz', unsplashId: 'yhB5EM_OkGw' },
    2: { alt: 'Muro y volúmenes de travertino vistos en diagonal, con luz natural', focus: '50% 40%', author: 'Paul Menz', unsplashId: '0XU9JHgxUnQ' },
    3: { alt: 'Muro de piedra clara con baranda de madera y luz lateral', focus: '50% 40%', author: 'Sofia Lasheva', unsplashId: 'QgHEQ9ULqK4' },
    4: { alt: 'Escalera de piedra clara en un vano de líneas puras', focus: '50% 55%', author: 'Alesia Kazantceva', unsplashId: '0B7ijYKaKcE' },
    5: { alt: 'Sala de reuniones revestida en madera con mesa ovalada', focus: '40% 50%', author: 'john renzzel', unsplashId: 'rr12y4qEbps' },
    6: { alt: 'Fachada de hormigón visto con celosías de madera', focus: '50% 40%', author: 'Paul Menz', unsplashId: 'DqV7R-iU4-I' },
    7: { alt: 'Luz natural proyectando líneas sobre un muro liso', focus: '50% 50%', author: 'Annalisa Overgaard', unsplashId: 'haXoAIkEbQo' },
    8: { alt: 'Pasillo de oficina con mamparas de vidrio y marcos oscuros', focus: '50% 50%', author: 'Nastuh Abootalebi', unsplashId: 'rSpMla5RItA' },
  },
};
