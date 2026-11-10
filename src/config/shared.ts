import type { ContactData, StudioConfig } from './types';

/** Datos de contacto de ejemplo: reemplazar por los reales de cada cliente. */
export const demoContact: ContactData = {
  email: 'consultas@tuestudio.com.ar',
  phone: '+54 11 0000-0000',
  address: 'Dirección del estudio · Ciudad, Provincia',
  hours: 'Lunes a viernes, de 9 a 18 h',
};

/** Textos del formulario (simulado: no envía ni almacena nada). */
export const demoForm: StudioConfig['contact']['form'] = {
  name: 'Nombre y apellido',
  email: 'Correo electrónico',
  subject: 'Motivo de la consulta',
  subjectPlaceholder: 'Elegí una opción',
  message: 'Contanos brevemente tu consulta',
  submit: 'Enviar consulta',
  notice:
    'Formulario de demostración: en este sitio de ejemplo no se envía ni se guarda ninguna información.',
  success:
    'Gracias. Esto es una simulación: tu mensaje no fue enviado ni almacenado. En el sitio real, el estudio recibiría la consulta y te respondería a la brevedad.',
};

/** Créditos de la solución (pie de página). */
export const builder = {
  name: 'Solutions Tech',
  note: 'Sitio demostrativo creado por Solutions Tech. Nombres, textos y datos de contacto son de ejemplo.',
};
