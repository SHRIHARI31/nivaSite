/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
       apexFont:['Lilita One','sans-serif'],
      },
      colors:{
        apexGold:'#E7AA14'
      }
    },
  },
  plugins: [],
}