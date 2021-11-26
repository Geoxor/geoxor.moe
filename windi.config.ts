import { defineConfig } from "vite-plugin-windicss";
import typography from "windicss/plugin/typography";
import colors from "windicss/colors";

function cssVarRgbHelper(cssVariable: string) {
  return ({ opacityVariable, opacityValue }: { opacityVariable: string; opacityValue: number }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(--${cssVariable}), ${opacityValue})`;
    }
    if (opacityVariable !== undefined) {
      return `rgba(var(--${cssVariable}), var(${opacityVariable}, 1))`;
    }
    return `rgb(var(--${cssVariable}))`;
  };
}

export default defineConfig({
  darkMode: "class",
  plugins: [typography()],
  theme: {
    extend: {
      colors: {
        ...colors,
        accent: cssVarRgbHelper("accent-color"),
        theme: {
          100: cssVarRgbHelper("theme-100"),
          200: cssVarRgbHelper("theme-200"),
          300: cssVarRgbHelper("theme-300"),
          400: cssVarRgbHelper("theme-400"),
          500: cssVarRgbHelper("theme-500"),
          600: cssVarRgbHelper("theme-600"),
          700: cssVarRgbHelper("theme-700"),
          800: cssVarRgbHelper("theme-800"),
          900: cssVarRgbHelper("theme-900"),
        },
      },
    },
  },
});
