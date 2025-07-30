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
        noto: ['var(--font-noto-sans)', 'sans-serif'],
      },
      colors: {
      snow:   '#f9f7f7',
      mist:   '#dbe2ef',
      azure:  '#3f72af',
      navy:   '#112d4e',
    },
    },
  },
  plugins: [],
}
