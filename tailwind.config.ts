import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "fuas-primary": "#2D89CC",
        "fuas-secondary": "#B6D2E4",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        appear: {
          from: {
            opacity: "0",
            transform: "translateY(4rem)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0%)",
          },
        },
        slide: {
          from: {
            transform: "translateY(-100%)",
          },
          to: {
            transform: "translateY(0%)",
          },
        },
      },
      animation: {
        slide: "slide 750ms ease-in-out",
        appear: "appear 750ms ease-in-out",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-animate")],
};
export default config;
