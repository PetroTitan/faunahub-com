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
          green: "#2A7A4B",
          "green-light": "#3A9960",
          "green-dark": "#1E5C38",
          blue: "#3B72A8",
          "blue-light": "#4F88C0",
        },
        surface: {
          DEFAULT: "#FAFAF8",
          card: "#FFFFFF",
          muted: "#F4F4F1",
        },
        ink: {
          DEFAULT: "#1C2B3A",
          secondary: "#3E4F60",
          muted: "#6B7684",
          subtle: "#9CA5AF",
        },
        border: {
          DEFAULT: "#E4E8ED",
          light: "#EEF1F4",
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
      typography: {
        DEFAULT: {
          css: {
            color: "#1C2B3A",
            a: {
              color: "#2A7A4B",
              "&:hover": { color: "#1E5C38" },
            },
          },
        },
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
