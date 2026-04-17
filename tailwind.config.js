module.exports = {
  content: [
    './resources/views/**/*.blade.php',
    './resources/js/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'ui-sans-serif', 'system-ui']
      },
      colors: {
        'wire-gray': '#F2F2F2'
      }
    }
  },
  plugins: []
}
