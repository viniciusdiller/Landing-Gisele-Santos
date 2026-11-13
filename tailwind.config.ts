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
        brand: {
          dark: "#0B131F",
          deep: "#111C2B",
          emerald: "#0E7058",
          emeraldHover: "#09503E",
          emeraldLight: "#EBF6F2",
          surface: "#FAFAF8",
          card: "#FFFFFF",
          border: "#E2E8F0",
          muted: "#5B6A78",
          subtle: "#8A9BA8",
          accent: "#D97706",
        },
      },
      fontFamily: {
        display: ["var(--font-clash)", "sans-serif"],
        sans: ["var(--font-jakarta)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
