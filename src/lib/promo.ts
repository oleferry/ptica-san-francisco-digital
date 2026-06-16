/**
 * Configuración del popup de promociones / ofertas.
 * Edita estos valores para cambiar la promo. Pon `enabled: false` para ocultarlo.
 */
export const PROMO = {
  enabled: true,

  // Etiqueta pequeña arriba (opcional)
  badge: "Eclipse solar",
  // Título de la promo
  title: "Gafas para ver el eclipse con seguridad",
  // Texto explicativo
  message:
    "Para observar el eclipse solar conviene usar gafas homologadas. Si quieres, resérvalas con calma y te avisamos para recogerlas en la óptica.",

  // Botón de acción
  ctaLabel: "Reservar mis gafas",
  ctaHref: "https://tally.so/r/A7jXGB", // formulario de reserva (Tally)

  // Cada cuántos días se vuelve a mostrar a un mismo visitante
  frequencyDays: 3,
  // Segundos que tarda en aparecer tras cargar la página
  delaySeconds: 4,
} as const;
