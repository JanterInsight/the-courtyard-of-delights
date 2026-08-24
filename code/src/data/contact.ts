export interface ContactInfo {
  phone: string;
  phoneRaw: string;
  whatsappMessage: string;
  address: string;
  mapUrl: string;
  whatsappUrl: string;
}

const phoneRaw = '58993196';
const whatsappMessage =
  '¡Hola! Me gustaría hacer un pedido o consultar sobre sus productos.';

export const contactInfo: ContactInfo = {
  phone: '+53 58993196',
  phoneRaw,
  whatsappMessage,
  address: 'Calle 4ta, La Güira',
  mapUrl: 'https://maps.google.com/?q=Calle+4ta+La+Güira',
  whatsappUrl: `https://wa.me/${phoneRaw}?text=${encodeURIComponent(whatsappMessage)}`,
};
