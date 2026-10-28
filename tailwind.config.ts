import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: { DEFAULT: "#1f4a30", dark: "#183b26", light: "#2a5d3d" },
        cream: { DEFAULT: "#fbf8f0", deep: "#f4efe0", tan: "#efe9d6" },
        ink: { DEFAULT: "#1f2a22", soft: "#4d5a50", mute: "#6b766d" },
        saffron: "#e8782a",
        gold: "#e2b53a",
        pill: "#e3e9dc",
      },
      fontFamily: {
        serif: ['"Lora Variable"', "Georgia", "serif"],
        sans: ['"Inter Variable"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 6px 24px rgba(40, 55, 35, 0.10)",
        soft: "0 2px 12px rgba(40, 55, 35, 0.08)",
      },
    },
  },
  plugins: [],
};
export default config;
