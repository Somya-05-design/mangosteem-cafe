import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          dark: "#22120C",
          darker: "#1A0C07",
          espresso: "#2B1710",
          amber: "#CB7324",
          amberDark: "#B4601A",
          amberLight: "#E89343",
          cream: "#FAF5EE",
          creamLight: "#FBF7F0",
          creamDark: "#F0E5D4",
          card: "#FFFDF9",
          border: "#EADDCB",
          textMuted: "#7A685D",
          textDark: "#26130C"
        }
      },
      fontFamily: {
        serif: ["'Playfair Display'", "Georgia", "serif"],
        sans: ["'Plus Jakarta Sans'", "system-ui", "-apple-system", "sans-serif"],
        handwriting: ["'Caveat'", "'Great Vibes'", "cursive"]
      },
      boxShadow: {
        'warm': '0 10px 30px -10px rgba(180, 96, 26, 0.15)',
        'warm-lg': '0 20px 40px -15px rgba(34, 18, 12, 0.12)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.04)',
      }
    },
  },
  plugins: [],
};
export default config;
