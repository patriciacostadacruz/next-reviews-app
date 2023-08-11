import { Orbitron } from 'next/font/google';
import { Exo_2 } from 'next/font/google';

// setting up fonts in the app
export const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
});

export const exo2 = Exo_2({
  subsets: ['latin'],
  variable: '--font-exo2',
});
