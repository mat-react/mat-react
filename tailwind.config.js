/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // primary: 'rgba(118, 53, 220, <alpha-value>)',
        primary: 'rgba(0, 167, 111, <alpha-value>)',
         
        secondary: "rgb(67 97 238/1)",
        success: "#00ab5580",

        white: {
          light: "#e0e6ed66",
        },

        // text
        dark: "#071437",
      }
    }, 
  },
  plugins: [],
}

