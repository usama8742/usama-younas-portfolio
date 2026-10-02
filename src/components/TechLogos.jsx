import React from 'react';

// Official & precision styled SVG brand icons for the technology stack

export function PythonLogo({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.7 3C15.2 3 15.6 6.7 15.6 6.7L15.6 10.6H24V11.8H12.7C6.7 11.8 3 15.4 3 23.8C3 32.2 8.3 32.2 8.3 32.2H12.3V26.6C12.3 20.3 17.8 20.4 17.8 20.4H26.3C32.1 20.4 32.7 15.2 32.7 15.2V6.7C32.7 6.7 32.2 3 23.7 3ZM19.2 6.5C20.4 6.5 21.4 7.5 21.4 8.7C21.4 9.9 20.4 10.9 19.2 10.9C18 10.9 17 9.9 17 8.7C17 7.5 18 6.5 19.2 6.5Z" fill="#0878FE"/>
      <path d="M24.3 45C32.8 45 32.4 41.3 32.4 41.3L32.4 37.4H24V36.2H35.3C41.3 36.2 45 32.6 45 24.2C45 15.8 39.7 15.8 39.7 15.8H35.7V21.4C35.7 27.7 30.2 27.6 30.2 27.6H21.7C15.9 27.6 15.3 32.8 15.3 32.8V41.3C15.3 41.3 15.8 45 24.3 45ZM28.8 41.5C27.6 41.5 26.6 40.5 26.6 39.3C26.6 38.1 27.6 37.1 28.8 37.1C30 37.1 31 38.1 31 39.3C31 40.5 30 41.5 28.8 41.5Z" fill="#0255FD"/>
    </svg>
  );
}

export function N8nLogo({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="12" fill="#FF6D5A" fillOpacity="0.1"/>
      <path d="M12 24C12 20.7 14.7 18 18 18C20.3 18 22.3 19.3 23.3 21.2C24.3 19.3 26.3 18 28.6 18C31.9 18 34.6 20.7 34.6 24C34.6 27.3 31.9 30 28.6 30C26.3 30 24.3 28.7 23.3 26.8C22.3 28.7 20.3 30 18 30C14.7 30 12 27.3 12 24Z" stroke="#FF6D5A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="18" cy="24" r="3" fill="#FF6D5A"/>
      <circle cx="30" cy="24" r="3" fill="#FF6D5A"/>
      <path d="M34 24L38 24" stroke="#FF6D5A" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  );
}

export function ReactLogo({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="24" cy="24" rx="20" ry="7.5" transform="rotate(0 24 24)" stroke="#0878FE" strokeWidth="2.2" strokeOpacity="0.85"/>
      <ellipse cx="24" cy="24" rx="20" ry="7.5" transform="rotate(60 24 24)" stroke="#0878FE" strokeWidth="2.2" strokeOpacity="0.85"/>
      <ellipse cx="24" cy="24" rx="20" ry="7.5" transform="rotate(120 24 24)" stroke="#0878FE" strokeWidth="2.2" strokeOpacity="0.85"/>
      <circle cx="24" cy="24" r="3.5" fill="#0878FE"/>
    </svg>
  );
}

export function SupabaseLogo({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="12" fill="#3ECF8E" fillOpacity="0.1"/>
      <path d="M26.5 4L9 26.5C8 27.8 8.9 29.8 10.6 29.8H23L21.5 44L39 21.5C40 20.2 39.1 18.2 37.4 18.2H25L26.5 4Z" fill="#3ECF8E"/>
    </svg>
  );
}

export function PostgreSQLLogo({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="12" fill="#336791" fillOpacity="0.1"/>
      <path d="M24 10C16.3 10 10 16.3 10 24C10 30.6 14.6 36.2 20.8 37.6V29.5H17.8V26.2H20.8V23.7C20.8 20.7 22.6 19.1 25.3 19.1C26.6 19.1 28 19.3 28 19.3V22.3H26.5C25 22.3 24.5 23.2 24.5 24.2V26.2H27.9L27.4 29.5H24.5V37.9C31.1 37.2 36.2 31.6 36.2 24.8C36.2 16.6 30.7 10 24 10Z" fill="#336791"/>
    </svg>
  );
}

export function FastAPILogo({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="12" fill="#009688" fillOpacity="0.1"/>
      <circle cx="24" cy="24" r="15" stroke="#009688" strokeWidth="2.5"/>
      <path d="M25 15L17 26H24L22 33L31 22H24L25 15Z" fill="#009688"/>
    </svg>
  );
}

export function NodeLogo({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="12" fill="#5FA04E" fillOpacity="0.1"/>
      <path d="M24 8L37 15.5V30.5L24 38L11 30.5V15.5L24 8Z" stroke="#5FA04E" strokeWidth="2.5" strokeLinejoin="round"/>
      <path d="M24 17V38M24 17L11 24.5M24 17L37 24.5" stroke="#5FA04E" strokeWidth="2" strokeOpacity="0.6"/>
    </svg>
  );
}

