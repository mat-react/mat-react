import colors from 'tailwindcss/colors' 

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // primary: colors.purple,
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
        success: colors.teal,
        muted: colors.slate,
        info: colors.blue,
        danger: colors.rose,
        warning: colors.amber,
        "muted-550": "rgb(var(--color-muted-550)/ <alpha-value>)",

        // white: {
        //   light: "#e0e6ed66", 
        // },

        // text
        // dark: "#071437",
      },
      opacity: {
        '8': '.08',
        '16': '.16',
      }
    }, 
  },
  plugins: [
    function({ addBase, theme }) {
      function extractColorVars(colorObj, colorGroup = '') {
        return Object.keys(colorObj).reduce((vars, colorKey) => {
          const value = colorObj[colorKey];

          const newVars =
            typeof value === 'string'
              ? { [`--color${colorGroup}-${colorKey}`]: value }
              : extractColorVars(value, `-${colorKey}`);

          return { ...vars, ...newVars };
        }, {});
      }

      addBase({
        ':root': extractColorVars(theme('colors')),
      });
    },
  ],
}
