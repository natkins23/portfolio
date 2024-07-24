/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      scrollSnapType: {
        y: 'scroll-snap-type: y mandatory',
        x: 'scroll-snap-type: x mandatory',
      },
      scrollSnapAlign: {
        start: 'scroll-snap-align: start',
        center: 'scroll-snap-align: center',
        end: 'scroll-snap-align: end',
      },
      scrollSnapStop: {
        always: 'scroll-snap-stop: always',
        never: 'scroll-snap-stop: never',
      },
      colors: {
        navy: {
          600: '#2C5282',
          700: '#1A365D',
        },
        teal: {
          600: '#319795',
          700: '#2C7A7B',
        },
      },
      animation: {
        fadeInOut: 'fadeInOut 3s',
      },
      keyframes: {
        fadeInOut: {
          '0%': { opacity: 0 },
          '20%': { opacity: 1 },
          '80%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
}
