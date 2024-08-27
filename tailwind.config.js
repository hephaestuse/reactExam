/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        ds1: "1440px",
        ds2: "1512px",
        ds3: "1728px",
      },
      colors: {
        "main-900": "#4156D9",
        "main-900-25%": "#4156d940",
        "grey-500-30%": "#d9d9d94d",
        muted: "#888888",
      },
      fontFamily: {
        sans: "Vazir",
      },
      boxShadow: {
        "main-light": "0 4px 50px rgba(191, 191, 191, 0.251)",
      },
      backgroundImage: {
        footerBack: 'url("tools/footerBox.svg")',
      },
    },
  },
  plugins: [],
};
