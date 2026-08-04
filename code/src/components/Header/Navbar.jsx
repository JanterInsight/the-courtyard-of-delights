import { useState, useEffect } from 'react';
import { ThemeToggle } from '../UI/ThemeToggle';

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

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    document.body.style.overflow = isMenuOpen ? '' : 'hidden';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        closeMenu();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  const navLinks = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#nosotros', label: 'Nosotros' },
    { href: '#productos', label: 'Productos' },
    { href: '#galeria', label: 'Galería' },
    { href: '#contacto', label: 'Contacto', isButton: true },
  ];

  return (
    <nav className={`nav ${isScrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Navegación principal">
      <a href="#inicio" className="logo" aria-label="El Patio de las Delicias - Inicio">
        <span className="logo-icon" aria-hidden="true">🍦</span>
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

      <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`} role="menubar">
        {navLinks.map((link) => (
          <li key={link.href} role="none">
            <a
              href={link.href}
              className={`nav-link ${link.isButton ? 'nav-link-button' : ''}`}
              role="menuitem"
              onClick={closeMenu}
            >
              {link.label}
            </a>
          </li>
        ))}
        <li role="none">
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  );
}