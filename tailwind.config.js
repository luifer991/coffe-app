/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'light-black': '#1B1D1F',
      'black': '#111315',
      'gray':'#6F757C',
      'green':'#BEE3CC',
      'white':'#FEF7EE',
      'yellow':'#F6C768',
      'red':'#ED735D'
    },
    fontFamily: {
      sans: ['DM sans', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

