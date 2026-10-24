export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

const base = import.meta.env.BASE_URL;

export const galleryImages: GalleryImage[] = [
  { id: 1, src: `${base}images/ice-cream/only_ice_cream_01.jpg`, alt: 'Helado de vainilla con sirope de chocolate' },
  { id: 2, src: `${base}images/confiture/only_confiture_1.jpg`, alt: 'Mermelada de frutas casera en frasco' },
  { id: 3, src: `${base}images/croquette/croquette_1.jpg`, alt: 'Croquetas doradas y crujientes' },
  { id: 4, src: `${base}images/ice-cream-confiture/icecream_confiture_1.jpg`, alt: 'Helado con confitura de frutas' },
  { id: 5, src: `${base}images/ice-cream/only_ice_cream_02.jpg`, alt: 'Helado de fresa con trozos de fruta' },
  { id: 6, src: `${base}images/ice-cream-confiture/icecream_confiture_2.jpg`, alt: 'Helado con mermelada artesanal' },
  { id: 7, src: `${base}images/confiture/only_confiture_3.jpg`, alt: 'Confitura de frutas rojas' },
  { id: 8, src: `${base}images/ice-cream/only_ice_cream_03.jpg`, alt: 'Helado de chocolate con virutas' },
  { id: 9, src: `${base}images/confiture/only_confiture_2.jpg`, alt: 'Dulces y confituras variadas' },
  { id: 10, src: `${base}images/ice-cream/only_ice_cream_04.jpg`, alt: 'Helado de menta con chocolate' },
  { id: 11, src: `${base}images/ice-cream/only_ice_cream_05.jpg`, alt: 'Helado de limón refrescante' },
  { id: 12, src: `${base}images/ice-cream-confiture/icecream_confiture_3.jpg`, alt: 'Helado con confitura de fresa' },
  { id: 13, src: `${base}images/ice-cream/only_ice_cream_06.jpg`, alt: 'Helado de caramelo salado' },
  { id: 14, src: `${base}images/croquette/croquette_2.jpg`, alt: 'Croquetas caseras recién hechas' },
  { id: 15, src: `${base}images/ice-cream-confiture/icecream_confiture_4.jpg`, alt: 'Helado con confitura de melocotón' },
  { id: 16, src: `${base}images/ice-cream/only_ice_cream_07.jpg`, alt: 'Helado de vainilla con galleta' },
  { id: 17, src: `${base}images/ice-cream-confiture/icecream_confiture_5.jpg`, alt: 'Helado con confitura de arándanos' },
  { id: 18, src: `${base}images/ice-cream/only_ice_cream_08.jpg`, alt: 'Helado de stracciatella' },
  { id: 19, src: `${base}images/ice-cream-confiture/icecream_confiture_6.jpg`, alt: 'Helado con confitura de naranja' },
  { id: 20, src: `${base}images/ice-cream/only_ice_cream_09.jpg`, alt: 'Helado de pistacho' },
  { id: 21, src: `${base}images/ice-cream/only_ice_cream_10.jpg`, alt: 'Helado de café' },
  { id: 22, src: `${base}images/ice-cream/only_ice_cream_11.jpg`, alt: 'Helado de dulce de leche' },
  { id: 23, src: `${base}images/ice-cream/only_ice_cream_12.jpg`, alt: 'Helado de coco' },
  { id: 24, src: `${base}images/ice-cream/only_ice_cream_13.jpg`, alt: 'Helado de frutos rojos' },
  { id: 25, src: `${base}images/ice-cream/only_ice_cream_14.jpg`, alt: 'Helado de turrón' },
];
