/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        yekan: 'Yekan',
      }
    },
  },
  plugins: [
    require('tailwindcss-rtl'),
  ],
}
