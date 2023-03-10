/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./src/**/*.{js,jsx,ts,tsx}",

    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {},
    fontFamily: {
      Montserrat: ['"Montserrat"'],
    },
  },
  plugins: [],
};
