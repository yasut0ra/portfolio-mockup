import React from 'react';

interface Props {
  children: React.ReactNode;
}

export function Layout({ children }: Props) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container py-6 md:py-8 lg:py-10">
        {children}
      </div>
    </div>
  );
}