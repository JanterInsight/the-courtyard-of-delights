import { useState, useEffect, useCallback } from 'react';
import { ThemeToggle } from '@components/UI';

interface NavLink {
  href: string;
  label: string;
  isButton?: boolean;
}

const navLinks: NavLink[] = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#productos', label: 'Productos' },
  { href: '#galeria', label: 'Galería' },
  { href: '#contacto', label: 'Contacto', isButton: true },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => {
      const next = !prev;
      document.body.style.overflow = next ? 'hidden' : '';
      return next;
    });
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeMenu();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen, closeMenu]);

  return (
    <nav className={`nav ${isScrolled ? 'scrolled' : ''}`} aria-label="Navegación principal">
      <a href="#inicio" className="logo" aria-label="El Patio de las Delicias - Inicio">
        <img
          className="logo-icon"
          src={`${import.meta.env.BASE_URL}icons/Icon-Main-Full-64x64.png`}
          alt=""
          aria-hidden="true"
          width="32"
          height="32"
          fetchPriority="high"
        />
        <span>El Patio de las Delicias</span>
      </a>

      <button
        className={`hamburger ${isMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label={isMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
        aria-expanded={isMenuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className={`nav-link ${link.isButton ? 'nav-link-button' : ''}`}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  );
}
