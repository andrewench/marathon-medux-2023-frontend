/** @type {import('tailwindcss').Config} */

const { createThemes } = require('tw-colors')

module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-roboto)'],
        roboto: ['var(--font-roboto)'],
        rubik: ['var(--font-rubik)'],
      },
      colors: {
        'marathon-green': '#7ed321',
        'marathon-azure': '#0496ff',
        'marathon-purple': '#6665dd',
        'marathon-red': '#ed0423',
        'marathon-teal': '#34d1bf',
        'marathon-electro': '#29e7cd',
        'marathon-peach': '#ff715b',
        'marathon-yellow': '#fdca40',
        'marathon-malachite': '#04e762',
        'marathon-orange': '#f17105',
        'marathon-pink': '#de0d92',
        'marathon-blue': '#2662F0',
        'marathon-blue_2': '#deeeff',
      },
    },
  },
  plugins: [
    createThemes({
      light: {
        'marathon-background': '#f1f5f8',
        'marathon-light-background': '#fafbfd',
        'marathon-gray': '#e4eaf0',
        'marathon-white': '#fff',
      },
      dark: {
        'marathon-background': '#090a0a',
        'marathon-gray': '#131414',
        'marathon-dark': '#414d55',
        'marathon-black': '#171819',
      },
    }),
  ],
}
