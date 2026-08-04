import './About.css';
import { AnimatedCounter } from './AnimatedCounter';

const stats = [
  { target: 5, prefix: '+', label: 'Años de Experiencia' },
  { target: 10, prefix: '+', label: 'Sabores de Helado' },
  { target: 1000, prefix: '+', label: 'Clientes Felices' },
];

export function About() {
  return (
    <section id="nosotros" className="section about" aria-labelledby="about-title">
      <div className="container">
        <div className="section-header">
          <h2 id="about-title" className="section-title">Sobre Nosotros</h2>
          <p className="section-subtitle">Tradición y sabor en cada bocado</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              En <strong>El Patio de las Delicias</strong> elaboramos helados artesanales con una gran variedad de sabores.
              También ofrecemos dulces, confituras y otras opciones gastronómicas para compartir en familia.
            </p>
            <p className="about-description">
              Nuestro compromiso es ofrecer productos de la más alta calidad, elaborados con ingredientes frescos
              y recetas tradicionales que han pasado de generación en generación.
            </p>
            <p className="about-description">
              Ven a visitarnos y descubre por qué somos el lugar favorito de la comunidad para disfrutar
              de un delicioso helado en un ambiente cálido y acogedor.
            </p>
          </div>

          <div className="about-image">
            <img
              src="images/local/local1.jpg"
              alt="Interior del local El Patio de las Delicias - ambiente acogedor y familiar"
              loading="lazy"
              width="600"
              height="400"
            />
          </div>
        </div>

        {/* Animated counters */}
        <div className="stats">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <AnimatedCounter target={stat.target} prefix={stat.prefix} duration={2000} />
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}