import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      lg: "1440px",
    },
    colors: {
      /* Primary Colors */
      "light-red": "#ff5757",
      "orange-yellow": "#ffb01f",
      "green-teal": "#00bd91",
      "cobalt-blue": "#1125d4",

      /* Gradients Colors */
      "light-slate-blue": "#7857ff",
      "light-royal-blue": "#2e2be8",
      "violet-blue": "#4e21ca",
      "persian-blue": "#2421ca00",

      /* Neutral Colors */
      white: "#ffffff",
      "pale-blue": "#ebf1ff",
      "light-lavender": "#c8c7ff",
      "dark-gray-blue": "#303b59",
    },
    extend: {},
  },
  plugins: [],
};

export default config;
