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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold leading-tight text-primary-foreground mb-6">
            Cuidando la visión de León desde hace más de 40 años.
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed font-sans">
            Atención cercana, revisiones sin prisas y soluciones adaptadas a cada persona.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" onClick={() => scrollTo("#reserva")} className="text-base px-8">
              Reservar cita
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollTo("#servicios")}
              className="text-base px-8 border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10"
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
