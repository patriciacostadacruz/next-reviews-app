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
                {/* argument prefetch={false} can be added to the Link - allows to avoid prefecthing the doc in prod builds */}
                <Link href="/about">About</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          Game data and images, courtesy of:{' '}
          <a href="https://rawg.io/" target="blank">
            RAWG
          </a>
        </footer>
      </body>
    </html>
  );
}