export function OllamaLogo({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="12" fill="#111827" fillOpacity="0.08"/>
      <circle cx="19" cy="20" r="3.5" fill="#111827"/>
      <circle cx="29" cy="20" r="3.5" fill="#111827"/>
      <path d="M16 28C18 31 30 31 32 28" stroke="#111827" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M14 15L17 12M34 15L31 12" stroke="#111827" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  );
}

export function AgentBrainLogo({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="12" fill="#0878FE" fillOpacity="0.1"/>
      <path d="M24 10C16.8 10 11 15.8 11 23C11 27.5 13.3 31.5 17 33.9V37C17 37.6 17.4 38 18 38H30C30.6 38 31 37.6 31 37V33.9C34.7 31.5 37 27.5 37 23C37 15.8 31.2 10 24 10Z" stroke="#0878FE" strokeWidth="2.5" strokeLinejoin="round"/>
      <path d="M20 42H28" stroke="#0878FE" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="19" cy="22" r="2.5" fill="#0878FE"/>
      <circle cx="29" cy="22" r="2.5" fill="#0878FE"/>
      <path d="M24 18V26M19 22H29" stroke="#0878FE" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}

export function WebhooksLogo({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="12" fill="#0878FE" fillOpacity="0.1"/>
      <circle cx="16" cy="16" r="4.5" stroke="#0878FE" strokeWidth="2.5"/>
      <circle cx="32" cy="16" r="4.5" stroke="#0878FE" strokeWidth="2.5"/>
      <circle cx="24" cy="32" r="5" fill="#0878FE"/>
      <path d="M19 19L22 28M29 19L26 28" stroke="#0878FE" strokeWidth="2.2" strokeLinecap="round"/>
    </svg>
  );
}

export function CRMLogo({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="12" fill="#FF7A59" fillOpacity="0.1"/>
      <circle cx="16" cy="18" r="4" stroke="#FF7A59" strokeWidth="2.5"/>
      <circle cx="32" cy="18" r="4" stroke="#FF7A59" strokeWidth="2.5"/>
      <circle cx="24" cy="26" r="5" stroke="#FF7A59" strokeWidth="2.5"/>
      <path d="M12 36C12 33 15 30 18 30M36 36C36 33 33 30 30 30M18 36C18 33 21 31 24 31C27 31 30 33 30 36" stroke="#FF7A59" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  );
}

export function GitLogo({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="12" fill="#F05032" fillOpacity="0.1"/>
      <path d="M40 21.6L26.4 8C25.6 7.2 24.3 7.2 23.5 8L20 11.5L24.5 16C25.3 15.7 26.2 15.9 26.8 16.5C27.6 17.3 27.7 18.5 27.2 19.4L32.1 24.3C33 23.8 34.2 23.9 35 24.7C36 25.7 36 27.3 35 28.3C34 29.3 32.4 29.3 31.4 28.3C30.6 27.5 30.5 26.3 31 25.4L26.3 20.7V30.5C26.7 30.9 27 31.4 27 32C27 33.7 25.7 35 24 35C22.3 35 21 33.7 21 32C21 30.7 21.8 29.6 23 29.2V19.3L18.7 15L8 25.7C7.2 26.5 7.2 27.8 8 28.6L21.6 42.2C22.4 43 23.7 43 24.5 42.2L40 26.7C40.8 25.9 40.8 24.6 40 23.8V21.6Z" fill="#F05032"/>
    </svg>
  );
}

export function AuthLogo({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="12" fill="#0878FE" fillOpacity="0.1"/>
      <path d="M24 8L36 13V23C36 31 31 38 24 40C17 38 12 31 12 23V13L24 8Z" stroke="#0878FE" strokeWidth="2.5" strokeLinejoin="round"/>
      <path d="M24 19V26M24 29V31" stroke="#0878FE" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  );
}

export function ApiLogo({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="12" fill="#0878FE" fillOpacity="0.1"/>
      <path d="M12 24H36M36 24L30 18M36 24L30 30" stroke="#0878FE" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="14" cy="24" r="3.5" fill="#0878FE"/>
      <path d="M20 14L28 14M20 34L28 34" stroke="#0878FE" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  );
}

export function JavaScriptLogo({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="10" fill="#F7DF1E"/>
      <path d="M20 36C20 37.5 19 38 17.5 38C15.8 38 14.8 37.1 14.2 35.8L16.4 34.5C16.8 35.2 17.2 35.8 17.8 35.8C18.4 35.8 18.7 35.5 18.7 34.7V25H21.2V36H20ZM30.5 38.2C27.8 38.2 26 36.6 25.2 35.1L27.4 33.8C28 34.9 29.1 35.9 30.5 35.9C31.7 35.9 32.5 35.3 32.5 34.4C32.5 33.3 31.8 32.9 30.2 32.2L29.3 31.8C27.4 31 25.8 29.9 25.8 27.8C25.8 25.8 27.4 24.3 29.9 24.3C31.8 24.3 33.2 25.1 34.1 26.6L32 27.9C31.5 27 30.8 26.5 29.9 26.5C29 26.5 28.3 27 28.3 27.7C28.3 28.6 28.9 29 30.4 29.6L31.3 30C33.6 30.9 35.1 32.1 35.1 34.3C35.1 36.6 33.2 38.2 30.5 38.2Z" fill="#111827"/>
    </svg>
  );
}

export function HtmlCssLogo({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="12" fill="#E34F26" fillOpacity="0.1"/>
      <path d="M12 10L14.2 35L24 38L33.8 35L36 10H12Z" stroke="#E34F26" strokeWidth="2.5" strokeLinejoin="round"/>
      <path d="M24 16V33.5L30.5 31.5L31.8 16H24Z" fill="#E34F26"/>
    </svg>
  );
}
