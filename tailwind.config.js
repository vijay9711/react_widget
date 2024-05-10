const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens:{
      'sm': '320px',
      'md': '768px',
      'lg': '1024px',
      'xl': '2560px'
    },
    extend: {
      backgroundColor: ['active']
    },
    colors: {
      main: '#131C35',
      mainDark: "#05445E",
      mainDarkOpacity:"05445E50",
      mainLight: '#455a64',
      mainLighter: '#2E8BC0',
      textColor: '#2A3249',
      white: '#FFFFFF',
      cardBackground:"#cfd8dc",
      cardBG:"#E9E9E9",
      overlay:"#ffffff80",
      loadingBg:"#ffffff50"
    },
    boxShadow:{
      default:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      mainColorShadow:"0px 10px 20px 0px rgba(120,144,156,0.75)",
      // mainColorShadow: "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"
    },
    fontSize:{
      'lg':'1.6rem',
      'md':'1.4rem',
      'sm':'1rem',
      'xl':"2rem",
      '2xl':"2.5rem",
      '4xl':'2.6rem',
      'title':'5rem'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
