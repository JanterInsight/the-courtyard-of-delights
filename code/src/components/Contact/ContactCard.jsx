import { contactInfo } from '../../data/contact';

export function ContactCard({ icon, title, info, buttonText, href }) {
  return (
    <div className="contact-card">
      <div className="contact-icon">
        <img src={icon} alt="" aria-hidden="true" />
      </div>
      <h3 className="contact-title">{title}</h3>
      <p className="contact-info">{info}</p>
      <div className="contact-buttons">
        <a href={href} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          {buttonText}
        </a>
      </div>
    </div>
  );
}
