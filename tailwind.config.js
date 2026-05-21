/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#002D54',
          light: '#003e75',
          dark: '#001c36',
        },
        crimson: {
          DEFAULT: '#E31837',
          light: '#f52a4a',
          dark: '#c2122b',
        }
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}