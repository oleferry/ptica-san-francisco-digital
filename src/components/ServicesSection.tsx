import { motion } from "framer-motion";
import { Eye, Glasses, ScanEye, Wrench, Sun, Contact } from "lucide-react";

const services = [
  {
    icon: ScanEye,
    title: "Revisión visual completa",
    desc: "Un examen detallado y sin prisas para evaluar tu salud visual con la tecnología más avanzada.",
  },
  {
    icon: Glasses,
    title: "Lentes progresivas personalizadas",
    desc: "Diseñamos tus lentes progresivas a medida para una visión natural a todas las distancias.",
  },
  {
    icon: Eye,
    title: "Gafas graduadas",
    desc: "Amplia selección de monturas de calidad con asesoramiento profesional para encontrar las tuyas.",
  },
  {
    icon: Contact,
    title: "Lentillas y adaptaciones complejas",
    desc: "Adaptamos lentillas incluso en los casos más complejos, con seguimiento personalizado.",
  },
  {
    icon: Wrench,
    title: "Ajuste y mantenimiento",
    desc: "Mantenemos tus gafas siempre en perfecto estado con ajustes, limpieza y reparaciones.",
  },
  {
    icon: Sun,
    title: "Gafas de sol graduadas",
    desc: "Protege tus ojos del sol sin renunciar a una visión nítida con gafas de sol a tu medida.",
  },
];

const ServicesSection = () => (
  <section id="servicios" className="py-20 md:py-28">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="text-sm font-sans font-semibold uppercase tracking-widest text-primary mb-3">
          Nuestros servicios
        </p>
        <h2 className="text-3xl md:text-4xl font-serif font-semibold">
          Todo lo que necesitas para tu visión
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
            whileHover={{ y: -6 }}
            className="group p-6 md:p-8 rounded-lg bg-card shadow-card hover:shadow-elevated transition-shadow border border-border"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
              <s.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-serif text-xl font-semibold mb-3">{s.title}</h3>
            <p className="text-muted-foreground font-sans leading-relaxed text-sm">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
