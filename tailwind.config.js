/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        shadow: '#F5F5F5'
      },
      height: {
        '81': '35rem'
      },
      fontFamily: {
        caveat: ["'Caveat', cursive;"]
      }
    },
  },
  plugins: [],
}