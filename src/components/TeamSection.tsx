import { motion } from "framer-motion";

/**
 * Equipo. Las fotos se sirven desde /public/equipo (ver public/equipo/LEEME.txt).
 * NOTA: confirmar el nombre/rol de cada persona según las chapas identificativas.
 */
const team = [
  {
    name: "Yolanda Pedrero",
    role: "Directora técnica",
    photo: "/equipo/yolanda-pedrero.webp",
    note: "Más de 30 años de experiencia al frente del equipo técnico.",
  },
  {
    name: "Elisa Rivero Tomé",
    role: "Óptico-optometrista",
    photo: "/equipo/elisa-rivero.webp",
    note: "Más de 30 años cuidando la visión de nuestros clientes en León.",
  },
];

const TeamSection = () => (
  <section id="equipo" className="py-20 md:py-28">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14 max-w-2xl mx-auto"
      >
        <p className="text-sm font-sans font-semibold uppercase tracking-widest text-primary mb-3">
          Nuestro equipo
        </p>
        <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
          Caras conocidas, de toda la vida
        </h2>
        <p className="text-muted-foreground font-sans">
          Dos profesionales con más de 30 años de experiencia que te atienden con la cercanía
          y el criterio que solo da el tiempo.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {team.map((m, i) => (
          <motion.figure
            key={m.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.12, duration: 0.5, ease: "easeOut" }}
            whileHover={{ y: -6 }}
            className="group rounded-lg bg-card border border-border shadow-card hover:shadow-elevated transition-shadow overflow-hidden"
          >
            <div className="aspect-[4/5] overflow-hidden bg-muted">
              <img
                src={m.photo}
                alt={`${m.name}, ${m.role} en Óptica San Francisco`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <figcaption className="p-6 text-center">
              <h3 className="font-serif text-xl font-semibold">{m.name}</h3>
              <p className="text-sm text-primary font-sans font-medium uppercase tracking-wider mt-1">
                {m.role}
              </p>
              <p className="text-sm text-muted-foreground font-sans mt-3 leading-relaxed">
                {m.note}
              </p>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
