import React from 'react';

export default function Logo({ dark = true, className = "", showSubtitle = true }) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* 3X AI Automation Lab Geometric Vector Mark */}
      <div className="relative group/logo flex items-center justify-center shrink-0">
        {/* Subtle cyan/blue hover glow behind badge */}
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 opacity-30 blur-md group-hover/logo:opacity-75 transition duration-500"></div>

        <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-700 p-[1.5px] shadow-glow-cyan flex items-center justify-center overflow-hidden">
          {/* Inner dark glass */}
          <div className="absolute inset-0 bg-[#070C18]/90 backdrop-blur-sm"></div>
          
          <svg className="w-7 h-7 sm:w-8 sm:h-8 relative z-10" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Stylized '3' */}
            <path 
              d="M12 11H20.5C23.5376 11 26 13.4624 26 16.5C26 18.8 24.5 20.8 22.4 21.6C25 22.4 26.5 24.5 26.5 27C26.5 30.3 23.8 33 20.5 33H12" 
              stroke="#22D3EE" 
              strokeWidth="3.2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            <path 
              d="M14 21.6H21" 
              stroke="#22D3EE" 
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
            <circle cx="35" cy="13" r="2.2" fill="#00F0FF" className="animate-pulse" />
            <circle cx="24" cy="31" r="2.2" fill="#0878FE" />
            <circle cx="29.5" cy="22" r="1.6" fill="#FFFFFF" />
          </svg>
        </div>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-1.5 leading-none">
          <span className="text-[19px] sm:text-[21px] font-black tracking-tight text-white">
            3X <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300 bg-clip-text text-transparent">AI</span>
          </span>
          <span className="text-[13px] sm:text-[14px] font-extrabold tracking-wider text-slate-300">
            AUTOMATION
          </span>
        </div>
        
        {showSubtitle && (
          <div className="flex items-center gap-1.5 mt-1">
            <span className="text-[11px] font-mono font-semibold tracking-wider uppercase text-cyan-400">
              Usama Younas
            </span>
            <span className="text-[10px] text-slate-400">
              · AI Engineer
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
