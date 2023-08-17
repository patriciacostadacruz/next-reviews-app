import type { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import { orbitron, exo2 } from './fonts';
import './globals.css';

interface RootProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootProps) {
  return (
    <html lang="en" className={`${orbitron.variable} ${exo2.variable}`}>
      <body className="bg-orange-50 flex flex-col px-4 py-2 min-h-screen">
        <header>
          <Navbar />
        </header>
        <main className="grow py-3">{children}</main>
        <footer className="border-t py-3 text-slate-500 text-center text-xs">
          Game data and images, courtesy of:{' '}
          <a
            href="https://rawg.io/"
            target="blank"
            className="text-orange-800 hover:underline"
          >
            RAWG
          </a>
        </footer>
      </body>
    </html>
  );
}
