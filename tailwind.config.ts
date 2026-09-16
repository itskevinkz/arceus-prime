import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#fdfdfb",
        ink: "#111111",
        arc: "#7ec8f5",
        blood: "#e31c23",
        navy: "#1e4b9c",
        slatey: "#888888",
      },
      fontFamily: {
        hand: ["var(--font-hand)", "cursive"],
        scribble: ["var(--font-scribble)", "cursive"],
      },
    },
  },
  plugins: [],
};

export default config;
