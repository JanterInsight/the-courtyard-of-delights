import './BackToTop.css';
import { useScrollPosition } from '@hooks/useScrollPosition';

export function BackToTop() {
  const scrollY = useScrollPosition();
  const isVisible = scrollY > 300;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={`back-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Volver al inicio de la página"
      title="Volver arriba"
      tabIndex={isVisible ? 0 : -1}
    >
      ↑
    </button>
  );
}
