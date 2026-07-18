import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import type { RouteRecord } from "vite-react-ssg";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Analytics from "@/components/Analytics";
import Index from "./pages/Index.tsx";
import BlogIndex from "./pages/BlogIndex.tsx";
import BlogPost from "./pages/BlogPost.tsx";
import InstagramRedirect from "./pages/InstagramRedirect.tsx";
import AvisoLegal from "./pages/AvisoLegal.tsx";
import PoliticaPrivacidad from "./pages/PoliticaPrivacidad.tsx";
import PoliticaCookies from "./pages/PoliticaCookies.tsx";
import NotFound from "./pages/NotFound.tsx";
import { articles } from "@/lib/blog";

const queryClient = new QueryClient();

/** Layout raíz: agrupa los providers globales. */
const Layout = () => (
  <QueryClientProvider client={queryClient}>
    {/* reducedMotion="user" → respeta prefers-reduced-motion en toda la web */}
    <MotionConfig reducedMotion="user">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Outlet />
        <Analytics />
      </TooltipProvider>
    </MotionConfig>
  </QueryClientProvider>
);

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Index /> },
      { path: "blog", element: <BlogIndex /> },
      {
        path: "blog/:slug",
        element: <BlogPost />,
        getStaticPaths: () => articles.map((a) => `/blog/${a.slug}`),
      },
      { path: "instagram", element: <InstagramRedirect /> },
      { path: "aviso-legal", element: <AvisoLegal /> },
      { path: "politica-de-privacidad", element: <PoliticaPrivacidad /> },
      { path: "politica-de-cookies", element: <PoliticaCookies /> },
      // "404" SÍ se pre-renderiza: Vercel sirve automáticamente dist/404.html
      // (con status 404 real) para cualquier ruta que no exista.
      { path: "404", element: <NotFound /> },
      // El catch-all es solo de cliente (por si la SPA navega a una ruta
      // desconocida sin recargar la página).
      { path: "*", element: <NotFound /> },
    ],
  },
];
