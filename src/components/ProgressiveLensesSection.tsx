import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import lensesImg from "@/assets/progressive-lenses.jpg";

const features = [
  "Personalización total según tu forma de mirar",
  "Tecnología avanzada de Indo con diseño digital",
  "Adaptación rápida y natural a todas las distancias",
  "Mejor experiencia visual en actividades cotidianas",
];

const ProgressiveLensesSection = () => (
  <section id="progresivas" className="py-20 md:py-28 bg-secondary">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="order-2 md:order-1"
        >
          <p className="text-sm font-sans font-semibold uppercase tracking-widest text-primary mb-3">
            Lentes progresivas premium
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6 leading-snug">
            Mimética Pro de Indo
          </h2>
          <p className="text-muted-foreground font-sans leading-relaxed mb-6">
            Las lentes progresivas Mimética Pro representan lo último en tecnología óptica.
            Se adaptan a tu forma única de mirar, ofreciendo una visión clara y cómoda
            a cualquier distancia, desde leer el móvil hasta conducir.
          </p>
          <ul className="space-y-3 mb-8">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-3 font-sans text-foreground/80">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <Button
            size="lg"
            onClick={() => document.querySelector("#reserva")?.scrollIntoView({ behavior: "smooth" })}
          >
            Reservar estudio visual
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="order-1 md:order-2"
        >
          <img
            src={lensesImg}
            alt="Lentes progresivas Mimética Pro de Indo"
            className="rounded-lg shadow-elevated w-full object-cover aspect-[4/3]"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default ProgressiveLensesSection;
