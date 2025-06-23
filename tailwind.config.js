/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['var(--font-raleway)', 'sans-serif'],
        'raleway-regular': ['var(--font-raleway-regular)', 'sans-serif'],
        playfair: ['var(--font-playfair)', 'serif'],
      },
      colors: {
        clay: '#DEAA79',
        cream: '#FFE6A9',
        sage: '#B1C29E',
        teal: '#659287',
      },
    },
  },
  plugins: [],
}
