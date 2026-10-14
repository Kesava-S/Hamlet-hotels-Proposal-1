import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#14213D",
          light: "#1D2D50",
          dark: "#0C1425",
        },
        gold: {
          DEFAULT: "#C9A227",
          hover: "#B38E1E",
          light: "#F7F1DE",
        },
        cream: {
          DEFAULT: "#FAF8F3",
          card: "#FFFFFF",
          muted: "#F3EFE6",
        },
        charcoal: {
          DEFAULT: "#2B2B2B",
          muted: "#5A5A5A",
          light: "#767676",
        },
        forest: {
          DEFAULT: "#2E7D5B",
          light: "#EAF5EF",
          border: "#C2E2D1",
        },
        warm: {
          border: "#E7E2D6",
          divider: "#ECE8DD",
        },
      },
      fontFamily: {
        serif: ["'Playfair Display'", "'Cormorant Garamond'", "Georgia", "serif"],
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "Roboto", "sans-serif"],
      },
      borderRadius: {
        card: "12px",
      },
      boxShadow: {
        soft: "0 2px 12px -2px rgba(20, 33, 61, 0.05), 0 1px 3px 0 rgba(20, 33, 61, 0.03)",
        card: "0 4px 20px -2px rgba(20, 33, 61, 0.06), 0 2px 6px -1px rgba(20, 33, 61, 0.04)",
        elevated: "0 10px 30px -4px rgba(20, 33, 61, 0.08), 0 4px 10px -2px rgba(20, 33, 61, 0.04)",
      },
    },
  },
  plugins: [],
};

export default config;
