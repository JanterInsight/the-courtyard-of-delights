import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { About } from '@components/About';
import { Products } from '@components/Products';
import { Gallery } from '@components/Gallery';

// Mock de IntersectionObserver para que Reveal no dependa del viewport
class MockIntersectionObserver {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
}

beforeEach(() => {
  vi.stubGlobal('IntersectionObserver', MockIntersectionObserver as unknown as typeof IntersectionObserver);
});

afterEach(() => {
  vi.unstubAllGlobals();
});

describe('Carga de imágenes - Sobre Nosotros', () => {
  it('renderiza la imagen del local con src y alt correctos', () => {
    render(<About />);

    const img = screen.getByAltText(/Interior del local El Patio de las Delicias/);
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', expect.stringContaining('images/local/local.webp'));
    expect(img).toHaveAttribute('loading', 'lazy');
  });

  it('dispara el evento onLoad de la imagen del local', () => {
    render(<About />);

    const img = screen.getByAltText(/Interior del local El Patio de las Delicias/);
    expect(img).toBeInTheDocument();

    fireEvent.load(img);
    expect(img).toBeInTheDocument();
  });
});

describe('Carga de imágenes - Nuestros Productos', () => {
  it('renderiza las 4 imágenes de productos con src y alt correctos', () => {
    render(<Products />);

    const productImages = screen.getAllByAltText(/de El Patio de las Delicias/);
    expect(productImages).toHaveLength(4);

    // Verificar que cada imagen tiene un src válido
    productImages.forEach((img: HTMLElement) => {
      expect(img).toHaveAttribute('src', expect.stringContaining('images/'));
      expect(img).toHaveAttribute('loading', 'eager');
    });
  });

  it('los títulos de productos no contienen emojis', () => {
    render(<Products />);

    const titles = screen.getAllByRole('heading', {
      name: /Helados Artesanales|Confituras|Croquetas|Helados \+ Confituras/,
    });
    expect(titles).toHaveLength(4);

    // Verificar que ninguno empieza con un emoji
    titles.forEach((title: HTMLElement) => {
      const text = title.textContent ?? '';
      expect(text).not.toMatch(/^[\p{Extended_Pictographic}\u{1F300}-\u{1F9FF}]/u);
    });
  });

  it('dispara el evento onLoad de cada imagen de producto', () => {
    render(<Products />);

    const productImages = screen.getAllByAltText(/de El Patio de las Delicias/);
    expect(productImages).toHaveLength(4);

    productImages.forEach((img: HTMLElement) => {
      fireEvent.load(img);
      expect(img).toBeInTheDocument();
    });
  });
});

describe('Carga de imágenes - Galería', () => {
  it('renderiza las imágenes visibles inicialmente de la galería', () => {
    render(<Gallery />);

    const galleryImages = screen.getAllByRole('button', {
      name: /Ver imagen \d+ de la galería/,
    });
    // Inicialmente se muestran 8 imágenes
    expect(galleryImages.length).toBeGreaterThan(0);
    expect(galleryImages.length).toBeLessThanOrEqual(8);
  });

  it('las imágenes de la galería tienen src y alt correctos', () => {
    render(<Gallery />);

    const buttons = screen.getAllByRole('button', {
      name: /Ver imagen \d+ de la galería/,
    });

    buttons.forEach((button: HTMLElement) => {
      const img = button.querySelector('img');
      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute('src', expect.stringContaining('images/'));
      expect(img).toHaveAttribute('alt', expect.any(String));
      expect((img as HTMLImageElement).alt.length).toBeGreaterThan(0);
    });
  });

  it('al hacer clic en una imagen de la galería se abre el Lightbox y carga la imagen', () => {
    render(<Gallery />);

    const galleryButtons = screen.getAllByRole('button', {
      name: /Ver imagen \d+ de la galería/,
    });

    // Hacer clic en la primera imagen
    fireEvent.click(galleryButtons[0]);

    // El Lightbox debería abrirse
    const lightbox = screen.getByRole('dialog', { name: /Visor de imágenes/ });
    expect(lightbox).toBeInTheDocument();

    // La imagen del lightbox debería tener un src
    const lightboxImg = lightbox.querySelector('img');
    expect(lightboxImg).toBeInTheDocument();
    expect(lightboxImg).toHaveAttribute('src', expect.stringContaining('images/'));

    // Disparar el evento onLoad de la imagen del lightbox
    fireEvent.load(lightboxImg as HTMLImageElement);
    expect(lightboxImg).toBeInTheDocument();
  });

  it('el Lightbox muestra el contador de imágenes', () => {
    render(<Gallery />);

    const galleryButtons = screen.getAllByRole('button', {
      name: /Ver imagen \d+ de la galería/,
    });

    fireEvent.click(galleryButtons[0]);

    const lightbox = screen.getByRole('dialog', { name: /Visor de imágenes/ });
    const counter = lightbox.querySelector('.lightbox-counter');
    expect(counter).toBeInTheDocument();
    expect(counter.textContent).toMatch(/\d+ \/ \d+/);
  });
});