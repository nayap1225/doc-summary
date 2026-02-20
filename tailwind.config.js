/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'md': '767px',
        'dt': '1240px',
      },
      fontFamily: {
        sans: ['SUIT', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
