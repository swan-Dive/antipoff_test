/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      'body' : ['Roboto']
    },
    color: {
      black: 'hsl(var(--color-black) / <alpha-value>)',
      violet: 'hsl(var(--color-violet) / <alpha-value>)',
      gray: 'hsl(var(--color-gray) / <alpha-value>)',
      grayLight: 'hsl(var(--color-gray-light) / <alpha-value>)',
      red: 'hsl(var(--color-red) / <alpha-value>)',
      white: 'hsl(var(--color-white) / <alpha-value>)',
    }
  },
  plugins: [],
}

