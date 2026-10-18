/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        head: ['"Barlow Condensed"', 'sans-serif'],
        body: ['Barlow', 'sans-serif'],
      },
      colors: {
        navy: { DEFAULT: '#0E1A2B', mid: '#152338' },
        steel: '#1B3A5C',
        blue:   { DEFAULT: '#2472B3', light: '#3A8FD4' },
        silver: { DEFAULT: '#8DA9C4', light: '#C4D4E3' },
        muted: '#7A9AB8',
      },
      screens: {
        'xs': '380px',
      },
    },
  },
  plugins: [],
}
