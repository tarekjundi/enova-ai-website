
import { useEffect, useRef, useState } from 'react';

interface MotionElementProps {
  children: React.ReactNode;
  animation?: 'slideUp' | 'slideLeft' | 'slideRight' | 'scale' | 'rotate' | 'bounce';
  delay?: number;
  duration?: number;
  threshold?: number;
}

const MotionElement: React.FC<MotionElementProps> = ({ 
  children, 
  animation = 'slideUp', 
  delay = 0, 
  duration = 800,
  threshold = 0.1 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay, threshold]);

  const getAnimationClasses = () => {
    const baseClasses = `transition-all duration-${duration} ease-out`;
    
    if (!isVisible) {
      switch (animation) {
        case 'slideUp':
          return `${baseClasses} opacity-0 translate-y-8`;
        case 'slideLeft':
          return `${baseClasses} opacity-0 -translate-x-8`;
        case 'slideRight':
          return `${baseClasses} opacity-0 translate-x-8`;
        case 'scale':
          return `${baseClasses} opacity-0 scale-95`;
        case 'rotate':
          return `${baseClasses} opacity-0 rotate-3 scale-95`;
        case 'bounce':
          return `${baseClasses} opacity-0 translate-y-4 scale-90`;
        default:
          return `${baseClasses} opacity-0`;
      }
    }
    
    return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100 rotate-0`;
  };

  return (
    <div ref={elementRef} className={getAnimationClasses()}>
      {children}
    </div>
  );
};

interface ParallaxElementProps {
  children: React.ReactNode;
  speed?: number;
}

const ParallaxElement: React.FC<ParallaxElementProps> = ({ children, speed = 0.5 }) => {
  const [offset, setOffset] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const scrolled = window.pageYOffset;
        const parallax = scrolled * speed;
        setOffset(parallax);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div
      ref={elementRef}
      style={{ transform: `translateY(${offset}px)` }}
      className="transition-transform duration-75 ease-out"
    >
      {children}
    </div>
  );
};

interface FloatingElementProps {
  children: React.ReactNode;
  intensity?: number;
}

const FloatingElement: React.FC<FloatingElementProps> = ({ children, intensity = 1 }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const deltaX = (e.clientX - centerX) * intensity * 0.02;
        const deltaY = (e.clientY - centerY) * intensity * 0.02;
        
        setMousePosition({ x: deltaX, y: deltaY });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [intensity]);

  return (
    <div
      ref={elementRef}
      style={{
        transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
      }}
      className="transition-transform duration-200 ease-out"
    >
      {children}
    </div>
  );
};

export { MotionElement, ParallaxElement, FloatingElement };
