import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        cherry: "#db5066",
        orange: "#ff8429"
      },
      fontFamily: {
        heading: ["\"Lilita One\"", "cursive"],
        body: ["Montserrat", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 40px rgba(0, 0, 0, 0.06)"
      },
      borderRadius: {
        "3xl": "1.75rem"
      }
    }
  },
  plugins: []
};

export default config;
