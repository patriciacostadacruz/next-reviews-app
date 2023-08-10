import type { ReactNode } from 'react';

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
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/reviews">Reviews</a>
              </li>
              <li>
                <a href="/about">About</a>
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
