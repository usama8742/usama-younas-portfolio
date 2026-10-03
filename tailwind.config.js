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
        // Azzle AI Technology & Startup Signature Color Palette
        colorOrangyRed: '#FE330A',
        colorLinenRuffle: '#EFEAE3',
        colorCodGray: '#191919',
        colorGreen: '#39FF14',
        colorViolet: '#321CA4',
        linenBorder: '#DBD6CF',
        // Brand aliases
        brand: {
          orange: '#FE330A',
          red: '#FE330A',
          linen: '#EFEAE3',
          dark: '#191919',
          black: '#000000',
          blue: '#FE330A', // mapped to Azzle primary accent
          deep: '#D62705',
          navy: '#191919',
          soft: '#EFEAE3',
          light: '#F8F5F0',
          border: '#DBD6CF',
        }
      },
      fontFamily: {
        sans: ['Inter', 'DM Sans', 'Manrope', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        dmSans: ['DM Sans', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px -3px rgba(254, 51, 10, 0.25)',
        'glow': '0 0 25px -4px rgba(254, 51, 10, 0.35)',
        'glow-lg': '0 0 40px -6px rgba(254, 51, 10, 0.55)',
        'card': '0 4px 20px -2px rgba(25, 25, 25, 0.04), 0 2px 6px -1px rgba(254, 51, 10, 0.04)',
        'card-hover': '0 12px 30px -4px rgba(254, 51, 10, 0.16), 0 4px 12px -2px rgba(25, 25, 25, 0.06)',
        'dark-card': '0 4px 24px -2px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.06)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #FE330A 0%, #D62705 100%)',
        'soft-glow': 'radial-gradient(circle at 50% 50%, rgba(254, 51, 10, 0.08) 0%, transparent 70%)',
        'dark-mesh': 'radial-gradient(at 0% 0%, rgba(254, 51, 10, 0.15) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(214, 39, 5, 0.12) 0px, transparent 50%)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
        'float-slow': 'float 7s ease-in-out infinite',
        'float-reverse': 'floatRev 5s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
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
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(0.97)' },
          '50%': { opacity: '0.9', transform: 'scale(1.03)' },
        },
      }
    },
  },
  plugins: [],
}
