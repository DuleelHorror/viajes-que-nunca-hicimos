/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    // Escala tipográfica ampliada: cuerpo 17 px, secundario 15 px, mínimo 13 px.
    fontSize: {
      xs: ["0.8125rem", { lineHeight: "1.25rem" }],
      sm: ["0.9375rem", { lineHeight: "1.5rem" }],
      base: ["1.0625rem", { lineHeight: "1.7rem" }],
      lg: ["1.1875rem", { lineHeight: "1.8rem" }],
      xl: ["1.375rem", { lineHeight: "1.9rem" }],
      "2xl": ["1.625rem", { lineHeight: "2.1rem" }],
      "3xl": ["2rem", { lineHeight: "2.4rem" }],
      "4xl": ["2.5rem", { lineHeight: "2.9rem" }],
      "5xl": ["3.25rem", { lineHeight: "1.08" }],
      "6xl": ["3.75rem", { lineHeight: "1.05" }],
    },
    extend: {
      colors: {
        // Hormigón / fondo (de más oscuro a más claro)
        ink: {
          950: "#0a0a0b",
          900: "#0e0f10",
          850: "#141517",
          800: "#1a1c1e",
          750: "#212327",
          700: "#2a2d31",
          650: "#33373c",
          600: "#3d4247",
          500: "#4f545b",
        },
        // Cemento / texto neutro (aclarado para contraste alto sobre fondo negro)
        concrete: {
          500: "#8a9099",
          400: "#a3a9b1",
          300: "#bfc5cc",
          200: "#d6dae0",
          100: "#e9ecef",
          50: "#f6f7f8",
        },
        // Rojo dossier
        blood: {
          700: "#5f1414",
          600: "#7f1d1d",
          500: "#991b1b",
          400: "#b91c1c",
          300: "#dc2626",
        },
        amber: {
          700: "#92400e",
          600: "#b45309",
          500: "#d97706",
          400: "#f59e0b",
          300: "#fbbf24",
        },
        steel: {
          600: "#475569",
          500: "#64748b",
          400: "#94a3b8",
          300: "#cbd5e1",
        },
        // Neón vaporwave (acentos, series de gráficas, números hero)
        neon: {
          cyan: "#22d3ee",
          magenta: "#e879f9",
          lime: "#a3e635",
          violet: "#a78bfa",
          pink: "#f472b6",
        },
        // Semáforo
        signal: {
          green: "#22c55e",
          yellow: "#eab308",
          orange: "#f97316",
          red: "#ef4444",
        },
      },
      // Legibilidad primero: Inter para el cuerpo, Manrope para títulos, mono solo para cifras.
      fontFamily: {
        sans: ["Inter Variable", "Inter", "Segoe UI", "-apple-system", "BlinkMacSystemFont", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
        display: ["Manrope Variable", "Manrope", "Inter Variable", "Segoe UI", "sans-serif"],
        mono: [
          "JetBrains Mono Variable",
          "IBM Plex Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Consolas",
          "Menlo",
          "monospace",
        ],
      },
      borderRadius: {
        sharp: "2px",
      },
      boxShadow: {
        dossier:
          "0 1px 0 0 rgba(255,255,255,0.03) inset, 0 8px 24px -12px rgba(0,0,0,0.7)",
        panel: "0 12px 40px -16px rgba(0,0,0,0.85)",
        glow: "0 0 14px -2px var(--glow, rgba(34,211,238,0.55))",
        "glow-lg": "0 0 32px -4px var(--glow, rgba(34,211,238,0.5))",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(4px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.98)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.7" },
          "50%": { opacity: "1" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.18s ease-out",
        "scale-in": "scale-in 0.14s ease-out",
        "slide-in-right": "slide-in-right 0.2s ease-out",
        "pulse-glow": "pulse-glow 2.4s ease-in-out infinite",
        blink: "blink 1.1s step-end infinite",
      },
    },
  },
  plugins: [],
};
