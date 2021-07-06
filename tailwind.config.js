module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        "3xl": "2000px",
      },
    },
  },
  variants: {
    extend: {
      animation: ['responsive', 'group-hover', 'hover'],
      backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    },
  },
  plugins: [require('tailwind-scrollbar-hide')], 
  
};



// require("tailwind-scrollbar-hide")
// variants: {
//   extend: {
//     animation: ['group-hover'],
//   },
// },