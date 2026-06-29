import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { articles, formatDate } from "@/lib/blog";

const BlogSection = () => {
  const latest = articles.slice(0, 4);

  return (
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
          <h2 className="text-3xl md:text-5xl font-serif font-medium">Ver bien es calidad de vida</h2>
          <p className="text-muted-foreground font-sans mt-4 max-w-xl mx-auto">
            Explicamos con calma lo que conviene saber sobre tu visión, sin tecnicismos innecesarios.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {latest.map((p, i) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                to={`/blog/${p.slug}`}
                className="group block h-full rounded-lg border border-border bg-card shadow-card hover:shadow-elevated transition-shadow overflow-hidden"
              >
                {p.cover ? (
                  <div className="aspect-[16/9] overflow-hidden bg-muted">
                    <img
                      src={p.cover}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <div className="h-2 bg-primary/80" />
                )}
                <div className="p-6">
                  <span className="text-xs font-sans font-semibold uppercase tracking-wider text-primary">
                    {p.category}
                  </span>
                  <h3 className="font-serif text-lg font-semibold mt-2 mb-3 group-hover:text-primary transition-colors leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-sans leading-relaxed mb-4">
                    {p.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground font-sans">{formatDate(p.date)}</span>
                    <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 font-sans font-medium text-primary hover:gap-3 transition-all"
          >
            Ver todas las entradas
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
