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
        // AI Automation Lab - Deep Navy / Almost-Black Base
        lab: {
          bg: '#030712',          // Deepest space navy-black
          base: '#070C18',        // Deep technical navy
          surface: '#0B1325',     // Elevated dark surface
          card: '#0D172E',        // Card background
          border: 'rgba(255, 255, 255, 0.08)',
          borderHover: 'rgba(6, 182, 212, 0.35)',
        },
        electric: {
          blue: '#0878FE',
          deep: '#0052CC',
        },
        cyan: {
          DEFAULT: '#06B6D4',
          glow: '#22D3EE',
          bright: '#00F0FF',
        },
        violet: {
          subtle: '#8B5CF6',
          dim: '#6366F1',
        },
        brand: {
          blue: '#0878FE',
          cyan: '#06B6D4',
          violet: '#8B5CF6',
          dark: '#030712',
          navy: '#070C18',
          surface: '#0B1325',
          border: 'rgba(255, 255, 255, 0.08)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Manrope', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -4px rgba(6, 182, 212, 0.35)',
        'glow-blue': '0 0 30px -4px rgba(8, 120, 254, 0.35)',
        'glow-violet': '0 0 30px -4px rgba(139, 92, 246, 0.25)',
        'lab-card': '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
        'lab-hover': '0 16px 40px -8px rgba(6, 182, 212, 0.22), 0 0 25px -2px rgba(8, 120, 254, 0.2), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse at 50% -20%, rgba(8, 120, 254, 0.2) 0%, rgba(6, 182, 212, 0.1) 40%, transparent 75%)',
        'lab-glow': 'radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.08) 0%, transparent 70%)',
        'grid-pattern': 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
        'cta-gradient': 'linear-gradient(135deg, rgba(8, 120, 254, 0.15) 0%, rgba(6, 182, 212, 0.1) 50%, rgba(139, 92, 246, 0.1) 100%)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
        'float-slow': 'float 7s ease-in-out infinite',
        'spin-slow': 'spin 25s linear infinite',
        'beam': 'beam 6s linear infinite',
        'scan': 'scan 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        beam: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        },
        scan: {
          '0%, 100%': { opacity: '0.2', transform: 'scale(0.98)' },
          '50%': { opacity: '0.8', transform: 'scale(1.02)' },
        },
      }
    },
  },
  plugins: [],
}
