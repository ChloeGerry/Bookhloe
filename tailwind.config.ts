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
        blue: "#8AC9FF",
        "light-lavender": "#D8D4FF",
        lavender: "#9388FF",
        "light-pink": "#FFDFE5",
        pink: "#FF93A7",
        "light-green": "#D4FFDC",
      },
      borderRadius: {
        large: "70px",
        medium: "40px",
        small: "30px",
        extraSmall: "10%",
      },
      margin: {
        "88": "88px",
      },
      height: {
        "100": "100px",
      },
    },
  },
  plugins: [],
};
export default config;
