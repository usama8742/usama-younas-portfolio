import React from 'react';

export function GithubIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      aria-hidden="true" 
      {...props}
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M12 2C6.477 2 2 6.59 2 12.253c0 4.531 2.865 8.374 6.839 9.73.5.095.682-.223.682-.493 0-.244-.009-.89-.014-1.747-2.782.618-3.369-1.375-3.369-1.375-.455-1.184-1.11-1.499-1.11-1.499-.908-.635.069-.622.069-.622 1.004.073 1.532 1.057 1.532 1.057.892 1.568 2.341 1.115 2.91.853.091-.663.35-1.115.636-1.371-2.221-.259-4.555-1.14-4.555-5.071 0-1.12.39-2.036 1.03-2.754-.103-.26-.446-1.303.098-2.716 0 0 .84-.276 2.75 1.052A9.34 9.34 0 0 1 12 6.981a9.34 9.34 0 0 1 2.504.345c1.909-1.328 2.748-1.052 2.748-1.052.546 1.413.203 2.456.1 2.716.64.718 1.028 1.634 1.028 2.754 0 3.941-2.337 4.81-4.565 5.064.359.317.679.944.679 1.903 0 1.374-.013 2.482-.013 2.82 0 .273.18.593.688.492C19.138 20.623 22 16.783 22 12.253 22 6.59 17.523 2 12 2Z" 
      />
    </svg>
  );
}

export function LinkedinIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      aria-hidden="true" 
      {...props}
    >
      <path 
        d="M6.94 8.5H3.56V19h3.38V8.5ZM5.25 3A1.96 1.96 0 1 0 5.25 6.92 1.96 1.96 0 0 0 5.25 3ZM19.5 12.98c0-3.16-1.69-4.63-3.94-4.63-1.82 0-2.63 1-3.08 1.7V8.5H9.1V19h3.38v-5.2c0-1.37.26-2.7 1.96-2.7 1.68 0 1.7 1.57 1.7 2.79V19h3.37l-.01-6.02Z" 
      />
    </svg>
  );
}

export function InstagramIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      aria-hidden="true" 
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}
