/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bgColor: "#F9DFCF",
        pinkRed: "#EF404B",
      }
    }
  },
  plugins: []
};
