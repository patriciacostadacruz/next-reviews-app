import type { ReactNode } from 'react';
import Link from 'next/link';
import './globals.css';

interface RootProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootProps) {
  return (
    <html lang="en">
      <body className="flex flex-col px-4 py-2 min-h-screen">
        <header>
          <nav>
            <ul className="flex gap-2">
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
        <main className="border-t py-3 text-center text-xs">{children}</main>
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
