import './About.css';
import { AnimatedCounter } from './AnimatedCounter';
import { Reveal } from '@components/UI';

interface Stat {
  target: number;
  prefix: string;
  label: string;
}

const stats: Stat[] = [
  { target: 5, prefix: '+', label: 'Años de Experiencia' },
  { target: 10, prefix: '+', label: 'Sabores de Helado' },
  { target: 1000, prefix: '+', label: 'Clientes Felices' },
];

export function About() {
  return (
    <section id="nosotros" className="section about" aria-labelledby="about-title">
      <div className="container">
        <Reveal direction="up">
          <div className="section-header">
            <h2 id="about-title" className="section-title">Sobre Nosotros</h2>
            <p className="section-subtitle">Tradición y sabor en cada bocado</p>
          </div>
        </Reveal>

        <div className="about-content">
          <Reveal direction="left">
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
          </Reveal>

          <Reveal direction="right">
            <div className="about-image">
              <picture>
                <source
                  srcSet={`
                    ${import.meta.env.BASE_URL}images/400px/only_ice_cream_01.webp 400w,
                    ${import.meta.env.BASE_URL}images/576px/only_ice_cream_01.webp 576w,
                    ${import.meta.env.BASE_URL}images/768px/only_ice_cream_01.webp 768w,
                    ${import.meta.env.BASE_URL}images/1024px/only_ice_cream_01.webp 1024w,
                    ${import.meta.env.BASE_URL}images/1440px/only_ice_cream_01.webp 1440w
                  `.trim()}
                  sizes="(max-width: 480px) 400px, (max-width: 768px) 576px, (max-width: 1024px) 768px, (max-width: 1440px) 1024px, 1440px"
                  type="image/webp"
                />
                <img
                  src={`${import.meta.env.BASE_URL}images/768px/only_ice_cream_01.webp`}
                  alt="Interior del local El Patio de las Delicias - ambiente acogedor y familiar"
                  loading="lazy"
                  width="600"
                  height="400"
                  decoding="async"
                />
              </picture>
            </div>
          </Reveal>
        </div>

        <Reveal direction="up">
          <div className="stats">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <AnimatedCounter target={stat.target} prefix={stat.prefix} duration={2000} />
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
