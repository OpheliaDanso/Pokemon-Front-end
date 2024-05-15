/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        mono: ["Roboto Mono", "monospace"],
      },
      colors: {
        "light-yellow": "#fafa72",
        "custom-yellow": "#ffbd59",
      },
    },
  },
  plugins: [require("daisyui")],
};
