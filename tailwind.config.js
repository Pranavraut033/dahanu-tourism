/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "8px",
      },
    },
    extend: {
      fontFamily: {
        "dancing-script": ['Dancing Script"', "cursive"],
        montserrat: ['"Montserrat"', "sans-serif"],
        pacifico: ['"Pacifico"', "cursive"],
        sanchez: ['"Sanchez"', "serif"],
        lexend: ['"Lexend"', "sans-serif"],
      },
      colors: {},
    },
  },
  plugins: [],
};
