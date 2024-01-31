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
        'light-slate-blue': '#75f',
        'light-royal-blue': '#2f2ce9',
        'light-slate-purple': '#4d21c9',
        'light-royal-purple': '#503ef2',
      },
    },
  },
  plugins: [],
};
