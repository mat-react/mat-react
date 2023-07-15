/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "rgb(67 97 238/1)", 
        primary: {
          800: "rgb(91 33 182)", 
        },
        success: "#00ab5580",

        // text
        dark: "#071437",
      }
    },
  },
  plugins: [],
}

