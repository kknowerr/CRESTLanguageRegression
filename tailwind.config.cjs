/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#F9F9F9",
        secondary: "#CCA43B",
        dimGrey: "#363636",
        dimBlue: "#242f40",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        visuletpro : ["VisuletPro", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};


