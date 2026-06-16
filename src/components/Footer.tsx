import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo-osf.webp";
import { SITE } from "@/lib/site";

const navLinks = [
  { label: "Sobre nosotros", href: "#sobre-nosotros" },
  { label: "Equipo", href: "#equipo" },
  { label: "Servicios", href: "#servicios" },
  { label: "Progresivas", href: "#progresivas" },
  { label: "Reservar cita", href: "#reserva" },
  { label: "Test visual", href: "#test-visual" },
  { label: "Contacto", href: "#contacto" },
];

const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="container py-14">
      <div className="grid gap-10 md:grid-cols-3 lg:gap-16">
        {/* Marca */}
        <div className="flex flex-col items-start">
          <img src={logo} alt="Óptica San Francisco · Desde 1982" className="h-20 w-auto mb-4" />
          <p className="font-serif italic text-foreground/70 mb-5 max-w-xs">
            Cuidando tu visión, con la confianza de toda la vida.
          </p>
          <div className="flex gap-3">
            <a
              href={SITE.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Óptica San Francisco"
              className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={SITE.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook de Óptica San Francisco"
              className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Navegación */}
        <div>
          <h3 className="font-serif font-semibold mb-4">Navegación</h3>
          <ul className="space-y-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-muted-foreground font-sans hover:text-primary transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="font-serif font-semibold mb-4">Contacto</h3>
          <ul className="space-y-3 text-sm text-muted-foreground font-sans">
            <li className="flex gap-2">
              <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>
                {SITE.address.street}, {SITE.address.postalCode} {SITE.address.city}
              </span>
            </li>
            <li className="flex gap-2">
              <Phone className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <a href={SITE.phoneHref} className="hover:text-primary transition-colors">
                {SITE.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-2">
              <Mail className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <a href={`mailto:${SITE.email}`} className="hover:text-primary transition-colors">
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border mt-10 pt-6 text-center">
        <p className="text-sm text-muted-foreground font-sans">
          © {new Date().getFullYear()} {SITE.name} · {SITE.address.city}, {SITE.address.country}
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
