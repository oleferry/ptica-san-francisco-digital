import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre nosotros", href: "#sobre-nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Progresivas", href: "#progresivas" },
  { label: "Test visual", href: "#test-visual" },
  { label: "Blog", href: "#blog" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <button onClick={() => scrollTo("#inicio")} className="text-left leading-none">
          <span className="block font-serif text-xl md:text-2xl font-medium text-primary tracking-tight">Óptica San Francisco</span>
          <span className="block text-[10px] font-sans uppercase tracking-[0.3em] text-muted-foreground mt-1">Desde 1982</span>
        </button>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              {l.label}
            </button>
          ))}
          <Button size="sm" onClick={() => scrollTo("#reserva")}>
            Reservar cita
          </Button>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <a href="tel:+34987000000" className="p-2 text-primary">
            <Phone className="w-5 h-5" />
          </a>
          <button onClick={() => setOpen(!open)} className="p-2 text-foreground">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-background border-b border-border pb-4">
          <div className="container flex flex-col gap-2">
            {navLinks.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="text-left py-2 text-foreground/70 hover:text-primary transition-colors"
              >
                {l.label}
              </button>
            ))}
            <Button className="mt-2" onClick={() => scrollTo("#reserva")}>
              Reservar cita
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
