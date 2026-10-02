import React from 'react';
import { Sun, Moon, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`relative inline-flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold border transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0878FE] ${
        isDark
          ? 'bg-slate-900/90 text-slate-200 border-slate-700/80 hover:border-[#0878FE] hover:shadow-[0_0_15px_rgba(8,120,254,0.3)]'
          : 'bg-white text-slate-700 border-[#C9DFFF] hover:border-[#0878FE] hover:bg-[#F8FAFE] shadow-sm'
      } ${className}`}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'Light' : 'Cyber Dark'} Theme`}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {isDark ? (
          <Moon className="w-4 h-4 text-cyan-400 animate-pulse-subtle transition-transform duration-300 rotate-0" />
        ) : (
          <Sun className="w-4 h-4 text-amber-500 transition-transform duration-300 rotate-0" />
        )}
      </div>

      <span className="hidden sm:inline font-mono text-[11px] tracking-wider uppercase">
        {isDark ? 'Cyber Dark' : 'Light Mode'}
      </span>

      {/* Mini Active Indicator */}
      <span
        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
          isDark ? 'bg-cyan-400 shadow-[0_0_8px_#22d3ee]' : 'bg-[#0878FE]'
        }`}
      />
    </button>
  );
}
