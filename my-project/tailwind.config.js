/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'gradient-custom': 'linear-gradient(90deg, #2B1848 0%, #191919 52%, #141414 100%)',
      }),
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
      },
      colors: {
        purpbg: '#2E233B',
      },
    
    },
  },
  plugins: [],
}