import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Platinum Collection - Main neutral palette
        platinum: {
          50: "#FAFBFC",   // Lightest platinum
          100: "#F4F5F7",  // Light platinum
          200: "#E5E7EB",  // Soft platinum
          300: "#D1D5DB",  // Medium platinum
          400: "#9CA3AF",  // Dark platinum
          500: "#6B7280",  // Darker platinum
          600: "#4B5563",  // Deep platinum
          700: "#374151",  // Deeper platinum
          800: "#1F2937",  // Almost black platinum
          900: "#111827",  // Darkest platinum
        },
        // Royal Blue Collection - Trust and security
        royal: {
          50: "#EBF3FF",   // Lightest blue
          100: "#D6E7FF",  // Very light blue
          200: "#ADC9FF",  // Light blue
          300: "#84ABFF",  // Sky blue
          400: "#5B8DFF",  // Medium blue
          500: "#0052CC",  // Primary blue (Cobalt)
          600: "#003D82",  // Royal blue
          700: "#002855",  // Deep navy
          800: "#001A3D",  // Darker navy
          900: "#000D1F",  // Darkest navy
        },
        // Brown Collection - Warmth and luxury
        espresso: {
          50: "#FFF8F3",   // Cream
          100: "#F7E9DC",  // Light taupe
          200: "#E8D4C1",  // Warm beige
          300: "#D4B5A0",  // Taupe
          400: "#B89680",  // Medium brown
          500: "#8B6F47",  // Walnut
          600: "#6B5333",  // Dark walnut
          700: "#4A3826",  // Deep brown
          800: "#3E2723",  // Espresso
          900: "#2C1810",  // Darkest brown
        },
        // Accent Colors
        accent: {
          gold: "#D4AF37",      // Luxury gold
          success: "#059669",   // Forest green
          warning: "#D97706",   // Amber
          danger: "#DC2626",    // Professional red
        },
        // Backgrounds
        background: {
          primary: "#FAFBFC",    // Main background
          secondary: "#F4F5F7",  // Section backgrounds
          card: "#FFFFFF",       // Card backgrounds
          overlay: "rgba(0, 0, 0, 0.5)", // Modal overlays
        },
      },
      fontFamily: {
        display: ["Playfair Display", "Georgia", "serif"],
        heading: ["IBM Plex Sans", "system-ui", "sans-serif"],
        body: ["Inter", "-apple-system", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "Consolas", "monospace"],
      },
      fontSize: {
        "display-xl": ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-lg": ["3.75rem", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
        "display-md": ["3rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "display-sm": ["2.25rem", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
      },
      backgroundImage: {
        'gradient-platinum': 'linear-gradient(135deg, #F4F5F7 0%, #E5E7EB 100%)',
        'gradient-luxury': 'linear-gradient(135deg, #003D82 0%, #3E2723 100%)',
        'gradient-radial-light': 'radial-gradient(ellipse at top, #EBF3FF, #FAFBFC)',
        'texture-platinum': "url('/images/brushed-platinum.png')",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-in-out",
        "fade-in-up": "fadeInUp 0.8s ease-out",
        "slide-in": "slideIn 0.5s ease-out",
        "scale-in": "scaleIn 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      boxShadow: {
        'luxury': '0 10px 40px -10px rgba(0, 61, 130, 0.15)',
        'luxury-lg': '0 20px 60px -15px rgba(0, 61, 130, 0.2)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
      borderRadius: {
        'luxury': '0.75rem',
      },
    },
  },
  plugins: [],
};
export default config;