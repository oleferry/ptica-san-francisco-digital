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
          <h2 className="text-3xl md:text-5xl font-serif font-medium mb-6 leading-tight">
            Mimetika Pro de Indo
          </h2>
          <p className="text-muted-foreground font-sans leading-relaxed mb-6">
            No todos los progresivos son iguales. Las Mimetika Pro son nuestras lentes más
            cuidadas: personalizadas según tu forma de mirar, tus hábitos y tu día a día,
            para que la adaptación sea natural y la visión, clara a cualquier distancia.
            Te explicamos con calma si son la opción adecuada para ti.
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
            className="rounded-sm"
            onClick={() => document.querySelector("#reserva")?.scrollIntoView({ behavior: "smooth" })}
          >
            Pide tu estudio visual
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
            alt="Lentes progresivas Mimetika Pro de Indo"
            className="rounded-lg shadow-elevated w-full object-cover aspect-[4/3]"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default ProgressiveLensesSection;
