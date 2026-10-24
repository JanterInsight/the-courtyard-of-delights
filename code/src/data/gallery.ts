export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

const base = import.meta.env.BASE_URL;

export const galleryImages: GalleryImage[] = [
  { id: 1, src: `${base}images/ice-cream/768px/only_ice_cream_01.webp`, alt: 'Helado de vainilla con sirope de chocolate' },
  { id: 2, src: `${base}images/confiture/768px/only_confiture_1.webp`, alt: 'Mermelada de frutas casera en frasco' },
  { id: 3, src: `${base}images/croquette/768px/croquette_1.webp`, alt: 'Croquetas doradas y crujientes' },
  { id: 4, src: `${base}images/ice-cream-confiture/768px/icecream_confiture_1.webp`, alt: 'Helado con confitura de frutas' },
  { id: 5, src: `${base}images/ice-cream/768px/only_ice_cream_02.webp`, alt: 'Helado de fresa con trozos de fruta' },
  { id: 6, src: `${base}images/ice-cream-confiture/768px/icecream_confiture_2.webp`, alt: 'Helado con mermelada artesanal' },
  { id: 7, src: `${base}images/confiture/768px/only_confiture_3.webp`, alt: 'Confitura de frutas rojas' },
  { id: 8, src: `${base}images/ice-cream/768px/only_ice_cream_03.webp`, alt: 'Helado de chocolate con virutas' },
  { id: 9, src: `${base}images/confiture/768px/only_confiture_2.webp`, alt: 'Dulces y confituras variadas' },
  { id: 10, src: `${base}images/ice-cream/768px/only_ice_cream_04.webp`, alt: 'Helado de menta con chocolate' },
  { id: 11, src: `${base}images/ice-cream/768px/only_ice_cream_05.webp`, alt: 'Helado de limón refrescante' },
  { id: 12, src: `${base}images/ice-cream-confiture/768px/icecream_confiture_3.webp`, alt: 'Helado con confitura de fresa' },
  { id: 13, src: `${base}images/ice-cream/768px/only_ice_cream_06.webp`, alt: 'Helado de caramelo salado' },
  { id: 14, src: `${base}images/croquette/768px/croquette_2.webp`, alt: 'Croquetas caseras recién hechas' },
  { id: 15, src: `${base}images/ice-cream-confiture/768px/icecream_confiture_4.webp`, alt: 'Helado con confitura de melocotón' },
  { id: 16, src: `${base}images/ice-cream/768px/only_ice_cream_07.webp`, alt: 'Helado de vainilla con galleta' },
  { id: 17, src: `${base}images/ice-cream-confiture/768px/icecream_confiture_5.webp`, alt: 'Helado con confitura de arándanos' },
  { id: 18, src: `${base}images/ice-cream/768px/only_ice_cream_08.webp`, alt: 'Helado de stracciatella' },
  { id: 19, src: `${base}images/ice-cream-confiture/768px/icecream_confiture_6.webp`, alt: 'Helado con confitura de naranja' },
  { id: 20, src: `${base}images/ice-cream/768px/only_ice_cream_09.webp`, alt: 'Helado de pistacho' },
  { id: 21, src: `${base}images/ice-cream/768px/only_ice_cream_10.webp`, alt: 'Helado de café' },
  { id: 22, src: `${base}images/ice-cream/768px/only_ice_cream_11.webp`, alt: 'Helado de dulce de leche' },
  { id: 23, src: `${base}images/ice-cream/768px/only_ice_cream_12.webp`, alt: 'Helado de coco' },
  { id: 24, src: `${base}images/ice-cream/768px/only_ice_cream_13.webp`, alt: 'Helado de frutos rojos' },
  { id: 25, src: `${base}images/ice-cream/768px/only_ice_cream_14.webp`, alt: 'Helado de turrón' },
];
