/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{html,js}',
    './src/**/*.{html,js}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        beige: '#DCC1AB',
      },
    },
    fontFamily: {
      inter: ['"Inter"', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
    },
  },
  plugins: [require('tw-elements/dist/plugin.cjs')],
};
