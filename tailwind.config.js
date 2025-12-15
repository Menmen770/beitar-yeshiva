/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Yeshiva brand colors from logo
        primary: {
          gold: "#C9A961",
          "gold-dark": "#A68845",
          "gold-light": "#E5D4A0",
        },
        secondary: {
          blue: "#1E5D91",
          "blue-dark": "#0F3C5E",
          "blue-light": "#4A8DC5",
        },
        neutral: {
          black: "#1A1A1A",
          "gray-dark": "#2D2D2D",
          gray: "#666666",
          "gray-light": "#E5E5E5",
          white: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};
