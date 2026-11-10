import type { StudioConfig } from './types';
import { demoContact, demoForm } from './shared';

/** Gestoría · identidad: azul tinta y papel crema. Hero con foto en arco (eco de las arcadas). */
export const gestoria: StudioConfig = {
  id: 'gestoria',
  label: 'Gestoría',
  name: 'Umbral',
  descriptor: 'Gestoría y trámites',
  mark: "U",
  sectionMark: "→",
  demo: true,
  seo: {
    title: 'Umbral · Gestoría y trámites',
    description:
      'Gestión de trámites y documentación ante organismos públicos y privados, con seguimiento claro de cada paso. Sitio demostrativo.',
  },
  theme: {
    paper: '#f5f0e6',
    paper2: '#ece4d3',
    ink: '#16202e',
    muted: '#535e70',
    line: '#d8cfbb',
    accent: '#1f3c73',
    onAccent: '#f5f0e6',
    night: '#0f1a2b',
    onNight: '#ebe8df',
  },
  nav: { studio: 'La gestoría', areas: 'Trámites', philosophy: 'Forma de trabajo', contact: 'Contacto' },
  hero: {
    layout: 'arch',
    eyebrow: 'Gestoría y trámites',
    title: 'Los trámites,\nresueltos con\n*método*.',
    lede: 'Gestionamos trámites y documentación ante organismos públicos y privados, con seguimiento claro de cada paso.',
    primaryCta: 'Iniciar una gestión',
    secondaryCta: 'Ver trámites',
    photo: 1,
  },
  studio: {
    eyebrow: 'La gestoría',
    title: 'El acompañamiento *paso a paso* que un trámite necesita.',
    paragraphs: [
      'Un trámite mal iniciado cuesta tiempo y dinero. Por eso empezamos revisando la documentación, los requisitos y los plazos, antes de presentar nada.',
      'Te informamos en qué etapa está cada gestión y qué se espera de vos, para que no tengas que ir persiguiendo respuestas.',
    ],
    pillars: [
      { title: 'Revisión previa', text: 'Verificamos requisitos y documentación antes de iniciar.' },
      { title: 'Seguimiento visible', text: 'Sabés en qué estado está tu trámite en cada momento.' },
      { title: 'Documentación ordenada', text: 'Todo queda registrado y resguardado, listo para cuando lo necesites.' },
    ],
    photo: 2,
    caption: 'Fotografía ilustrativa',
  },
  areas: {
    eyebrow: 'Trámites',
    title: 'Gestiones que *tomamos a cargo*',
    intro:
      'Trámites que esta gestoría de ejemplo podría realizar. En el sitio definitivo se detallan los que efectivamente se gestionan.',
    consultLabel: 'Consultar por este trámite',
    items: [
      {
        title: 'Automotor',
        summary: 'Trámites registrales del vehículo, de principio a fin y con documentación al día.',
        topics: ['Transferencias', 'Informes de dominio', 'Cambio de radicación', 'Baja y denuncia de venta'],
        photo: 3,
      },
      {
        title: 'Documentación y legalizaciones',
        summary: 'Certificados, apostillas y legalizaciones para uso local o en el exterior.',
        topics: ['Apostillas', 'Legalizaciones', 'Certificados', 'Coordinación de traducciones'],
        photo: 4,
      },
      {
        title: 'Inmuebles y registros',
        summary: 'Informes y certificados ante registros de la propiedad y organismos catastrales.',
        topics: ['Informes de dominio e inhibiciones', 'Certificados catastrales', 'Seguimiento de inscripciones'],
        photo: 6,
      },
      {
        title: 'Empresas y habilitaciones',
        summary: 'Inscripciones, habilitaciones y trámites periódicos de personas jurídicas y comercios.',
        topics: ['Inscripciones societarias', 'Habilitaciones comerciales', 'Rúbrica de libros', 'Presentaciones periódicas'],
        photo: 5,
      },
    ],
  },
  philosophy: {
    eyebrow: 'Forma de trabajo',
    title: 'Un trámite claro empieza *antes* de presentarlo.',
    intro: 'Tres compromisos que ordenan nuestra manera de gestionar.',
    principles: [
      { title: 'Confianza', text: 'Resguardo de tu documentación y claridad total sobre cada costo.' },
      { title: 'Atención personalizada', text: 'Una persona de referencia que conoce tu trámite de principio a fin.' },
      { title: 'Claridad', text: 'Requisitos, plazos y costos explicados antes de empezar.' },
    ],
    photo: 2,
  },
  contact: {
    eyebrow: 'Contacto',
    title: 'Contanos qué necesitás.\n*Nosotros* nos ocupamos.',
    text: 'Indicanos qué trámite tenés que hacer y te explicamos requisitos, plazos y costos antes de empezar.',
    data: demoContact,
    form: { ...demoForm, submit: 'Iniciar gestión' },
  },
  photos: {
    1: { alt: 'Arcada de piedra clara con una sucesión de arcos en perspectiva', focus: '50% 40%', author: 'Jon Tyson', unsplashId: 'Rwk3fu-d8qw' },
    2: { alt: 'Pasillo de un edificio con luz natural al fondo', focus: '50% 50%', author: 'chris wang', unsplashId: '_f7aNucnTuU' },
    3: { alt: 'Arco de piedra oscuro con una vista al fondo', focus: '50% 45%', author: 'Kevin Jackson', unsplashId: 'G4MS7DiBv5o' },
    4: { alt: 'Sobre cerrado con un sello de lacre rojo', focus: '50% 50%', author: 'SHAN LU', unsplashId: '_IBWeoe1VAA' },
    5: { alt: 'Corredor revestido en madera cálida', focus: '50% 45%', author: 'Creatopy', unsplashId: 'zaYgClEAE6A' },
    6: { alt: 'Pasaje de piedra bajo un arco antiguo', focus: '50% 40%', author: 'Georgii Eletskikh', unsplashId: '4j3Iz6MS_Jo' },
  },
};
