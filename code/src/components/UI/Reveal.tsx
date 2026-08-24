import type { CSSProperties, ReactNode } from 'react';
import { useIntersectionObserver } from '@hooks/useIntersectionObserver';

type RevealDirection = 'up' | 'left' | 'right' | 'zoom';

interface RevealProps {
  children: ReactNode;
  direction?: RevealDirection;
  /** Retardo en ms para crear efecto escalonado en grillas */
  delay?: number;
}

/**
 * Envuelve contenido y lo anima al entrar en el viewport mediante
 * IntersectionObserver. La animación es puramente visual (opacidad,
 * transform y filter): no afecta la geometría ni los observers internos.
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
