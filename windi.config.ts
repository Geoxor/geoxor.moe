import { defineConfig } from "vite-plugin-windicss";
import typography from "windicss/plugin/typography";
import colors from "windicss/colors";

export default defineConfig({
  darkMode: "class",
  plugins: [typography()],
  theme: {
    extend: {
      ...colors,
      colors: {
        accent: "var(--accent-color)",
        theme: {
          100: "var(--theme-100)",
          200: "var(--theme-200)",
          300: "var(--theme-300)",
          400: "var(--theme-400)",
          500: "var(--theme-500)",
          600: "var(--theme-600)",
          700: "var(--theme-700)",
          800: "var(--theme-800)",
          900: "var(--theme-900)",
        },
      },
    },
  },
});
