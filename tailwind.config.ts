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
          "green-dark": "#063F2A",
          green: "#0F5A3A",
          leaf: "#7BAA35",
          blue: "#075FA8",
        },
        surface: {
          DEFAULT: "#F7F8F3",
          card: "#FFFFFF",
          muted: "#EFF1EB",
        },
        ink: {
          DEFAULT: "#17211B",
          secondary: "#2C3A2F",
          muted: "#5E6B63",
          subtle: "#8A958E",
        },
        border: {
          DEFAULT: "#DDE6DD",
          light: "#EAF0EA",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],
        mono: [
          '"SF Mono"',
          "Menlo",
          "Monaco",
          '"Cascadia Code"',
          '"Courier New"',
          "monospace",
        ],
      },
      maxWidth: {
        content: "72rem",
        prose: "68ch",
      },
    },
  },
  plugins: [],
};

export default config;
