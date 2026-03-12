import { motion } from "framer-motion";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => (
  <section id="contacto" className="py-20 md:py-28 bg-secondary">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="text-sm font-sans font-semibold uppercase tracking-widest text-primary mb-3">
          Contacto
        </p>
        <h2 className="text-3xl md:text-4xl font-serif font-semibold">
          Ven a conocernos
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 lg:gap-16 max-w-5xl mx-auto">
        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-serif font-semibold mb-1">Dirección</h3>
              <p className="text-muted-foreground font-sans text-sm">
                Calle San Francisco, 12<br />24003 León, España
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-serif font-semibold mb-1">Teléfono</h3>
              <p className="text-muted-foreground font-sans text-sm">
                <a href="tel:+34987000000" className="hover:text-primary transition-colors">987 000 000</a>
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-serif font-semibold mb-1">Horario</h3>
              <p className="text-muted-foreground font-sans text-sm">
                Lunes a Viernes: 10:00 – 14:00 / 17:00 – 20:00<br />
                Sábados: 10:00 – 14:00
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-4">
            <Button asChild>
              <a href="tel:+34987000000">
                <Phone className="w-4 h-4 mr-2" />
                Llamar
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://wa.me/34987000000" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
            </Button>
            <Button
              variant="outline"
              onClick={() => document.querySelector("#reserva")?.scrollIntoView({ behavior: "smooth" })}
            >
              Reservar cita
            </Button>
          </div>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="rounded-lg overflow-hidden shadow-soft border border-border min-h-[300px]"
        >
          <iframe
            title="Ubicación de Óptica San Francisco en León"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2950.5!2d-5.57!3d42.598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sLe%C3%B3n%2C+Spain!5e0!3m2!1ses!2ses!4v1"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: 300 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default ContactSection;
