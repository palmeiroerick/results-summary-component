import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    colors: {
      "light-red": "#ff5757",
      // /* Primary Colors */
      // Lightred: "#ff5757",
      // Orangeyyellow: "#ffb01f",
      // Greenteal: "#00bd91",
      // Cobaltblue: "#1125d4",

      // /* Gradients Colors */
      // Lightslate-blue: "#7857ff",
      // Lightroyal-blue: "#2e2be8",
      // Violetblue: "#4e21ca",
      // Persianblue: "#2421ca00",

      // /* Neutral Colors */
      // White "#ffffff",
      // Paleblue: "#ebf1ff",
      // Lightlavender: "#c8c7ff",
      // Darkgrayblue: "#303b59",
    },
    extend: {},
  },
  plugins: [],
};

export default config;
