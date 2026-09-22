import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#12141C",
          900: "#0F1420",
          800: "#171B2A",
          700: "#232838",
          600: "#343B52",
          500: "#4A5170"
        },
        paper: {
          DEFAULT: "#F6F5F1",
          dim: "#EDEBE4"
        },
        amber: {
          DEFAULT: "#F5A623",
          50: "#FFF6E6",
          100: "#FFE9BF",
          400: "#F7B84A",
          500: "#F5A623",
          600: "#D98A0E",
          700: "#B06E09"
        },
        teal: {
          DEFAULT: "#0E8C87",
          50: "#E7F6F5",
          100: "#C7EAE8",
          400: "#28A6A0",
          500: "#0E8C87",
          600: "#0B716D"
        },
        line: "#DEDBD1"
      },
      fontFamily: {
        display: ["var(--font-sora)", "system-ui", "sans-serif"],
        body: ["var(--font-plex)", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "ui-monospace", "monospace"]
      },
      maxWidth: {
        content: "1240px"
      },
      boxShadow: {
        card: "0 1px 0 rgba(18,20,28,0.04)",
        pop: "0 12px 32px -12px rgba(18,20,28,0.25)"
      },
      borderRadius: {
        sm: "6px",
        md: "10px",
        lg: "16px",
        xl: "22px"
      }
    }
  },
  plugins: []
};

export default config;
