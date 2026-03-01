import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  safelist: [
    "bg-orange",
    "bg-cherry",
    "bg-teal-600",
    "bg-lime-600",
    "bg-violet-600",
    "bg-rose-600",
    "bg-sky-600",
    "bg-cyan-600",
    "bg-emerald-600",
    "bg-fuchsia-600",
    "bg-amber-500"
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
      fontSize: {
        "page-title": ["2rem", { lineHeight: "1.2" }],
        "page-title-lg": ["2.5rem", { lineHeight: "1.2" }],
        "section-title": ["1.75rem", { lineHeight: "1.3" }],
        "section-title-lg": ["2.25rem", { lineHeight: "1.3" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7" }],
        "body-xl": ["1.25rem", { lineHeight: "1.7" }]
      },
      boxShadow: {
        soft: "0 18px 40px rgba(0, 0, 0, 0.06)",
        "soft-kid": "0 12px 32px rgba(219, 80, 102, 0.12)"
      },
      borderRadius: {
        "3xl": "1.75rem"
      }
    }
  },
  plugins: []
};

export default config;
