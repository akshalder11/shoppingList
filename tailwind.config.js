/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      prodReg: ["ProductSansReg", "sans-serif"],
      prodBold: ["ProductSansBold", "sans-serif"],
      prodItalic: ["ProductSansItalic", "sans-serif"],
      prodBoldItalic: ["ProductSansItalicBold", "sans-serif"],
    }
  },
  plugins: [],
}