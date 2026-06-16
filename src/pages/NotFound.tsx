import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Head } from "vite-react-ssg";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404: ruta no encontrada:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Head>
        <title>Página no encontrada | Óptica San Francisco</title>
        <meta name="robots" content="noindex, follow" />
      </Head>
      <div className="flex min-h-screen items-center justify-center bg-background px-6">
        <div className="text-center max-w-md">
          <p className="font-serif text-7xl md:text-8xl font-medium text-primary mb-4">404</p>
          <h1 className="font-serif text-2xl md:text-3xl font-semibold mb-3">
            No encontramos esta página
          </h1>
          <p className="text-muted-foreground font-sans mb-8">
            Es posible que el enlace haya cambiado o ya no exista. Volvamos a un lugar conocido.
          </p>
          <Button asChild size="lg">
            <a href="/">
              <Home className="w-4 h-4 mr-2" />
              Volver al inicio
            </a>
          </Button>
        </div>
      </div>
    </>
  );
};

export default NotFound;
