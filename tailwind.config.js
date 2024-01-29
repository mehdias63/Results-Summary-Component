/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      hanken: ["Hanken Grotesk"],
    },
    extend: {
      colors: {
        "dark-blue": "#303B59",
        "light-blue": "#CAC9FF",
        "light-gray": "#ECF2FF",
      },
    },
  },
  plugins: [],
};
