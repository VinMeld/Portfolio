/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      prefix: "nextui",
      addCommonColors: false,
      defaultTheme: "light",
      defaultExtendTheme: "light",
      layout: {},
      themes: {
        light: {
          layout: {
              borderRadius: "6px",
              boxShadow: "0 4px 6px rgba(100, 120, 140, 0.1)",
          },
          colors: {
              primary: "#F92672", // Vibrant pink
              secondary: "#A6E22E", // Vibrant green
              background: "#FAFAFA", // A light background
              foreground: "#333", // Retaining your original foreground
              border: "#D0D9D9", // Retaining your original border
              muted: "#B0BAC9", // A muted color
          },
      },
      dark: {
          layout: {
              borderRadius: "6px",
              boxShadow: "0 4px 6px rgba(40, 42, 49, 0.2)",
          },
          colors: {
              primary: "#F92672", // Vibrant pink
              secondary: "#A6E22E", // Vibrant green
              background: "#272822", // Monokai's classic dark grey background
              foreground: "#F8F8F2", // Monokai's classic light foreground
              border: "#49483E", // Darker grey, nearly brown
              muted: "#75715E", // Muted color resembling Monokai
          },
      }
      
      },
    }),
  ]
}