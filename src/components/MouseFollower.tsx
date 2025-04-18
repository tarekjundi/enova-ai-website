
import React, { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Don't initialize on mobile devices
    if (isMobile) return;

    // Show the follower after a small delay to prevent jumpy behavior on initial load
    const timer = setTimeout(() => {
      setVisible(true);
    }, 500);

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updatePosition);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      clearTimeout(timer);
    };
  }, [isMobile]);

  // Don't render anything on mobile or when not visible
  if (isMobile || !visible) return null;

  return (
    <div
      className="pointer-events-none fixed z-50 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#9b87f5] opacity-70 blur-sm transition-transform duration-200 ease-out"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};

export default MouseFollower;
