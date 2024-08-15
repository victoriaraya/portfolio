/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        gruppo: ["Gruppo", "sans-serif"],
      },
      keyframes: {
        slideRight: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(10%)" },
        },
        slideLeft: {
          "0%": { transform: "translateX(10%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        "slide-left": "slideLeft 2s ease-in-out forwards",
        "slide-right-delay": "slideRight 2s ease-in-out forwards .25s",
      },
    },
  },
  plugins: [],
};
