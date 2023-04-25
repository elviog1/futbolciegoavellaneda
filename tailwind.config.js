/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width:{
        '100': '1440px'
      },
      height:{
        '100': '29rem'
      }
    },
  },
  plugins: [],
}

