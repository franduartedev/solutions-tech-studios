import { useState, type FormEvent } from 'react';
import { ArrowRight, Clock, Mail, MapPin, Phone, Check } from 'lucide-react';
import type { StudioConfig } from '../config';
import { Reveal } from './Reveal';
import { Mk } from '../lib/rich';
import { Rich } from '../lib/rich';

interface Props {
  studio: StudioConfig;
  subject: string;
  onSubject: (s: string) => void;
}

/**
 * Contacto. El formulario es una SIMULACIÓN: no hace ninguna petición de red ni guarda datos.
 * Para producción, conectar onSubmit a un backend o a un servicio de formularios.
 */
export function Contact({ studio, subject, onSubject }: Props) {
  const c = studio.contact;
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
    onSubject('');
  };

  const d = c.data;
  const rows = [
    { Icon: Mail, label: 'Correo', value: d.email },
    { Icon: Phone, label: 'Teléfono', value: d.phone },
    { Icon: MapPin, label: 'Dirección', value: d.address },
    { Icon: Clock, label: 'Horarios', value: d.hours },
  ];

  return (
    <section id="contacto" className="section contact">
      <div className="container contact-grid">
        <div className="contact-copy">
          <Reveal>
            <p className="eyebrow"><span className="eyebrow-n"><Mk s={studio} n={4} /></span>{c.eyebrow}</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display h-xl-sec"><Rich text={c.title} /></h2>
          </Reveal>
          <Reveal as="p" delay={160} className="body-lg contact-text">{c.text}</Reveal>
          <Reveal as="dl" delay={220} className="contact-data">
            {rows.map(({ Icon, label, value }) => (
              <div key={label}>
                <dt>
                  <Icon size={18} strokeWidth={1.5} aria-hidden="true" />
                  <span>{label}</span>
                </dt>
                <dd>{value}</dd>
              </div>
            ))}
          </Reveal>
          {studio.demo && <p className="demo-note">Datos de contacto de ejemplo.</p>}
        </div>

        <Reveal delay={120} className="contact-card">
          {sent ? (
            <div className="form-done" role="status">
              <span className="form-done-icon"><Check size={22} strokeWidth={1.5} aria-hidden="true" /></span>
              <p>{c.form.success}</p>
              <button type="button" className="btn-link" onClick={() => setSent(false)}>
                <span>Volver al formulario</span>
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="form" autoComplete="off">
              <div className="field">
                <label htmlFor="f-name">{c.form.name}</label>
                <input id="f-name" name="name" type="text" required autoComplete="off" />
              </div>
              <div className="field">
                <label htmlFor="f-email">{c.form.email}</label>
                <input id="f-email" name="email" type="email" required autoComplete="off" />
              </div>
              <div className="field">
                <label htmlFor="f-subject">{c.form.subject}</label>
                <select id="f-subject" name="subject" value={subject} onChange={(e) => onSubject(e.target.value)}>
                  <option value="">{c.form.subjectPlaceholder}</option>
                  {studio.areas.items.map((it) => (
                    <option key={it.title} value={it.title}>{it.title}</option>
                  ))}
                  <option value="Otra consulta">Otra consulta</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="f-msg">{c.form.message}</label>
                <textarea id="f-msg" name="message" rows={4} required />
              </div>
              <button type="submit" className="btn btn-ink">
                <span>{c.form.submit}</span>
                <span className="btn-ico" aria-hidden="true"><ArrowRight size={16} strokeWidth={1.75} /></span>
              </button>
              <p className="form-notice">{c.form.notice}</p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
