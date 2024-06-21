/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ptsans: ['Roboto', '"PT Sans", sans-serif'],
      },
    },
  },
  plugins: [],
}

