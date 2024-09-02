/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Avenir Next", "sans-serif"],
      },
      fontSize: {
        xs: "10px",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(0deg, rgba(252,252,252,1) 0%, rgba(248,249,250,1) 0%, rgba(49,128,244,1) 100%)",
      },
    },
  },
  plugins: [],
};
