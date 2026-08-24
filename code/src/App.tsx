import { Header } from '@components/Header';
import { Hero } from '@components/Hero';
import { About } from '@components/About';
import { Products } from '@components/Products';
import { Gallery } from '@components/Gallery';
import { Schedule } from '@components/Schedule';
import { Contact } from '@components/Contact';
import { Footer } from '@components/Footer';
import { BackToTop } from '@components/UI';

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
