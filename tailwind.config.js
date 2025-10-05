/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        leaf: "#2c6e49",
        cream: "#fff9ed",
        nestWhite: "#ffffff"
      }
    }
  },
  plugins: []
}
