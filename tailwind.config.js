/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary1: "#06141B",
        primary2: "#11212D",
        primary3: "#253745",
        secondary1: "#4A5C6A",
        secondary2: "#9BA8AB",
        secondary3: "#CCD0CF",
      },
    },
  },
  plugins: [],
});
