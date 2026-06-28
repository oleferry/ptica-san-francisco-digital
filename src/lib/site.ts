/**
 * Configuración central del sitio — Óptica San Francisco
 * Datos reales del negocio (NAP). Cambiar aquí se refleja en toda la web,
 * el SEO (JSON-LD, Open Graph) y los enlaces de contacto.
 */

export const SITE = {
  name: "Óptica San Francisco",
  legalName: "Óptica San Francisco",
  tagline: "Cuidando tu visión desde 1982",
  foundedYear: "1982",
  description:
    "Óptica independiente en León con más de 40 años de experiencia. Revisión visual, gafas progresivas y adaptación de lentillas con atención cercana, sin prisas.",

  // Dominio definitivo (producción)
  url: "https://opticasanfrancisco.com",

  // Contacto
  phoneDisplay: "987 080 301",
  phoneHref: "tel:+34987080301",
  whatsappNumber: "34601761338",
  whatsappDisplay: "601 761 338",
  whatsappMessage: "Hola, me gustaría pedir información / cita en Óptica San Francisco.",
  email: "hola@opticasanfrancisco.com",

  // Dirección
  address: {
    street: "Plaza San Francisco, 16",
    postalCode: "24004",
    city: "León",
    region: "León",
    country: "España",
    countryCode: "ES",
  },

  // Geolocalización (Google Maps)
  geo: {
    lat: 42.5936371,
    lng: -5.5723731,
  },
  mapsPlaceUrl: "https://maps.app.goo.gl/ZDE9ugo78Xbb2SNGA",

  // Horario para mostrar (los sábados son alternos: no cabe en schema.org)
  hoursDisplay: [
    { days: "Lunes, miércoles y viernes", time: "9:00 – 16:00" },
    { days: "Martes y jueves", time: "9:00 – 19:30" },
    { days: "Sábados alternos", time: "10:00 – 14:00" },
    { days: "Domingo", time: "Cerrado" },
  ],

  // Horario estructurado para schema.org (solo lo fijo semanal; sábados alternos se omiten)
  openingHoursSpecification: [
    { days: ["Monday", "Wednesday", "Friday"], opens: "09:00", closes: "16:00" },
    { days: ["Tuesday", "Thursday"], opens: "09:00", closes: "19:30" },
  ],

  // Redes sociales
  social: {
    instagram: "https://www.instagram.com/opticasanfranciscoleon",
    instagramHandle: "@opticasanfranciscoleon",
    facebook: "https://www.facebook.com/opticasanfrancisco",
    facebookHandle: "@opticasanfrancisco",
  },

  // Datos de la empresa (titular) para textos legales
  legal: {
    companyName: "Gafasvan, S.L.",
    cif: "B-44902286",
    registeredAddress: "Calle El Salvador, 4, 47680 Mayorga (Valladolid)",
  },
} as const;

/** Enlace a WhatsApp con mensaje predefinido. */
export const whatsappLink = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
  SITE.whatsappMessage,
)}`;

/** Dirección completa en una línea. */
export const fullAddress = `${SITE.address.street}, ${SITE.address.postalCode} ${SITE.address.city}, ${SITE.address.country}`;
