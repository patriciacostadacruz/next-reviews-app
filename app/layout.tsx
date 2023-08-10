import type { ReactNode } from 'react';
import Link from 'next/link';

interface RootProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootProps) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/reviews">Reviews</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer>[footer]</footer>
      </body>
    </html>
  );
}
