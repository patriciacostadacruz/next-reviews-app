import type { ReactNode } from 'react';
import Link from 'next/link';

interface ReviewsProps {
  children: ReactNode;
}

export default function ReviewsLayout({ children }: ReviewsProps) {
  return (
    <div>
      <div>
        <ul>
          <li>
            <Link href="/reviews/hollow-knight">Hollow Knight</Link>
          </li>
          <li>
            <Link href="/reviews/stardew-valley">Stardew Valley</Link>
          </li>
        </ul>
      </div>
      {children}
    </div>
  );
}
