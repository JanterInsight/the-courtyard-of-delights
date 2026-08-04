import { useEffect } from 'react';
import { useTypewriter } from '../../hooks/useTypewriter';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

export function Typewriter({ text, speed = 80 }) {
  const { displayedText, startTyping } = useTypewriter(text, speed);
  const { targetRef, hasIntersected } = useIntersectionObserver({
    threshold: 0.5,
  });

  useEffect(() => {
    if (hasIntersected) {
      startTyping();
    }
  }, [hasIntersected, startTyping]);

  return (
    <span ref={targetRef} aria-label={text}>
      {displayedText}
      <span className="typewriter-cursor" aria-hidden="true"></span>
    </span>
  );
}