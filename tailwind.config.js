/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep Slate Carbon
        carbon: {
          DEFAULT: "#121824",
          900: "#0d1420",
          800: "#121824",
          700: "#1A2232",
        },
        // Dark Steel
        steel: {
          DEFAULT: "#1E293B",
          900: "#0F172A",
          800: "#1E293B",
          700: "#253350",
          600: "#2D3F5A",
        },
        // Electric Amber / Industrial Orange
        amber: {
          DEFAULT: "#F59E0B",
          glow: "#FF6B00",
          dark: "#D97706",
          muted: "#92600A",
        },
        // Platinum / Ash Text
        platinum: {
          DEFAULT: "#F8FAFC",
          muted: "#94A3B8",
          dim: "#64748B",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "Consolas", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-industrial":
          "linear-gradient(135deg, #121824 0%, #1E293B 50%, #121824 100%)",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
        "pulse-amber": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "bearing-rotate": "bearingRotate var(--duration, 4s) linear infinite",
      },
      keyframes: {
        bearingRotate: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      transitionTimingFunction: {
        "industrial": "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      },
      boxShadow: {
        amber: "0 0 20px rgba(245, 158, 11, 0.3), 0 0 60px rgba(245, 158, 11, 0.1)",
        "amber-sm": "0 0 10px rgba(245, 158, 11, 0.2)",
        industrial: "0 4px 32px rgba(0,0,0,0.5)",
        "industrial-lg": "0 8px 64px rgba(0,0,0,0.7)",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        88: "22rem",
        100: "25rem",
        112: "28rem",
        128: "32rem",
      },
      letterSpacing: {
        widest: "0.25em",
        ultra: "0.35em",
      },
    },
  },
  plugins: [],
};
