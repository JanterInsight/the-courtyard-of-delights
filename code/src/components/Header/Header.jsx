import './Header.css';
import { Navbar } from './Navbar';

export function Header() {
  return (
    <header className="header" role="banner">
      <Navbar />
    </header>
  );
}