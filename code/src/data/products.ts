export interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  srcSet: string;
  sizes: string;
  alt: string;
}

const base = import.meta.env.BASE_URL;

export const products: Product[] = [
  {
    id: 1,
    title: '🍦 Helados Artesanales',
    description:
      'Más de 10 sabores de helados artesanales elaborados con ingredientes naturales y frescos. Desde los clásicos hasta creaciones únicas.',
    image: `${base}images/400px/only_ice_cream_01.webp`,
    srcSet: `
      ${base}images/400px/only_ice_cream_01.webp 400w,
      ${base}images/576px/only_ice_cream_01.webp 576w,
      ${base}images/768px/only_ice_cream_01.webp 768w,
      ${base}images/1024px/only_ice_cream_01.webp 1024w,
      ${base}images/1440px/only_ice_cream_01.webp 1440w
    `.trim(),
    sizes: '(max-width: 480px) 400px, (max-width: 768px) 576px, (max-width: 1024px) 768px, (max-width: 1440px) 1024px, 1440px',
    alt: 'Helados artesanales de El Patio de las Delicias - variedad de sabores',
  },
  {
    id: 2,
    title: '🍯 Confituras',
    description:
      'Deliciosas confituras y mermeladas caseras elaboradas con frutas frescas de la temporada. Perfectas para acompañar tus desayunos y meriendas.',
    image: `${base}images/400px/only_confiture_1.webp`,
    srcSet: `
      ${base}images/400px/only_confiture_1.webp 400w,
      ${base}images/576px/only_confiture_1.webp 576w,
      ${base}images/768px/only_confiture_1.webp 768w,
      ${base}images/1024px/only_confiture_1.webp 1024w,
      ${base}images/1440px/only_confiture_1.webp 1440w
    `.trim(),
    sizes: '(max-width: 480px) 400px, (max-width: 768px) 576px, (max-width: 1024px) 768px, (max-width: 1440px) 1024px, 1440px',
    alt: 'Confituras caseras de El Patio de las Delicias - mermeladas y dulces',
  },
  {
    id: 3,
    title: '🥟 Croquetas',
    description:
      'Croquetas crujientes y deliciosas, perfectas para compartir. Elaboradas con ingredientes seleccionados y recetas tradicionales.',
    image: `${base}images/400px/croquette_1.webp`,
    srcSet: `
      ${base}images/400px/croquette_1.webp 400w,
      ${base}images/576px/croquette_1.webp 576w,
      ${base}images/768px/croquette_1.webp 768w,
      ${base}images/1024px/croquette_1.webp 1024w,
      ${base}images/1440px/croquette_1.webp 1440w
    `.trim(),
    sizes: '(max-width: 480px) 400px, (max-width: 768px) 576px, (max-width: 1024px) 768px, (max-width: 1440px) 1024px, 1440px',
    alt: 'Croquetas crujientes de El Patio de las Delicias - opciones saladas',
  },
  {
    id: 4,
    title: '🍨 Helados + Confituras',
    description:
      'La combinación perfecta: nuestros helados artesanales acompañados de deliciosas confituras caseras. Una experiencia única de sabor.',
    image: `${base}images/400px/icecream_confiture_1.webp`,
    srcSet: `
      ${base}images/400px/icecream_confiture_1.webp 400w,
      ${base}images/576px/icecream_confiture_1.webp 576w,
      ${base}images/768px/icecream_confiture_1.webp 768w,
      ${base}images/1024px/icecream_confiture_1.webp 1024w,
      ${base}images/1440px/icecream_confiture_1.webp 1440w
    `.trim(),
    sizes: '(max-width: 480px) 400px, (max-width: 768px) 576px, (max-width: 1024px) 768px, (max-width: 1440px) 1024px, 1440px',
    alt: 'Combinación de helados y confituras de El Patio de las Delicias',
  },
];
