import type { CSSProperties, ReactNode } from 'react';
import { useIntersectionObserver } from '@hooks/useIntersectionObserver';

type RevealDirection = 'up' | 'left' | 'right' | 'zoom';

interface RevealProps {
  children: ReactNode;
  direction?: RevealDirection;
  /** Delay in ms for staggered grid effect */
  delay?: number;
}

/**
 * Wraps content and animates it on viewport entry via
 * IntersectionObserver. The animation is purely visual (opacity,
 * transform and filter): it does not affect geometry or inner observers.
 */
export function Reveal({ children, direction = 'up', delay = 0 }: RevealProps) {
  const { targetRef, hasIntersected } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.15,
  });

  const style: CSSProperties | undefined =
    delay > 0 ? { transitionDelay: `${delay}ms` } : undefined;

  return (
    <div
      ref={targetRef}
      style={style}
      className={`reveal reveal-${direction}${hasIntersected ? ' is-visible' : ''}`}
    >
      {children}
    </div>
  );
}
