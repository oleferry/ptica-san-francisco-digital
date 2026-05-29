const Footer = () => (
  <footer className="py-12 border-t border-border bg-card">
    <div className="container text-center">
      <p className="font-serif text-2xl font-medium text-primary mb-1 tracking-tight">Óptica San Francisco</p>
      <p className="text-xs font-sans uppercase tracking-[0.3em] text-muted-foreground mb-4">Desde 1982</p>
      <p className="font-serif italic text-foreground/70 mb-4">Cuidando tu visión, con la confianza de toda la vida.</p>
      <p className="text-sm text-muted-foreground font-sans">
        © {new Date().getFullYear()} Óptica San Francisco · León, España
      </p>
    </div>
  </footer>
);

export default Footer;
