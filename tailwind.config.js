/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Code:['Audiowide', "cursive"],
      },
      colors:{
        gray: "#a3aaae",
        bone: "#f9f6ef",
      },
      fontSize:{
        ultra:'100px',
      }
    },
  },
  plugins: [],
}
