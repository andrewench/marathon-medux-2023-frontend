/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-roboto)'],
        roboto: ['var(--font-roboto)'],
        rubik: ['var(--font-rubik)'],
      },
    },
  },
  plugins: [],
}
