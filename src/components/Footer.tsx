import logo from "@/assets/logo-osf.png";

const Footer = () => (
  <footer className="py-14 border-t border-border bg-card">
    <div className="container flex flex-col items-center text-center">
      <img src={logo} alt="Óptica San Francisco · Desde 1982" className="h-24 w-auto mb-4" />
      <p className="font-serif italic text-foreground/70 mb-4">Cuidando tu visión, con la confianza de toda la vida.</p>
      <p className="text-sm text-muted-foreground font-sans">
        © {new Date().getFullYear()} Óptica San Francisco · León, España
      </p>
    </div>
  </footer>
);

export default Footer;
