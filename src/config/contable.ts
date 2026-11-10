import type { StudioConfig } from './types';
import { demoContact, demoForm } from './shared';

/** Estudio contable · identidad: verde inglés y papel frío. Hero en columnas con foto vertical. */
export const contable: StudioConfig = {
  id: 'contable',
  label: 'Contable',
  name: 'Cifra',
  descriptor: 'Estudio contable',
  mark: "C",
  sectionMark: "№",
  demo: true,
  seo: {
    title: 'Cifra · Estudio contable',
    description:
      'Orden contable e impositivo para profesionales, comercios y empresas. Información confiable y explicada sin vueltas. Sitio demostrativo.',
  },
  theme: {
    paper: '#f3f1ea',
    paper2: '#e7e7dd',
    ink: '#13201c',
    muted: '#4f5d57',
    line: '#d0d4c8',
    accent: '#1f4a3e',
    onAccent: '#f3f1ea',
    night: '#0f1d19',
    onNight: '#e9ede6',
  },
  nav: { studio: 'El estudio', areas: 'Servicios', philosophy: 'Forma de trabajo', contact: 'Contacto' },
  hero: {
    layout: 'split',
    eyebrow: 'Estudio contable',
    title: 'Números\n*claros* para\ndecidir con\ntranquilidad.',
    lede: 'Orden contable e impositivo para profesionales, comercios y empresas: información confiable, a tiempo y explicada sin vueltas.',
    primaryCta: 'Hablemos de tu situación',
    secondaryCta: 'Ver servicios',
    photo: 2,
  },
  studio: {
    eyebrow: 'El estudio',
    title: 'Contabilidad que *se entiende* y acompaña el crecimiento.',
    paragraphs: [
      'Detrás de cada balance hay decisiones reales: cuánto invertir, cuándo contratar, cómo cumplir sin pagar de más. Nuestro trabajo es que esas decisiones se tomen con información ordenada.',
      'Combinamos rigor técnico con una comunicación sencilla. Te explicamos qué dicen los números, qué vencimientos se acercan y qué opciones existen dentro del marco legal vigente.',
    ],
    pillars: [
      { title: 'Orden', text: 'Documentación, registros y vencimientos bajo control.' },
      { title: 'Anticipación', text: 'Te avisamos antes de que llegue el plazo, no después.' },
      { title: 'Transparencia', text: 'Honorarios y alcances acordados por escrito.' },
    ],
    photo: 3,
    caption: 'Fotografía ilustrativa',
  },
  areas: {
    eyebrow: 'Servicios',
    title: 'Lo que *resolvemos* por vos',
    intro:
      'Servicios que este estudio de ejemplo podría ofrecer. En el sitio definitivo se ajustan a lo que el estudio realmente presta.',
    consultLabel: 'Consultar por este servicio',
    items: [
      {
        title: 'Impuestos y cumplimiento',
        summary: 'Liquidación y presentación de obligaciones, planificación y respuesta ante requerimientos.',
        topics: ['Monotributo y autónomos', 'IVA y Ganancias', 'Ingresos Brutos', 'Regularización de deudas'],
        photo: 4,
      },
      {
        title: 'Contabilidad y balances',
        summary: 'Registración, estados contables e informes para bancos, socios y organismos.',
        topics: ['Contabilidad mensual', 'Estados contables', 'Informes profesionales', 'Libros societarios'],
        photo: 1,
      },
      {
        title: 'Sueldos y cargas sociales',
        summary: 'Liquidaciones y asesoramiento para empleadores, con sus obligaciones al día.',
        topics: ['Recibos y cargas sociales', 'Altas y bajas', 'Libro de sueldos digital', 'Consultas laborales'],
        photo: 5,
      },
      {
        title: 'Emprendedores y pymes',
        summary: 'Estructura, inscripciones y planificación para iniciar o poner en orden una actividad.',
        topics: ['Inscripciones', 'Elección de régimen', 'Presupuestos y flujos', 'Planificación'],
        photo: 6,
      },
    ],
  },
  philosophy: {
    eyebrow: 'Forma de trabajo',
    title: 'Información *ordenada*, decisiones más simples.',
    intro: 'Tres compromisos que guían la relación con cada cliente.',
    principles: [
      { title: 'Confianza', text: 'Información tratada con reserva y criterio profesional, sin excepciones.' },
      { title: 'Atención personalizada', text: 'Un contador de referencia para tu caso, con canales de contacto definidos.' },
      { title: 'Claridad', text: 'Informes legibles: qué pasó, qué significa y qué conviene hacer.' },
    ],
    photo: 1,
  },
  contact: {
    eyebrow: 'Contacto',
    title: 'Pongamos *en orden*\nlo que hoy te preocupa.',
    text: 'Escribinos con tu situación y te respondemos con una propuesta clara de cómo trabajar juntos.',
    data: demoContact,
    form: { ...demoForm, submit: 'Enviar consulta' },
  },
  photos: {
    1: { alt: 'Fachada blanca de líneas geométricas escalonadas contra el cielo', focus: '50% 50%', author: 'Julien Moreau', unsplashId: '688Fna1pwOQ' },
    2: { alt: 'Oficina luminosa con un gran ventanal y plantas, vista desde el escritorio', focus: '50% 45%', author: 'Mike Von', unsplashId: '2hzL3NMOozs' },
    3: { alt: 'Edificio de ladrillo oscuro visto en diagonal', focus: '50% 40%', author: 'Akin Cakiner', unsplashId: 'LtS0APv6-5c' },
    4: { alt: 'Torre de vidrio vista desde abajo', focus: '50% 50%', author: 'Karen Uppal', unsplashId: 'TLjNPAz6d4g' },
    5: { alt: 'Fachada de líneas oscuras que se cruzan en perspectiva', focus: '50% 50%', author: 'Anders Jildén', unsplashId: 'Sc5RKXLBjGg' },
    6: { alt: 'Detalle arquitectónico geométrico en tonos grises', focus: '50% 40%', author: 'Ryunosuke Kikuno', unsplashId: 'ILFfFsqmt2A' },
  },
};
