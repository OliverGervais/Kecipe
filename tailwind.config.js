module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'redd': '#ff0414',
        'oran': '#ff6437',
        'yell': '#ffd761',
        'pinkk': '#fe42ad',
        'ice': '#51f1e3',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
