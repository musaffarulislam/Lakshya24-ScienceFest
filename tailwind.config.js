/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        default: ["Poppins", "sans-serif"],
        title: ['Signika Negative', "sans-serif"]
      },
      colors: {
        primary_dark : "#050a19",
        secondary_dark : "#032046",
        "neon-green": "#84cc17",
      }
    },
  },
  plugins: [],
}