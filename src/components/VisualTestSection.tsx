import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, AlertCircle, ArrowRight } from "lucide-react";

const questions = [
  "¿Te cuesta leer de cerca o necesitas alejar el texto?",
  "¿Notas fatiga visual al final del día?",
  "¿Entrecierras los ojos para ver de lejos?",
  "¿Tienes dolores de cabeza frecuentes?",
  "¿Te cuesta adaptarte a cambios de luz?",
];

const VisualTestSection = () => {
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [yesCount, setYesCount] = useState(0);
  const [finished, setFinished] = useState(false);

  const answer = (yes: boolean) => {
    const newCount = yes ? yesCount + 1 : yesCount;
    if (yes) setYesCount(newCount);

    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      setYesCount(newCount);
      setFinished(true);
    }
  };

  const reset = () => {
    setStarted(false);
    setCurrent(0);
    setYesCount(0);
    setFinished(false);
  };

  const needsReview = yesCount >= 2;

  return (
    <section id="test-visual" className="py-20 md:py-28 bg-secondary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-10">
            <p className="text-sm font-sans font-semibold uppercase tracking-widest text-primary mb-3">
              Test de salud visual
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
              ¿Cómo está tu visión?
            </h2>
            <p className="text-muted-foreground font-sans">
              Responde unas breves preguntas para saber si conviene una revisión.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-card shadow-soft p-8 md:p-10 min-h-[280px] flex flex-col items-center justify-center">
            <AnimatePresence mode="wait">
              {!started && !finished && (
                <motion.div
                  key="start"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center"
                >
                  <p className="text-muted-foreground font-sans mb-6">
                    Son solo {questions.length} preguntas rápidas. No sustituye una revisión profesional.
                  </p>
                  <Button size="lg" onClick={() => setStarted(true)}>
                    Comenzar test
                  </Button>
                </motion.div>
              )}

              {started && !finished && (
                <motion.div
                  key={`q-${current}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="text-center w-full"
                >
                  <p className="text-xs text-muted-foreground font-sans mb-2 uppercase tracking-wider">
                    Pregunta {current + 1} de {questions.length}
                  </p>
                  <div className="w-full bg-muted rounded-full h-1.5 mb-8">
                    <div
                      className="bg-primary h-1.5 rounded-full transition-all"
                      style={{ width: `${((current + 1) / questions.length) * 100}%` }}
                    />
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl font-semibold mb-8">
                    {questions[current]}
                  </h3>
                  <div className="flex gap-4 justify-center">
                    <Button size="lg" onClick={() => answer(true)} className="min-w-[100px]">
                      Sí
                    </Button>
                    <Button size="lg" variant="outline" onClick={() => answer(false)} className="min-w-[100px]">
                      No
                    </Button>
                  </div>
                </motion.div>
              )}

              {finished && (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    {needsReview ? (
                      <AlertCircle className="w-7 h-7 text-primary" />
                    ) : (
                      <CheckCircle className="w-7 h-7 text-primary" />
                    )}
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl font-semibold mb-3">
                    {needsReview
                      ? "Te recomendamos una revisión visual"
                      : "Tu visión parece estable"}
                  </h3>
                  <p className="text-muted-foreground font-sans mb-6 max-w-md mx-auto">
                    {needsReview
                      ? "Según tus respuestas, podrías beneficiarte de una revisión visual completa. ¡Estamos aquí para ayudarte!"
                      : "Parece que tu visión está bien, pero conviene revisarla al menos una vez al año para prevenir problemas."}
                  </p>
                  <div className="flex gap-4 justify-center flex-wrap">
                    <Button
                      size="lg"
                      onClick={() => document.querySelector("#reserva")?.scrollIntoView({ behavior: "smooth" })}
                    >
                      Reservar revisión visual
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                    <Button size="lg" variant="outline" onClick={reset}>
                      Repetir test
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisualTestSection;
