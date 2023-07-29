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
        "primary-50": "rgb(var(--color-primary-50)/ <alpha-value>)",
        "primary-100": "rgb(var(--color-primary-100)/ <alpha-value>)",
        "primary-200": "rgb(var(--color-primary-200)/ <alpha-value>)",
        "primary-300": "rgb(var(--color-primary-300)/ <alpha-value>)",
        "primary-400": "rgb(var(--color-primary-400)/ <alpha-value>)",
        primary: "rgb(var(--color-primary-500)/ <alpha-value>)",
        "primary-500": "rgb(var(--color-primary-500)/ <alpha-value>)",
        "primary-600": "rgb(var(--color-primary-600)/ <alpha-value>)",
        "primary-700": "rgb(var(--color-primary-700)/ <alpha-value>)",
        "primary-800": "rgb(var(--color-primary-800)/ <alpha-value>)",
        "primary-900": "rgb(var(--color-primary-900)/ <alpha-value>)",
        "primary-950": "rgb(var(--color-primary-950)/ <alpha-value>)",
         
        secondary: "rgb(67 97 238/1)",
        success: "#00ab5580",

        "muted-50": "rgb(var(--color-muted-50)/ <alpha-value>)",
        "muted-100": "rgb(var(--color-muted-100)/ <alpha-value>)",
        "muted-200": "rgb(var(--color-muted-200)/ <alpha-value>)",
        "muted-300": "rgb(var(--color-muted-300)/ <alpha-value>)",
        "muted-400": "rgb(var(--color-muted-400)/ <alpha-value>)",
        "muted-500": "rgb(var(--color-muted-500)/ <alpha-value>)",
        "muted-550": "rgb(var(--color-muted-550)/ <alpha-value>)",
        "muted-600": "rgb(var(--color-muted-600)/ <alpha-value>)",
        "muted-700": "rgb(var(--color-muted-700)/ <alpha-value>)",
        "muted-800": "rgb(var(--color-muted-800)/ <alpha-value>)",
        "muted-900": "rgb(var(--color-muted-900)/ <alpha-value>)",
        "muted-950": "rgb(var(--color-muted-950)/ <alpha-value>)",

        "info-100": "rgb(var(--color-info-100)/ <alpha-value>)",
        "info-400": "rgb(var(--color-info-400)/ <alpha-value>)",
        "info-500": "rgb(var(--color-info-500)/ <alpha-value>)",

        // white: {
        //   light: "#e0e6ed66", 
        // },

        // text
        dark: "#071437",
      },
      opacity: {
        '8': '.08',
        '16': '.16',
      }
    }, 
  },
  plugins: [],
}
