export interface ContactInfo {
  phone: string;
  phoneRaw: string;
  whatsappMessage: string;
  address: string;
  mapUrl: string;
  whatsappUrl: string;
}

export const contactInfo: ContactInfo = {
  phone: '+53 58993196',
  phoneRaw: '58993196',
  whatsappMessage: '¡Hola! Me gustaría hacer un pedido o consultar sobre sus productos.',
  address: 'Calle 4ta, La Güira',
  mapUrl: 'https://maps.google.com/?q=Calle+4ta+La+Güira',
  whatsappUrl: 'https://wa.me/5358993196',
};
