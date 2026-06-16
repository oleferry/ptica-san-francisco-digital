import { useNavigate, useLocation } from "react-router-dom";

/**
 * Devuelve una función para navegar a una sección de la home (p. ej. "#reserva").
 * Si ya estás en la home, hace scroll suave. Si estás en otra página (blog),
 * navega primero a "/" y luego baja a la sección.
 */
export function useSectionNav() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (href: string) => {
    if (pathname === "/") {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      // Espera a que la home monte antes de hacer scroll.
      setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }), 150);
    }
  };
}
