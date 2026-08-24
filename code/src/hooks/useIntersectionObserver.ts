import { useEffect, useRef, useState } from 'react';

export interface UseIntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
}

/**
 * Observa cuándo un elemento entra en el viewport.
 * `hasIntersected` permanece en true tras la primera intersección.
 */
export function useIntersectionObserver<T extends HTMLElement = HTMLElement>(
  options: UseIntersectionObserverOptions = {}
) {
  const { threshold = 0.1, rootMargin = '0px' } = options;
  const [hasIntersected, setHasIntersected] = useState(false);
  const targetRef = useRef<T>(null);

  useEffect(() => {
    const element = targetRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setHasIntersected(true);
      }
    }, { threshold, rootMargin });

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  return { targetRef, hasIntersected };
}
