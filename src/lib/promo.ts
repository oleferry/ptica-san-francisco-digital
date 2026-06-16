/**
 * Configuración del popup de promociones / ofertas.
 * Edita estos valores para cambiar la promo. Pon `enabled: false` para ocultarlo.
 */
export const PROMO = {
  enabled: true,

  // Etiqueta pequeña arriba (opcional)
  badge: "Edición limitada",
  // Título de la promo
  title: "Gafas para el eclipse solar",
  // Texto explicativo
  message:
    "Reserva tus gafas homologadas para ver el eclipse solar con total seguridad. Unidades limitadas: déjanos tus datos y te avisamos para recogerlas en la óptica.",

  // Botón de acción
  ctaLabel: "Reservar mis gafas",
  ctaHref: "https://tally.so/r/A7jXGB", // formulario de reserva (Tally)

  // Cada cuántos días se vuelve a mostrar a un mismo visitante
  frequencyDays: 3,
  // Segundos que tarda en aparecer tras cargar la página
  delaySeconds: 4,
} as const;
