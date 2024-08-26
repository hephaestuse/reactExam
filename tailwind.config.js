/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        ds1: "1440px",
      },
      colors: {
        "main-900": "#4156D9",
        "main-900-25%": "#4156d940",
        "grey-500-30%": "#d9d9d94d",
      },
      fontFamily: {
        sans: "Vazir",
      },
      boxShadow: {
        "main-light": "0 4px 50px rgba(191, 191, 191, 0.251)",
      },
    },
  },
  plugins: [],
};
