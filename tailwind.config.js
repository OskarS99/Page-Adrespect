/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}', './src/**/*.{html,js}'],
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
  plugins: [],
};
