import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-optica.jpg";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center pt-20">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Interior de Óptica San Francisco en León" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/20" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="text-xs md:text-sm font-sans font-medium uppercase tracking-[0.25em] text-primary-foreground/70 mb-5">
            Óptica San Francisco · León · Desde 1982
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-[1.1] text-primary-foreground mb-6">
            Cuidando tu visión <br className="hidden md:block" />con la confianza de toda la vida.
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/85 mb-10 leading-relaxed font-sans font-light max-w-xl">
            Más de 40 años atendiendo a León con calma, criterio y soluciones visuales personalizadas.
          </p>
          <div className="flex flex-wrap gap-4">
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
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
