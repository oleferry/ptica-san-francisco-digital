import { motion } from "framer-motion";
import teamImg from "@/assets/team-optica.jpg";

const AboutSection = () => (
  <section id="sobre-nosotros" className="py-20 md:py-28 bg-secondary">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <img
            src={teamImg}
            alt="Equipo de optometristas de Óptica San Francisco"
            className="rounded-lg shadow-elevated w-full object-cover aspect-[4/3]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <p className="text-sm font-sans font-semibold uppercase tracking-widest text-primary mb-3">
            Sobre nosotros
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6 leading-snug">
            Más de cuatro décadas a tu lado
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed font-sans">
            <p>
              Óptica San Francisco nació en León hace más de 40 años con una idea clara:
              ofrecer atención visual de calidad con un trato cercano y sin prisas. Hoy seguimos
              fieles a esa filosofía.
            </p>
            <p>
              Nuestro equipo de optometristas cuenta con más de 30 años de experiencia,
              especializándose en lentes progresivas y adaptaciones complejas de lentillas.
            </p>
            <p className="italic text-foreground/80 border-l-2 border-primary pl-4">
              "Las personas que hoy nos visitan muchas veces llevan viniendo décadas.
              Invertimos tiempo en escuchar antes de recomendar."
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
