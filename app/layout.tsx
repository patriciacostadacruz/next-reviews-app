import type { ReactNode } from 'react';
import './globals.css';
import Navbar from '../components/Navbar';

interface RootProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootProps) {
  return (
    <html lang="en">
      <body className="bg-orange-50 flex flex-col px-4 py-2 min-h-screen">
        <header>
          <Navbar />
        </header>
        <main className="grow py-3">{children}</main>
        <footer className="border-t py-3 text-center text-xs">
          Game data and images, courtesy of:{' '}
          <a href="https://rawg.io/" target="blank">
            RAWG
          </a>
        </footer>
      </body>
    </html>
  );
}
