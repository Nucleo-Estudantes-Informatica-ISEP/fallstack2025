import twscrollbar from "tailwind-scrollbar";

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
  ],
  plugins: [twscrollbar({ nocompatible: true })],
};

export default config;
