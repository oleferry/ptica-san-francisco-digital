import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    category: "Lentes progresivas",
    title: "Cómo saber si necesitas gafas progresivas",
    excerpt: "Si tienes más de 40 años y empiezas a alejar el móvil para leer, puede que sea el momento de considerar unas lentes progresivas.",
    date: "12 Mar 2026",
  },
  {
    category: "Salud visual",
    title: "La regla 20-20-20 para descansar los ojos",
    excerpt: "Una técnica sencilla que puede reducir la fatiga visual digital. Cada 20 minutos, mira algo a 20 pies durante 20 segundos.",
    date: "5 Mar 2026",
  },
  {
    category: "Visión infantil",
    title: "Miopía infantil: prevención y revisiones",
    excerpt: "La miopía en niños está aumentando. Descubre qué señales debes vigilar y cuándo llevar a tu hijo a una revisión.",
    date: "28 Feb 2026",
  },
  {
    category: "Consejos para gafas",
    title: "Cómo elegir gafas progresivas cómodas",
    excerpt: "No todas las progresivas son iguales. Te explicamos qué factores influyen en la comodidad y la adaptación.",
    date: "20 Feb 2026",
  },
];

const BlogSection = () => (
  <section id="blog" className="py-20 md:py-28">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="text-sm font-sans font-semibold uppercase tracking-widest text-primary mb-3">
          Blog de salud visual
        </p>
        <h2 className="text-3xl md:text-5xl font-serif font-medium">
          Ver bien es calidad de vida
        </h2>
        <p className="text-muted-foreground font-sans mt-4 max-w-xl mx-auto">
          Explicamos con calma lo que conviene saber sobre tu visión, sin tecnicismos innecesarios.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {posts.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group rounded-lg border border-border bg-card shadow-card hover:shadow-elevated transition-shadow overflow-hidden cursor-pointer"
          >
            <div className="h-2 bg-primary/80" />
            <div className="p-6">
              <span className="text-xs font-sans font-semibold uppercase tracking-wider text-primary">
                {p.category}
              </span>
              <h3 className="font-serif text-lg font-semibold mt-2 mb-3 group-hover:text-primary transition-colors leading-snug">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed mb-4">
                {p.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground font-sans">{p.date}</span>
                <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;
