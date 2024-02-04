/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'darkyellow': 'rgb(207, 216, 77)',
        'skycolor': 'rgb(165, 196, 220)',
        'ping': '#fdd8f7',
        'yellowed': '#cfd84d',
        'darkgreen': '#33433d',
        'normalgreen': '#006241',
      },
    },
  },
  variants: {},
  plugins: [],
}


