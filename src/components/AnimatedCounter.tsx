
import { useEffect, useRef, useCallback } from "react";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ end, duration = 2000, suffix = "" }) => {
  const counterRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const hasAnimated = useRef(false);

  const animate = useCallback(() => {
    if (!textRef.current) return;
    let startTime: number;
    const el = textRef.current;
    const isFloat = end % 1 !== 0;

    const tick = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const value = isFloat
        ? (easeOutQuart * end).toFixed(1)
        : Math.floor(easeOutQuart * end).toString();
      el.textContent = value + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [end, duration, suffix]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animate();
        }
      },
      { threshold: 0.5 }
    );
    if (counterRef.current) observer.observe(counterRef.current);
    return () => observer.disconnect();
  }, [animate]);

  return (
    <div ref={counterRef}>
      <p ref={textRef} className="text-5xl font-bold text-primary mb-2 font-founders tracking-tight">
        0{suffix}
      </p>
    </div>
  );
};

export default AnimatedCounter;
