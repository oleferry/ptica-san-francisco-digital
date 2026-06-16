import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import { HelmetProvider } from "react-helmet-async";
import type { RouteRecord } from "vite-react-ssg";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

/** Layout raíz: agrupa los providers globales. */
const Layout = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      {/* reducedMotion="user" → respeta prefers-reduced-motion en toda la web */}
      <MotionConfig reducedMotion="user">
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Outlet />
        </TooltipProvider>
      </MotionConfig>
    </QueryClientProvider>
  </HelmetProvider>
);

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Index /> },
      // El catch-all es solo de cliente (no se pre-renderiza).
      { path: "*", element: <NotFound /> },
    ],
  },
];
