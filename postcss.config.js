// postcss.config.js
module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-nesting': {}, // Use 'postcss-nesting' instead of 'tailwindcss/nesting'
    tailwindcss: {},
    autoprefixer: {},
  },
}
