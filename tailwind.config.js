/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.tsx', './components/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['var(--font-orbitron)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
