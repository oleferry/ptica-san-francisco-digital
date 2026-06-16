import { motion } from "framer-motion";
import { CalendarDays, ExternalLink } from "lucide-react";

// Página de reservas online (SimplyBook.me). El color de marca se configura en
// SimplyBook → Settings → Design para que coincida con el verde de la web.
const SIMPLYBOOK_URL = "https://opticasanfrancisco.simplybook.it/v2/";

const BookingSection = () => (
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
        <iframe
          title="Reserva de cita en Óptica San Francisco"
          src={SIMPLYBOOK_URL}
          className="w-full"
          style={{ height: 720, border: 0 }}
          loading="lazy"
        />
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

export default BookingSection;
