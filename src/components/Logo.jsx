import React from 'react';

export default function Logo({ dark = false, className = "", showSubtitle = true }) {
  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 select-none shrink-0 ${className}`}>
      {/* 3X AI Automation Vector Icon */}
      <div className="relative group/logo flex items-center justify-center shrink-0">
        <div className="absolute -inset-1 rounded-2xl bg-[#FE330A] opacity-20 blur-sm group-hover/logo:opacity-40 transition duration-300"></div>

        <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#FE330A] to-[#D62705] p-[1px] shadow-sm flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-white/10 opacity-70"></div>
          
          <svg className="w-6 h-6 sm:w-7 sm:h-7 relative z-10" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M12 11H20.5C23.5376 11 26 13.4624 26 16.5C26 18.8 24.5 20.8 22.4 21.6C25 22.4 26.5 24.5 26.5 27C26.5 30.3 23.8 33 20.5 33H12" 
              stroke="#FFFFFF" 
              strokeWidth="3.2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            <path 
              d="M14 21.6H21" 
              stroke="#FFFFFF" 
              strokeWidth="3" 
              strokeLinecap="round"
            />
            <path 
              d="M24 13L35 31" 
              stroke="#FFFFFF" 
              strokeWidth="3.2" 
              strokeLinecap="round"
            />
            <path 
              d="M35 13L24 31" 
              stroke="#FFFFFF" 
              strokeWidth="3.2" 
              strokeLinecap="round"
            />
            <circle cx="35" cy="13" r="2.2" fill="#FFE5DF" />
            <circle cx="24" cy="31" r="2.2" fill="#FFE5DF" />
            <circle cx="29.5" cy="22" r="1.6" fill="#FFFFFF" />
          </svg>
        </div>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col justify-center leading-tight">
        <div className="flex items-center gap-1.5 whitespace-nowrap">
          <span className={`text-base sm:text-lg font-black tracking-tight ${dark ? 'text-white' : 'text-[#191919]'}`}>
            3X <span className="text-[#FE330A]">AI</span>
          </span>
          <span className={`text-[11px] sm:text-xs font-extrabold tracking-wider uppercase ${dark ? 'text-slate-200' : 'text-[#191919]'}`}>
            AUTOMATION
          </span>
        </div>
        
        {showSubtitle && (
          <div className="hidden xl:flex items-center gap-1 text-[10px] font-medium text-slate-500 whitespace-nowrap">
            <span className="font-semibold text-[#FE330A]">Usama Younas</span>
            <span>· AI Engineer</span>
          </div>
        )}
      </div>
    </div>
  );
}

