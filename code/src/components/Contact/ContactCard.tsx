interface ContactCardProps {
  icon: string;
  title: string;
  info: string;
  buttonText: string;
  href: string;
}

export function ContactCard({ icon, title, info, buttonText, href }: ContactCardProps) {
  return (
    <div className="contact-card">
      <div className="contact-icon">
        <img src={icon} alt="" aria-hidden="true" fetchPriority="high" />
      </div>
      <h3 className="contact-title">{title}</h3>
      <p className="contact-info">{info}</p>
      <div className="contact-buttons">
        <a
          href={href}
          className="btn btn-primary"
          target={href.startsWith('tel:') ? undefined : '_blank'}
          rel={href.startsWith('tel:') ? undefined : 'noopener noreferrer'}
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
}
