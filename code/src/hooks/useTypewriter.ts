import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * Typewriter effect for a given text.
 * Respects prefers-reduced-motion by showing the full text.
 * Text is considered stable: if it changes, the consumer must
 * remount (key) to restart the animation.
 */
export function useTypewriter(text: string, speed = 80) {
  const [displayedText, setDisplayedText] = useState('');
  const isTypingRef = useRef(false);
  const indexRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTyping = useCallback(() => {
    if (isTypingRef.current) return;
    isTypingRef.current = true;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayedText(text);
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
        isTypingRef.current = false;
      }
    }, speed);
  }, [text, speed]);

  // Clear interval on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current !== null) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, []);

  return { displayedText, startTyping };
}
