module.exports = {
  purge: ['./index.html', './src/**/*.{svelte,js,ts}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "orange-main": "#f08132",
        "orange-light": "#ef9d63"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
