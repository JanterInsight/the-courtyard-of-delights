import { useEffect, useRef, useState } from 'react';
import { useIntersectionObserver } from '@hooks/useIntersectionObserver';

interface AnimatedCounterProps {
  target: number;
  prefix?: string;
  duration?: number;
}

export function AnimatedCounter({ target, prefix = '', duration = 2000 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const { targetRef, hasIntersected } = useIntersectionObserver<HTMLSpanElement>({
    threshold: 0.5,
  });
  const hasAnimated = useRef(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!hasIntersected || hasAnimated.current) return;

    hasAnimated.current = true;

    // Respeta prefers-reduced-motion: muestra el valor final sin animar
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      rafRef.current = requestAnimationFrame(() => {
        setCount(target);
        rafRef.current = null;
      });
      return;
    }

    const increment = target / (duration / 16);
    let current = 0;

    const updateCounter = () => {
      current += increment;
      if (current < target) {
        setCount(Math.floor(current));
        rafRef.current = requestAnimationFrame(updateCounter);
      } else {
        setCount(target);
        rafRef.current = null;
      }
    };

    rafRef.current = requestAnimationFrame(updateCounter);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [hasIntersected, target, duration]);

  return (
    <span ref={targetRef} className="stat-number">
      {prefix}{count}
    </span>
  );
}
