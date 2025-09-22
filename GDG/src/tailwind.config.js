/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
theme: {
  extend: {
    fontFamily: {
      product: ["Product Sans", "sans-serif"]
    }
  }
}
