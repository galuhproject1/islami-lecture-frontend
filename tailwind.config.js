/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mulish: ['Mulish', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'primary': '#11142D',
      }
    },
  },
  plugins: [],
}