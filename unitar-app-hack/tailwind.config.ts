// tailwind.config.js

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
        deepPurple: "#673AB7",
        orange: "#FF9800",
        lightGray: "#F5F5F5",
        darkGray: "#333333",
        blue: "#2196F3",
      },
    },
  },
  plugins: [],
};

export default config;
