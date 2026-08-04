import { useEffect, useRef, useState } from 'react';

export function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const element = targetRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        if (entry.isIntersecting && !hasIntersected) {
          setHasIntersected(true);
        }
      },
      {
        threshold: options.threshold ?? 0.1,
        rootMargin: options.rootMargin ?? '0px',
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [hasIntersected, options.threshold, options.rootMargin]);

  return { targetRef, isIntersecting, hasIntersected };
}

export function useMultipleIntersectionObserver(options = {}) {
  const [entries, setEntries] = useState({});
  const refsMap = useRef(new Map());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (observedEntries) => {
        observedEntries.forEach((entry) => {
          const id = entry.target.dataset.observerId;
          setEntries((prev) => ({
            ...prev,
            [id]: {
              isIntersecting: entry.isIntersecting,
              hasIntersected: prev[id]?.hasIntersecting || entry.isIntersecting,
            },
          }));
        });
      },
      {
        threshold: options.threshold ?? 0.1,
        rootMargin: options.rootMargin ?? '0px',
        ...options,
      }
    );

    refsMap.current.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => {
      refsMap.current.forEach((element) => {
        if (element) observer.unobserve(element);
      });
    };
  }, [options.threshold, options.rootMargin]);

  const observe = (id, element) => {
    if (element) {
      element.dataset.observerId = id;
      refsMap.current.set(id, element);
    }
  };

  const unobserve = (id) => {
    const element = refsMap.current.get(id);
    if (element) {
      refsMap.current.delete(id);
    }
  };

  return { observe, unobserve, entries };
}