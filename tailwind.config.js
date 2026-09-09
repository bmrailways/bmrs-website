/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        night: '#0e1620',
        navy: {
          DEFAULT: '#1b2a38',
          700: '#243949',
          500: '#31556b',
        },
        steel: {
          DEFAULT: '#517fa4',
          300: '#7aa3c2',
        },
        barn: {
          DEFAULT: '#9b2c2c',
          600: '#b42318',
          700: '#7a1d1d',
        },
        cream: '#f6f1e7',
        parchment: '#ebe3d4',
        gold: '#c9a227',
      },
      fontFamily: {
        display: ['Oswald', 'Arial Narrow', 'sans-serif'],
        sans: ['Source Sans 3', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        ticket: '0 18px 40px -24px rgba(14, 22, 32, 0.55)',
      },
    },
  },
  plugins: [],
}
