import { Link } from "react-router-dom";
import { Head } from "vite-react-ssg";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { articles, formatDate } from "@/lib/blog";
import { SITE } from "@/lib/site";

const BlogIndex = () => (
  <>
    <Head>
      <title>Blog de salud visual | Óptica San Francisco</title>
      <meta
        name="description"
        content="Consejos sobre salud visual, gafas progresivas, lentillas y cuidado de la vista, explicados con calma por Óptica San Francisco (León)."
      />
      <link rel="canonical" href={`${SITE.url}/blog`} />
    </Head>

    <Navbar />
    <main className="pt-28 md:pt-32 pb-20 md:pb-28">
      <div className="container">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <p className="text-sm font-sans font-semibold uppercase tracking-widest text-primary mb-3">
            Blog de salud visual
          </p>
          <h1 className="text-3xl md:text-5xl font-serif font-medium mb-4">
            Ver bien es calidad de vida
          </h1>
          <p className="text-muted-foreground font-sans">
            Explicamos con calma lo que conviene saber sobre tu visión, sin tecnicismos innecesarios.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {articles.map((p, i) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.06 }}
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
                  <h2 className="font-serif text-lg font-semibold mt-2 mb-3 group-hover:text-primary transition-colors leading-snug">
                    {p.title}
                  </h2>
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
      </div>
    </main>
    <Footer />
    <WhatsAppButton />
  </>
);

export default BlogIndex;
