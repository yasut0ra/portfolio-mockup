import React, { useState } from 'react';
import { cn } from '../../utils/cn';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

interface Ripple {
  x: number;
  y: number;
  id: number;
}

export function RippleButton({ children, className, onClick, ...props }: Props) {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setRipples((prev) => [
      ...prev,
      { x, y, id: Date.now() },
    ]);

    onClick?.(e);
  };

  return (
    <button
      className={cn(
        'relative overflow-hidden transition-transform duration-300 hover:scale-105',
        className
      )}
      onClick={handleClick}
      {...props}
    >
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute bg-white/30 rounded-full animate-ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
            transform: 'translate(-50%, -50%)',
          }}
          onAnimationEnd={() => {
            setRipples((prev) =>
              prev.filter((r) => r.id !== ripple.id)
            );
          }}
        />
      ))}
      {children}
    </button>
  );
}