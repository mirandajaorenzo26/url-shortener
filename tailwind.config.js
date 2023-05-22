/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        cyan: "#2acfcf",
        "dark-violet": "#3b3054",
        red: "#f46262",
        gray: "#bfbfbf",
        "grayish-violet": "#9e9aa7",
        "very-dark-blue": "#35323e",
        "very-dark-violet": "#232127",
      },
    },
  },
  plugins: [],
};
