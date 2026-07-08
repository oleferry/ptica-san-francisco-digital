/**
 * Google Analytics 4 — carga diferida y condicionada al consentimiento.
 * GA solo se inicializa cuando el visitante ACEPTA las cookies (RGPD).
 */
export const GA_MEASUREMENT_ID = "G-MEHYVR7Y5Q";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

let loaded = false;

/** Inyecta gtag.js e inicializa GA (una sola vez). */
export function loadGa(): void {
  if (loaded || !GA_MEASUREMENT_ID || typeof document === "undefined") return;
  loaded = true;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  // Las vistas de página las enviamos a mano (SPA): desactivamos el automático.
  window.gtag("config", GA_MEASUREMENT_ID, { send_page_view: false });
}

/** Envía una vista de página (para el enrutado de la SPA). */
export function gaPageview(path: string): void {
  if (!loaded || typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", "page_view", {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
}

/** Borra (best-effort) las cookies de Google Analytics al retirar el consentimiento. */
export function clearGaCookies(): void {
  if (typeof document === "undefined") return;
  const names = ["_ga", "_gid", `_ga_${GA_MEASUREMENT_ID.replace(/^G-/, "")}`];
  const domains = [window.location.hostname, `.${window.location.hostname}`];
  for (const name of names) {
    for (const domain of domains) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${domain}`;
    }
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
  }
}
