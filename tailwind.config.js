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
            primary: "#5D93E1",
            secondary: "#FFD369",
            background: "#E9ECEF",
            foreground: "#333",
            border: "#D0D9D9",
            muted: "#B0BAC9",
          },
        },
        dark: {
          layout: {
            borderRadius: "6px",
            boxShadow: "0 4px 6px rgba(40, 42, 49, 0.2)",
          },
          colors: {
            primary: "#B088F9",
            secondary: "#4D80E4",
            background: "#282A31",
            foreground: "#E9ECEF",
            border: "#3C3F48",
            muted: "#737581",
          },
        },
      },
    }),
  ]
}