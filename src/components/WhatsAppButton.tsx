import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site";

/** Botón flotante de WhatsApp, fijo en la esquina inferior derecha. */
const WhatsAppButton = () => {
  const reduce = useReducedMotion();

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      initial={reduce ? false : { opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={reduce ? undefined : { scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      className="fixed bottom-5 right-5 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-elevated hover:shadow-lg group"
    >
      {/* Pulso sutil */}
      {!reduce && (
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping [animation-duration:2.5s]" />
      )}
      <MessageCircle className="w-7 h-7 relative z-10" fill="currentColor" stroke="none" />
      <span className="sr-only">Escríbenos por WhatsApp</span>
    </motion.a>
  );
};

export default WhatsAppButton;
