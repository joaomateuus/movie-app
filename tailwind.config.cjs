/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './src/components/**/*.{js, jsx, ts, tsx}',
  ],
  theme: {
    screens: {
      'sm': '320px',
      'md': '481px',
      'lg': '769px',
      'xl': '1200px',
      '2xl': '1400px'
    },
    extend: {},
  },
  plugins: [],
}
