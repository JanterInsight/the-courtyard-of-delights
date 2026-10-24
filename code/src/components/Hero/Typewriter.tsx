import { useEffect } from 'react';
import { useTypewriter } from '@hooks/useTypewriter';
import { useIntersectionObserver } from '@hooks/useIntersectionObserver';

interface TypewriterProps {
  text: string;
  speed?: number;
}

export function Typewriter({ text, speed = 80 }: TypewriterProps) {
  // key={text}: when text changes, component remounts and animation restarts
  return <TypewriterText key={text} text={text} speed={speed} />;
}

function TypewriterText({ text, speed }: TypewriterProps) {
  const { displayedText, startTyping } = useTypewriter(text, speed);
  const { targetRef, hasIntersected } = useIntersectionObserver<HTMLSpanElement>({
    threshold: 0.5,
  });

  useEffect(() => {
    if (!hasIntersected) return;

    const id = requestAnimationFrame(startTyping);
    return () => cancelAnimationFrame(id);
  }, [hasIntersected, startTyping]);

  return (
    <span ref={targetRef} aria-label={text}>
      {displayedText}
      <span className="typewriter-cursor" aria-hidden="true"></span>
    </span>
  );
}
