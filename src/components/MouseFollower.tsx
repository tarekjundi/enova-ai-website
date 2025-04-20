
import React, { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) return;

    const timer = setTimeout(() => {
      setVisible(true);
      // Add cursor: none to the body when component mounts
      document.body.style.cursor = 'none';
    }, 500);

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updatePosition);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      clearTimeout(timer);
      // Reset cursor when component unmounts
      document.body.style.cursor = 'auto';
    };
  }, [isMobile]);

  if (isMobile || !visible) return null;

  return (
    <div
      className="pointer-events-none fixed z-50 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e0ff4f] opacity-70 blur-sm transition-transform duration-200 ease-out"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};

export default MouseFollower;
