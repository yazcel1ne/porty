/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}","./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "gradient-custom":
          "linear-gradient(90deg, #2B1848 0%, #191919 52%, #141414 100%)",
          
      }),
      fontFamily: {
        raleway: ["Poppins", "sans-serif"],
      },
      colors: {
        purpbg: "#2E233B",
      },
      animation: {

        gradient: 'animatedgradient 6s ease infinite alternate',

      },
   
    },
  },
  plugins: [require("flowbite/plugin")],
};
