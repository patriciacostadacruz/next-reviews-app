import type { ReactNode } from 'react';

interface ReviewsProps {
  children: ReactNode;
}

export default function ReviewsLayout({ children }: ReviewsProps) {
  return (
    <div>
      <div>[reviews navbar]</div>
      {children}
    </div>
  );
}
