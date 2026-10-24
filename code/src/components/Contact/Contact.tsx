import './Contact.css';
import { contactInfo } from '@data/contact';
import { Reveal } from '@components/UI';
import { ContactCard } from './ContactCard';
import { PhoneIcon } from '@components/UI/icons';
import { WhatsAppIcon } from '@components/UI/icons';
import { MapIcon } from '@components/UI/icons';

export function Contact() {
  return (
    <section id="contacto" className="section contact" aria-labelledby="contact-title">
      <div className="container">
        <Reveal direction="up">
          <div className="section-header">
            <h2 id="contact-title" className="section-title">Contacto</h2>
            <p className="section-subtitle">Estamos aquí para atenderte</p>
          </div>
        </Reveal>

        <div className="contact-content">
          <Reveal direction="up" delay={0}>
            <ContactCard
              icon={<PhoneIcon size={32} />}
              title="Llámanos"
              info={contactInfo.phone}
              buttonText="Llamar Ahora"
              href={`tel:${contactInfo.phoneRaw}`}
            />
          </Reveal>

          <Reveal direction="up" delay={150}>
            <ContactCard
              icon={<WhatsAppIcon size={32} />}
              title="WhatsApp"
              info={contactInfo.phone}
              buttonText="Escribir por WhatsApp"
              href={contactInfo.whatsappUrl}
            />
          </Reveal>

          <Reveal direction="up" delay={300}>
            <ContactCard
              icon={<MapIcon size={32} />}
              title="Visítanos"
              info={contactInfo.address}
              buttonText="Ver en Mapa"
              href={contactInfo.mapUrl}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
