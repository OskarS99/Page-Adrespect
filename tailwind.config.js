/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{html,js}',
    './src/**/*.{html,js}',
    './node_modules/flowbite/**/*.js',
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        beige: '#DCC1AB',
      },
      fontFamily: {
        body: [''],
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
