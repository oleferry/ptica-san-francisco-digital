import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-leon-catedral.webp";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax: la imagen se mueve más lento que el scroll; el contenido se desvanece.
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={ref} id="inicio" className="relative min-h-[92vh] flex items-center pt-20 overflow-hidden">
      {/* Background image con parallax */}
      <motion.div className="absolute inset-0" style={{ y: imageY, scale: imageScale }}>
        <img
          src={heroImg}
          alt="Catedral de León vista nítidamente a través de unas gafas"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/55 to-foreground/10" />
      </motion.div>

      <motion.div className="container relative z-10" style={{ y: contentY, opacity: contentOpacity }}>
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-2xl">
          <motion.p
            variants={item}
            className="text-xs md:text-sm font-sans font-medium uppercase tracking-[0.25em] text-primary-foreground/70 mb-5"
          >
            Óptica San Francisco · León · Desde 1982
          </motion.p>
          <motion.h1
            variants={item}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-[1.1] text-primary-foreground mb-6"
          >
            Cuidando tu visión <br className="hidden md:block" />con la confianza de toda la vida.
          </motion.h1>
          <motion.p
            variants={item}
            className="text-lg md:text-xl text-primary-foreground/85 mb-10 leading-relaxed font-sans font-light max-w-xl"
          >
            Más de 40 años atendiendo a León con calma, criterio y soluciones visuales personalizadas.
          </motion.p>
          <motion.div variants={item} className="flex flex-wrap gap-4">
            <Button size="lg" onClick={() => scrollTo("#reserva")} className="text-base px-8 rounded-sm">
              Reserva tu cita con tranquilidad
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollTo("#servicios")}
              className="text-base px-8 rounded-sm border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
            >
              Conocer nuestros servicios
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Indicador de scroll */}
      <motion.button
        onClick={() => scrollTo("#sobre-nosotros")}
        aria-label="Desplázate para ver más"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.2 }, y: { repeat: Infinity, duration: 1.8, ease: "easeInOut" } }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </motion.button>
    </section>
  );
};

export default HeroSection;
