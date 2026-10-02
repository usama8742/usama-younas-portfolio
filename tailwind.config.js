/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0878FE',
          deep: '#0255FD',
          navy: '#111827',
          soft: '#F8FAFE',
          light: '#EAF3FF',
          border: '#C9DFFF',
          dark: '#0A0F1D',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px -3px rgba(8, 120, 254, 0.25)',
        'glow': '0 0 25px -4px rgba(8, 120, 254, 0.35)',
        'glow-lg': '0 0 40px -6px rgba(8, 120, 254, 0.55)',
        'glow-cyan': '0 0 30px -4px rgba(6, 182, 212, 0.45)',
        'card': '0 4px 20px -2px rgba(17, 24, 39, 0.04), 0 2px 6px -1px rgba(8, 120, 254, 0.04)',
        'card-hover': '0 12px 30px -4px rgba(8, 120, 254, 0.16), 0 4px 12px -2px rgba(17, 24, 39, 0.06)',
        'dark-card': '0 4px 24px -2px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.06)',
        'dark-glow': '0 0 35px -5px rgba(8, 120, 254, 0.3), 0 0 0 1px rgba(8, 120, 254, 0.3)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #0878FE 0%, #0255FD 100%)',
        'soft-glow': 'radial-gradient(circle at 50% 50%, rgba(8, 120, 254, 0.08) 0%, transparent 70%)',
        'dark-mesh': 'radial-gradient(at 0% 0%, rgba(8, 120, 254, 0.15) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(2, 85, 253, 0.12) 0px, transparent 50%)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
        'float-slow': 'float 7s ease-in-out infinite',
        'float-reverse': 'floatRev 5s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
        'beam': 'beam 6s linear infinite',
        'aurora': 'aurora 14s ease infinite',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        floatRev: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        beam: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
        aurora: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(0.97)' },
          '50%': { opacity: '0.9', transform: 'scale(1.03)' },
        },
      }
    },
  },
  plugins: [],
}
