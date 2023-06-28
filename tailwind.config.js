/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        footer_Color: 'rgb(32, 35, 41)', // Aquí defines tu color personalizado
      },
    },
  },
  plugins: [],
}