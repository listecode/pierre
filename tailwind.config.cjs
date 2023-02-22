/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {},
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
