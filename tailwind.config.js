/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Avenir Next', 'sans-serif'],
      },
      fontSize: {
        'xs': '10px',
      },
    },
  },
  plugins: [],
}
