"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconArrowUp } from "@tabler/icons-react";
import { Button } from "../ui/button";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      window.scrollY > 300 ? setIsVisible(true) : setIsVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    /* AnimatePresence é necessário para animar componentes que saem do DOM */
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }} // Começa pequeno e invisível
          animate={{ opacity: 1, scale: 1 }} // Anima para posição original
          exit={{ opacity: 0, scale: 0.5 }} // Anima ao sumir
          whileHover={{ scale: 1.1 }} // Aumenta ao passar o mouse
          whileTap={{ scale: 0.9 }} // Diminui ao clicar
          className="fixed bottom-8 right-8 z-50"
        >
          <Button
            onClick={scrollToTop}
            className="h-12 w-12"
            aria-label="Voltar ao topo"
          >
            <IconArrowUp className="size-6" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
