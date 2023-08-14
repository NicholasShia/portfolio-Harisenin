/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public//**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        Pacifico: ['Pacifico'],
        Raleway: ['Raleway'],
        Poppins: ['Poppins'],
      },
      colors: {
        cSecondary: '#F2F5F9',
        cRed: '#EC1B09',
        cYellow: '#FF9C1A',
        cDark: '#E7EAED',
      },
    },
  },
  plugins: [],
}

