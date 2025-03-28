import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        cgreen: "#86A788",
      },
      fontFamily: {
        luckyguy: ["var(--font-luckiest-guy)"],
      },
    },
  },
  darkMode: "class",
  plugins: [require("tailwind-scrollbar")],
} satisfies Config;
