import { useState, useEffect, useRef, useCallback } from 'react';

export function useTypewriter(text, speed = 80) {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const isTypingRef = useRef(false);
  const indexRef = useRef(0);
  const timerRef = useRef(null);

  useEffect(() => {
    setDisplayedText('');
    setIsComplete(false);
    isTypingRef.current = false;
    indexRef.current = 0;

    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, [text]);

  const startTyping = useCallback(() => {
    if (isTypingRef.current) return;
    isTypingRef.current = true;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
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
        clearInterval(timerRef.current);
        timerRef.current = null;
        setIsComplete(true);
        isTypingRef.current = false;
      }
    }, speed);
  }, [text, speed]);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, []);

  return { displayedText, isComplete, startTyping };
}