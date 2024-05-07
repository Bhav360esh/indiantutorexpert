/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
    "./node_modules/flowbite/**/*.js",

  ],
  theme: {
    colors: {
      other : "#0B3657",
    },
    a: {
      
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}


// colors: {
//   colorText1: "#0c6cf8",
//   colorText2: "#0B3657",
// },