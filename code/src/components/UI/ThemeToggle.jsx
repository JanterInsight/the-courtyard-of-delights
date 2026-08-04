import './ThemeToggle.css';
import { useTheme } from '../../hooks/useTheme';

export function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
    >
      <img
        src={isDark ? 'icon/light-mode.png' : 'icon/dark-mode.png'}
        alt=""
        className="theme-icon"
        aria-hidden="true"
      />
    </button>
  );
}
