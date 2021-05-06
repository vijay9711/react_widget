const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: ['active']
    },
    colors: {
      main: '#131C35',
      mainDark: "#05445E",
      mainLight: '#455a64',
      mainLighter: '#2E8BC0',
      textColor: '#333',
      white: '#FFFFFF',
      cardBackground:"#cfd8dc",
      cardBG:"#E9E9E9"
    },
    boxShadow:{
      default:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      mainColorShadow:"0px 0px 25px 10px rgba(120,144,156,0.75)"
    },
    fontSize:{
      'lg':'1.6rem',
      'md':'1.4rem',
      'sm':'1rem',
      'xl':"1.8rem",
      '2xl':"2rem",
      '4xl':'2.4rem'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
