import React from 'react';

export default function Logo({ dark = false, className = "", showSubtitle = true }) {
  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`}>
      {/* 3X AI Automation Geometric Vector Mark */}
      <div className="relative group/logo flex items-center justify-center shrink-0">
        {/* Subtle hover glow behind badge */}
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#0878FE] to-[#0255FD] opacity-25 blur-md group-hover/logo:opacity-50 transition duration-300"></div>

        <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#0878FE] to-[#0255FD] p-[1.5px] shadow-sm flex items-center justify-center overflow-hidden">
          {/* Subtle glossy glass highlight */}
          <div className="absolute inset-0 bg-white/10 opacity-70"></div>
          
          <svg className="w-8 h-8 sm:w-9 sm:h-9 relative z-10" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Stylized '3' */}
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

            {/* Stylized 'X' Automation Multiplier */}
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

            {/* Glowing nodes on the X branches */}
            <circle cx="35" cy="13" r="2.2" fill="#EAF3FF" className="animate-pulse" />
            <circle cx="24" cy="31" r="2.2" fill="#EAF3FF" />
            <circle cx="29.5" cy="22" r="1.6" fill="#FFFFFF" />
          </svg>
        </div>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-1.5 leading-none">
          <span className={`text-[19px] sm:text-[21px] font-black tracking-tight ${dark ? 'text-white' : 'text-[#111827]'}`}>
            3X <span className="text-[#0878FE]">AI</span>
          </span>
          <span className={`text-[13px] sm:text-[14px] font-extrabold tracking-wider ${dark ? 'text-slate-200' : 'text-[#111827]'}`}>
            AUTOMATION
          </span>
        </div>
        
        {showSubtitle && (
          <div className="flex items-center gap-1.5 mt-1">
            <span className="text-[11px] font-semibold tracking-wider uppercase text-[#0878FE]">
              Usama Younas
            </span>
            <span className={`text-[10px] ${dark ? 'text-slate-400' : 'text-slate-500'}`}>
              · AI Engineer
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
