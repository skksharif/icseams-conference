/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'conference-green': 'rgb(236,72,153)', // Hot pink
        'conference-orange': 'rgb(244,114,182)', // Pink-400
        'conference-purple': 'rgb(190,24,93)', // Pink-700
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      maxWidth: {
        'site': '1200px',
      },
    },
  },
  plugins: [],
};