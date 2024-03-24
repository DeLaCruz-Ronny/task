/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'celular': { min: '390px', max: '844px' },
      // => @media (min-width: 640px) { ... }
    },
    extend: {}
  },
  plugins: [],
}

