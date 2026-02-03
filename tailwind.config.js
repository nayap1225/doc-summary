/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'md': '767px',
      'dt': '1240px',
    },
    extend: {
      fontFamily: {
        sans: ['SUIT', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

