import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "selector", // Enable dark mode by adding 'class'
  theme: {
    extend: {
      colors: {
        light: {
          primary: "#ffffff",
          secondary: "#f8f9fa",
          accent: "#007bff",
          text: "#212529",
        },
        dark: {
          primary: "#212529",
          secondary: "#343a40",
          accent: "#0d6efd",
          text: "#f8f9fa",
        },
      },
    },
  },
  plugins: [],
};
export default config;
