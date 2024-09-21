/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'peaks': "url('./assets/stacked-peaks-haikei.svg')",
        'dark-wood': "url('./assets/dark-wood.jpg')",        
      }
    },
  },
  plugins: [],
}

