import React from 'react';
import { useParallax } from '../../hooks/useParallax';
import { cn } from '../../utils/cn';

interface Props {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}

export function ParallaxBackground({
  children,
  className,
  speed = 0.7,
}: Props) {
  const ref = useParallax({ speed });

  return (
    <div ref={ref} className={cn('will-change-transform', className)}>
      {children}
    </div>
  );
}