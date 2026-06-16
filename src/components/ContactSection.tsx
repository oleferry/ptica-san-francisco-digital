import { motion } from "framer-motion";
import { MapPin, Phone, Clock, MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE, whatsappLink } from "@/lib/site";

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
                {SITE.address.street}<br />
                {SITE.address.postalCode} {SITE.address.city}, {SITE.address.country}
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
                <a href={SITE.phoneHref} className="hover:text-primary transition-colors">{SITE.phoneDisplay}</a>
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-serif font-semibold mb-1">Email</h3>
              <p className="text-muted-foreground font-sans text-sm">
                <a href={`mailto:${SITE.email}`} className="hover:text-primary transition-colors">{SITE.email}</a>
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-serif font-semibold mb-1">Horario</h3>
              <ul className="text-muted-foreground font-sans text-sm space-y-0.5">
                {SITE.hoursDisplay.map((h) => (
                  <li key={h.days}>
                    <span className="text-foreground/80">{h.days}:</span> {h.time}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-4">
            <Button asChild>
              <a href={SITE.phoneHref}>
                <Phone className="w-4 h-4 mr-2" />
                Llamar
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
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
            title="Ubicación de Óptica San Francisco en Plaza San Francisco 16, León"
            src="https://maps.google.com/maps?q=%C3%93ptica%20San%20Francisco%2C%20Plaza%20San%20Francisco%2016%2C%20Le%C3%B3n&z=16&output=embed"
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
