import './Hero.css';
import { Typewriter } from './Typewriter';

export function Hero() {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <div className="hero-content">
        <h1 id="hero-title" className="hero-title">El Patio de las Delicias</h1>
        <p className="hero-subtitle">
          <Typewriter text="Helados Artesanales Hechos con Amor" speed={80} />
        </p>
        <p className="hero-description">
          Descubre nuestros deliciosos helados artesanales, confituras caseras y croquetas crujientes.
          El sabor tradicional que te transporta a los mejores momentos.
        </p>
        <div className="hero-buttons">
          <a href="#productos" className="btn btn-secondary">Ver Productos</a>
          <a href="#contacto" className="btn btn-primary">Contactar</a>
        </div>
      </div>
    </section>
  );
}
