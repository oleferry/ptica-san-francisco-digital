import { useEffect } from "react";
import { Head } from "vite-react-ssg";
import { SITE } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

/**
 * Redirección corta para el QR de la tienda: opticasanfrancisco.com/instagram.
 * Enrutar a través del propio dominio (en vez de poner el enlace de Instagram
 * directamente en el QR) permite cambiar de destino sin reimprimir el cartel.
 */
const InstagramRedirect = () => {
  useEffect(() => {
    window.location.replace(SITE.social.instagram);
  }, []);

  return (
    <>
      <Head>
        <title>Síguenos en Instagram | Óptica San Francisco</title>
        <meta name="robots" content="noindex, follow" />
        <meta httpEquiv="refresh" content={`0;url=${SITE.social.instagram}`} />
      </Head>
      <div className="flex min-h-screen items-center justify-center bg-background px-6">
        <div className="text-center max-w-sm">
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
            <Instagram className="w-7 h-7 text-primary" />
          </div>
          <p className="font-serif text-xl font-semibold mb-2">
            Te llevamos a nuestro Instagram…
          </p>
          <p className="text-sm text-muted-foreground font-sans mb-6">
            Si no se abre automáticamente, pulsa el botón.
          </p>
          <Button size="lg" asChild>
            <a href={SITE.social.instagram}>Abrir Instagram</a>
          </Button>
        </div>
      </div>
    </>
  );
};

export default InstagramRedirect;
