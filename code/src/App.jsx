import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Products } from './components/Products/Products';
import { Gallery } from './components/Gallery/Gallery';
import { Schedule } from './components/Schedule/Schedule';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import { BackToTop } from './components/UI/BackToTop';

export default function App() {
  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Saltar al contenido principal
      </a>

      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Products />
        <Gallery />
        <Schedule />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
