import { Metadata } from 'next';
import type { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import { exo2, orbitron } from './fonts';
import './globals.css';

interface RootProps {
  children: ReactNode;
}

// used to give the page a global name and a template
export const metadata: Metadata = {
  title: {
    default: 'Indie Gamer',
    template: '%s | Indie Gamer',
  },
  description: 'Only the best indie games, reviewed for you.',
};

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
