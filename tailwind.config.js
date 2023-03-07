/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", 
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
   
      black: "#1919A19",
      yellow: "#FTF734",
      green: "#68F890",
      grey: "#F3F3F3",
      "grey-light": "#FAFAFA",
      "green-light": "#d2eff1",
      white: "#fff"
    },

  fontFamily: {
      sans :["Georgia, snas-serif"],
      serif: ["Merriweather, serif"],
      display : ["Oswald"],
    },

  extend: {
    screens : {sm: "640px", md: "768px", lg: "1024px", xl: "1280px" } 
  },

  plugins: [],
}
  
