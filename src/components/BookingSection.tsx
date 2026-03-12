import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";

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

      {/* SimplyBook iframe placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
        className="max-w-3xl mx-auto rounded-lg border border-border bg-card shadow-soft overflow-hidden"
      >
        <div className="p-8 md:p-12 text-center">
          <p className="text-muted-foreground font-sans mb-4">
            Aquí se integrará tu widget de SimplyBook.me
          </p>
          <p className="text-sm text-muted-foreground/70 font-sans">
            Para activar la reserva online, añade tu URL de SimplyBook en el iframe de este componente.
          </p>
          {/* 
            Reemplaza este div con:
            <iframe 
              src="https://TU-NEGOCIO.simplybook.me/v2/" 
              width="100%" 
              height="600" 
              frameBorder="0"
            />
          */}
          <div className="mt-6 h-80 rounded-md bg-muted flex items-center justify-center">
            <span className="text-muted-foreground text-sm">Espacio para iframe de SimplyBook</span>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default BookingSection;
