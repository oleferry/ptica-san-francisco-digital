import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Cookie } from "lucide-react";
import { GA_MEASUREMENT_ID, loadGa, gaPageview } from "@/lib/analytics";

const STORAGE_KEY = "osf_cookie_consent"; // "granted" | "denied"

/**
 * Banner de consentimiento + carga de Google Analytics 4.
 * GA no se activa hasta que el visitante pulsa "Aceptar".
 */
const Analytics = () => {
  const { pathname } = useLocation();
  const [consent, setConsent] = useState<string | null>(null);
  const [ready, setReady] = useState(false);

  // Al montar: recupera la decisión previa y carga GA si ya se aceptó.
  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(STORAGE_KEY);
    } catch {
      /* localStorage no disponible */
    }
    if (stored === "granted") loadGa();
    setConsent(stored);
    setReady(true);
  }, []);

  // Envía vista de página en cada cambio de ruta (solo si hay consentimiento).
  useEffect(() => {
    if (consent === "granted") gaPageview(pathname);
  }, [pathname, consent]);

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "granted");
    } catch {
      /* ignore */
    }
    loadGa();
    setConsent("granted");
  };

  const reject = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "denied");
    } catch {
      /* ignore */
    }
    setConsent("denied");
  };

  // Sin ID configurado, no hay nada que consentir.
  if (!GA_MEASUREMENT_ID) return null;

  // El banner solo aparece si aún no hay decisión.
  const showBanner = ready && consent === null;

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.3 }}
          role="region"
          aria-label="Aviso de cookies"
          className="fixed bottom-4 left-4 right-4 z-[70] mx-auto max-w-2xl rounded-xl border border-border bg-card shadow-elevated p-5 md:p-6"
        >
          <div className="flex items-start gap-4">
            <div className="hidden sm:flex w-10 h-10 rounded-full bg-primary/10 items-center justify-center shrink-0">
              <Cookie className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1">
              <p className="font-serif font-semibold mb-1">Cookies y privacidad</p>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                Usamos cookies de analítica para entender cómo se usa la web y mejorarla.
                Puedes aceptarlas o rechazarlas; si las rechazas, no se activará ningún
                seguimiento. Más información en nuestra{" "}
                <Link to="/politica-de-cookies" className="text-primary underline hover:no-underline">
                  Política de cookies
                </Link>
                .
              </p>
              <div className="flex flex-wrap gap-3 mt-4">
                <Button size="sm" onClick={accept}>
                  Aceptar
                </Button>
                <Button size="sm" variant="outline" onClick={reject}>
                  Rechazar
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Analytics;
