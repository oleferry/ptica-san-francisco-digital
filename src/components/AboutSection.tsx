import { motion } from "framer-motion";

const AboutSection = () => (
  <section id="sobre-nosotros" className="py-20 md:py-28 bg-secondary">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-3xl mx-auto text-center"
      >
        <p className="text-sm font-sans font-semibold uppercase tracking-widest text-primary mb-3">
          Sobre nosotros
        </p>
        <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-8 leading-snug">
          Más de cuatro décadas a tu lado
        </h2>
        <div className="space-y-5 text-muted-foreground leading-relaxed font-sans text-base md:text-lg">
          <p>
            Óptica San Francisco nació en León hace más de 40 años con una idea clara:
            ofrecer atención visual de calidad con un trato cercano y sin prisas. Hoy seguimos
            fieles a esa filosofía.
          </p>
          <p>
            Nuestro equipo cuenta con más de 30 años de experiencia, especializándose en lentes
            progresivas y adaptaciones complejas de lentillas.
          </p>
        </div>

        <blockquote className="mt-10 font-serif italic text-xl md:text-2xl text-foreground/80 leading-relaxed max-w-2xl mx-auto">
          “Las personas que hoy nos visitan muchas veces llevan viniendo décadas.
          Invertimos tiempo en escuchar antes de recomendar.”
        </blockquote>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
