/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "light-1": "#ffffff",
      "light-2": "#f0f6fc",
      "light-3": "#c9d1d9",
      "light-4": "#8b949e",
      "light-5": "#333",
      "light-6": "#161b22",
      "blue-1": "#0d1117",
      "blue-2": "#21262d",
      "blue-3": "#58a6ff",
      "grad-1": "#2c33a5",
      "grad-2": "#b1d353",
      "grad-3": "#fb7d5b",
    },
    fontFamily: {
      Bakbak: ["Bakbak One", "cursive"],
    },

    extend: {
      animation: {
        spin: "spin 5s ease-in-out infinite",
      },
      keyframes: {
        spin: {
          "0%": {
            transform: "translateY(-100px)",
          },
          "50%": {
            transform: "translateY(10px)",
          },
          "100%": {
            transform: "translateY(-100px)",
          },
        },
      },
    },
  },
  plugins: [],
};
