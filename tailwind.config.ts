import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "alex-brush": ['"Alex Brush"', "cursive"],
        yaldevi: ['"Yaldevi"', "sans-serif"],
      },
      colors: {
        "light-blue": "#D6ECFF",
        "light-lavender": "#D8D4FF",
      },
      borderRadius: {
        large: "70px",
        small: "40px",
      },
      margin: {
        "88px": "88px",
      },
    },
  },
  plugins: [],
};
export default config;
