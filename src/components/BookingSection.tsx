import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

// Página de reservas online (SimplyBook.me). El color de marca se configura en
// SimplyBook → Settings → Design para que coincida con el verde de la web.
const SIMPLYBOOK_URL = "https://opticasanfrancisco.simplybook.it/v2/";

const BookingSection = () => {
  // El calendario es un iframe de un tercero (SimplyBook): puede fijar sus
  // propias cookies. Por privacidad, solo se carga si el usuario lo pide.
  const [loaded, setLoaded] = useState(false);

  return (
    <section id="reserva" className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <CalendarDays className="w-7 h-7 text-primary" />
          </div>
          <p className="text-sm font-sans font-semibold uppercase tracking-widest text-primary mb-3">
            Reserva de citas
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
            Reserva tu cita con tranquilidad
          </h2>
          <p className="text-muted-foreground font-sans leading-relaxed mb-10 max-w-xl mx-auto">
            Elige el servicio que necesitas y selecciona la hora que mejor te venga.
            Nos tomamos el tiempo necesario para atenderte como mereces.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="max-w-3xl mx-auto rounded-lg border border-border bg-card shadow-soft overflow-hidden"
        >
          {loaded ? (
            <iframe
              title="Reserva de cita en Óptica San Francisco"
              src={SIMPLYBOOK_URL}
              className="w-full"
              style={{ height: 720, border: 0 }}
              loading="lazy"
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-center p-10 md:p-14 min-h-[320px]">
              <CalendarDays className="w-10 h-10 text-primary mb-4" />
              <p className="font-serif text-xl font-semibold mb-2">
                Calendario de reservas
              </p>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed max-w-sm mb-6">
                Se carga a través de SimplyBook.me, un servicio externo. Solo se activa si
                pulsas el botón, para no cargar nada de terceros sin que lo decidas.
              </p>
              <Button size="lg" onClick={() => setLoaded(true)}>
                Cargar el calendario de reservas
              </Button>
            </div>
          )}
        </motion.div>

        <p className="text-center text-sm text-muted-foreground font-sans mt-5">
          ¿Prefieres abrir la reserva en una ventana nueva?{" "}
          <a
            href={SIMPLYBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-medium inline-flex items-center gap-1 hover:underline"
          >
            Abrir reservas <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </p>
      </div>
    </section>
  );
};

export default BookingSection;
