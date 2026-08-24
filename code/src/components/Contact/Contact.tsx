import './Contact.css';
import { useTheme } from '@hooks/useTheme';
import { contactInfo } from '@data/contact';
import { Reveal } from '@components/UI';
import { ContactCard } from './ContactCard';

function getIconPath(baseName: string, isDark: boolean): string {
  const themeSuffix = isDark ? 'dark_theme' : 'light_theme';
  return `icon/${baseName}-32x32-${themeSuffix}.png`;
}

export function Contact() {
  const { isDark } = useTheme();

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
              icon={getIconPath('telephone-icon', isDark)}
              title="Llámanos"
              info={contactInfo.phone}
              buttonText="Llamar Ahora"
              href={`tel:${contactInfo.phoneRaw}`}
            />
          </Reveal>

          <Reveal direction="up" delay={150}>
            <ContactCard
              icon={getIconPath('whatsapp-icon', isDark)}
              title="WhatsApp"
              info={contactInfo.phone}
              buttonText="Escribir por WhatsApp"
              href={contactInfo.whatsappUrl}
            />
          </Reveal>

          <Reveal direction="up" delay={300}>
            <ContactCard
              icon={getIconPath('Map-icon', isDark)}
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
