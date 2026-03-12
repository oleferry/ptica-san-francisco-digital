const Footer = () => (
  <footer className="py-10 border-t border-border bg-card">
    <div className="container text-center">
      <p className="font-serif text-lg font-semibold text-primary mb-2">Óptica San Francisco</p>
      <p className="text-sm text-muted-foreground font-sans">
        © {new Date().getFullYear()} Óptica San Francisco · León, España · Todos los derechos reservados
      </p>
    </div>
  </footer>
);

export default Footer;
