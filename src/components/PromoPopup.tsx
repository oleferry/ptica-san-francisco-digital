import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PROMO } from "@/lib/promo";

const STORAGE_KEY = "osf_promo_dismissed_at";

const PromoPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!PROMO.enabled) return;

    // ¿Ya se descartó hace poco?
    try {
      const last = localStorage.getItem(STORAGE_KEY);
      if (last) {
        const days = (Date.now() - Number(last)) / (1000 * 60 * 60 * 24);
        if (days < PROMO.frequencyDays) return;
      }
    } catch {
      // localStorage no disponible: mostramos igualmente
    }

    const t = setTimeout(() => setOpen(true), PROMO.delaySeconds * 1000);
    return () => clearTimeout(t);
  }, []);

  const close = () => {
    setOpen(false);
    try {
      localStorage.setItem(STORAGE_KEY, String(Date.now()));
    } catch {
      /* ignore */
    }
  };

  const onCta = () => {
    close();
    if (PROMO.ctaHref.startsWith("#")) {
      document.querySelector(PROMO.ctaHref)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.open(PROMO.ctaHref, "_blank", "noopener,noreferrer");
    }
  };

  // Cerrar con Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="promo-title"
        >
          {/* Fondo */}
          <div className="absolute inset-0 bg-foreground/60 backdrop-blur-sm" onClick={close} />

          {/* Tarjeta */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", stiffness: 280, damping: 24 }}
            className="relative w-full max-w-md rounded-xl bg-card shadow-elevated border border-border overflow-hidden"
          >
            <button
              onClick={close}
              aria-label="Cerrar"
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground hover:bg-muted transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="bg-primary/10 px-8 pt-8 pb-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-3">
                <Sun className="w-6 h-6 text-primary" />
              </div>
              {PROMO.badge && (
                <p className="text-xs font-sans font-semibold uppercase tracking-widest text-primary mb-1">
                  {PROMO.badge}
                </p>
              )}
              <h2 id="promo-title" className="font-serif text-2xl md:text-3xl font-semibold">
                {PROMO.title}
              </h2>
            </div>

            <div className="px-8 py-6 text-center">
              <p className="text-muted-foreground font-sans leading-relaxed mb-6">{PROMO.message}</p>
              <Button size="lg" onClick={onCta} className="w-full sm:w-auto px-8">
                {PROMO.ctaLabel}
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PromoPopup;
