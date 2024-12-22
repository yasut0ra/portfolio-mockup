import { useEffect, useRef } from 'react';

interface Options {
  speed?: number;
  disabled?: boolean;
}

export function useParallax({ speed = 0.7, disabled = false }: Options = {}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (disabled) return;
    
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const scrolled = window.scrollY;
      const yPos = -(scrolled * speed);
      element.style.transform = `translate3d(0, ${yPos}px, 0)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, disabled]);

  return ref;
}