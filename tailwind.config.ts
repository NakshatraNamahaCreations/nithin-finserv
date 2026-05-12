import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: "#071b2a", 2: "#0e2840" },
        teal: { DEFAULT: "#10b981", 2: "#0d9668" },
        gold: "#f0a500",
        cream: "#f7f9f6",
        gray: { DEFAULT: "#5f6b78" },
        light: "#e5f4ee",
        border: "#e2e8e4",
        red: { DEFAULT: "#e53e3e" },
        invest: "#0fa870",
        legal: "#6c63ff",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Playfair Display", "serif"],
        sans: ["var(--font-dm-sans)", "DM Sans", "sans-serif"],
      },
      animation: {
        "pulse-ring": "pulseRing 2s ease-out infinite",
        "calc-pulse": "calcPulse 1.8s ease-out infinite",
        "fade-up": "fadeUp 0.5s ease forwards",
      },
      keyframes: {
        pulseRing: {
          "0%": { transform: "scale(1)", opacity: "0.6" },
          "100%": { transform: "scale(1.35)", opacity: "0" },
        },
        calcPulse: {
          "0%": { transform: "scale(0.6)", opacity: "0.55" },
          "100%": { transform: "scale(2)", opacity: "0" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
