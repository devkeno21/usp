import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          '50': "#f0f2fa",
          '100': "#dde0ee",
          '200': "#b8bddd",
          '300': "#9099cd",
          '400': "#6f7bc1",
          '500': "#5a67b9",
          '600': "#505eb7",
          '700': "#404ea0",
          '800': "#384491",
          '900': "#1B234C",
        },
        secondary: {
          '50': "#fceeee",
          '100': "#f1dada",
          '200': "#e6afb0",
          '300': "#de8283",
          '400': "#d65d5d",
          '500': "#d14745",
          '600': "#d03a39",
          '700': "#b82e2c",
          '800': "#a52726",
          '900': "#9A1F21",
        }
      }
    },
  },
  plugins: [],
};
export default config;
