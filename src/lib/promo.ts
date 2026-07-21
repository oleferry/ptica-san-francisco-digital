import { SITE } from "@/lib/site";

/**
 * Configuración del popup de avisos / promociones.
 * Edita estos valores para cambiar el aviso. Pon `enabled: false` para ocultarlo.
 */
export const PROMO = {
  enabled: true,

  // Fecha (YYYY-MM-DD) en la que se desactiva automáticamente el popup.
  // Deja en null para que no caduque nunca por fecha.
  activeUntil: "2026-08-05" as string | null,

  // Etiqueta pequeña arriba (opcional)
  badge: "Cierre temporal",
  // Título del aviso
  title: "Cerramos unos días por reforma",
  // Texto explicativo
  message:
    `Del 27 de julio al 5 de agosto (aproximadamente) permaneceremos cerrados por una ` +
    `reforma en la óptica. Puedes seguir reservando tu cita, llamarnos al ${SITE.phoneDisplay} ` +
    `o escribirnos a ${SITE.email}. Te atenderemos en cuanto reabramos.`,

  // Botón de acción
  ctaLabel: "Reservar cita",
  ctaHref: "#reserva",

  // Cada cuántos días se vuelve a mostrar a un mismo visitante
  frequencyDays: 1,
  // Segundos que tarda en aparecer tras cargar la página
  delaySeconds: 2,
} as const;
