import './Footer.css';

export function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <p className="footer-text">
          © 2026 - El Patio de las Delicias - Helados Artesanales
          <br />
          Hecho con <span className="footer-heart" aria-hidden="true">❤️</span> para nuestra comunidad - Página Web creada por{' '}
          <a
            href="https://janterinsight.github.io/professional-portfolio/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Janlier Rojas Santana
          </a>
        </p>
      </div>
    </footer>
  );
}
