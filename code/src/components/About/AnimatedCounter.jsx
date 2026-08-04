import { useEffect, useRef, useState } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

export function AnimatedCounter({ target, prefix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const { targetRef, hasIntersected } = useIntersectionObserver({
    threshold: 0.5,
  });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!hasIntersected || hasAnimated.current) return;

    hasAnimated.current = true;
    const increment = target / (duration / 16);
    let current = 0;

    const updateCounter = () => {
      current += increment;
      if (current < target) {
        setCount(Math.floor(current));
        requestAnimationFrame(updateCounter);
      } else {
        setCount(target);
      }
    };

    updateCounter();
  }, [hasIntersected, target, duration]);

  return (
    <span ref={targetRef} className="stat-number">
      {prefix}{count}
    </span>
  );
}