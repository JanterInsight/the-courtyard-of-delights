import { useEffect, useState } from 'react';
import './MotionNotice.css';

const STORAGE_KEY = 'motion-notice-dismissed';

function getPrefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Aviso discreto que informa al usuario de que las animaciones están
 * desactivadas por la preferencia "reducir movimiento" del sistema.
 * Solo aparece mientras esa preferencia esté activa y puede cerrarse
 * (no vuelve a mostrarse tras cerrarlo).
 */
export function MotionNotice() {
  const [reduced, setReduced] = useState(getPrefersReducedMotion);
  const [dismissed, setDismissed] = useState(
    () => localStorage.getItem(STORAGE_KEY) === 'true'
  );

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');

    const handleChange = (e: MediaQueryListEvent) => {
      setReduced(e.matches);
    };

    mq.addEventListener('change', handleChange);
    return () => mq.removeEventListener('change', handleChange);
  }, []);

  if (!reduced || dismissed) return null;

  const handleDismiss = () => {
    localStorage.setItem(STORAGE_KEY, 'true');
    setDismissed(true);
  };

  return (
    <div className="motion-notice" role="status">
      <span className="motion-notice-icon" aria-hidden="true">🎬</span>
      <p className="motion-notice-text">
        Las animaciones están desactivadas en tu dispositivo. Activa el
        movimiento en los ajustes de accesibilidad para disfrutar de todos
        los efectos.
      </p>
      <button
        className="motion-notice-close"
        onClick={handleDismiss}
        aria-label="Cerrar aviso"
      >
        &times;
      </button>
    </div>
  );
}
