import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * Efecto máquina de escribir sobre un texto dado.
 * Respeta prefers-reduced-motion mostrando el texto completo.
 * El texto se considera estable: si cambia, el consumidor debe
 * remontar (key) para reiniciar la animación.
 */
export function useTypewriter(text: string, speed = 80) {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const isTypingRef = useRef(false);
  const indexRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTyping = useCallback(() => {
    if (isTypingRef.current) return;
    isTypingRef.current = true;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayedText(text);
      setIsComplete(true);
      isTypingRef.current = false;
      return;
    }

    timerRef.current = setInterval(() => {
      if (indexRef.current < text.length) {
        indexRef.current += 1;
        setDisplayedText(text.slice(0, indexRef.current));
      } else {
        if (timerRef.current !== null) {
          clearInterval(timerRef.current);
          timerRef.current = null;
        }
        setIsComplete(true);
        isTypingRef.current = false;
      }
    }, speed);
  }, [text, speed]);

  // Limpia el intervalo al desmontar
  useEffect(() => {
    return () => {
      if (timerRef.current !== null) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, []);

  return { displayedText, isComplete, startTyping };
}
