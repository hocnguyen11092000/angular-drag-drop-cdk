/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      minWidth: {
        50: "50%",
        60: "60%",
        70: "70%",
        80: "80%",
        90: "90%",
      },
    },
  },
  plugins: [],
};
