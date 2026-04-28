import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export default function Logo({ className = "", variant = 'light' }: LogoProps) {
  const textColor = variant === 'light' ? '#166534' : '#ffffff';
  
  return (
    <div className={`flex items-center gap-2 notranslate ${className}`} translate="no" role="img" aria-label="eTalk 화상영어">
      <svg width="110" height="42" viewBox="0 0 110 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[120px] md:w-[150px] h-auto">
        {/* The 'e' circle */}
        <circle cx="21" cy="21" r="21" fill="#A3E635" />
        {/* The 'e' character path */}
        <path d="M26.5 21C26.5 17.5 24.5 15.5 21 15.5C17.5 15.5 15.5 17.5 15.5 21C15.5 24.5 17.5 26.5 21 26.5C23.5 26.5 25 25.5 25.8 24L28.5 25.5C27 28 24.5 29.5 21 29.5C15.5 29.5 12.5 26 12.5 21C12.5 16 15.5 12.5 21 12.5C26.5 12.5 29.5 16 29.5 21H26.5ZM21 18.5C23.5 18.5 24.5 19.5 24.5 21H17.5C17.5 19.5 18.5 18.5 21 18.5Z" fill="white" />
        {/* Subtle 3D effect overlay */}
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'white', stopOpacity: 0.3 }} />
            <stop offset="100%" style={{ stopColor: 'white', stopOpacity: 0 }} />
          </linearGradient>
        </defs>
        <circle cx="21" cy="21" r="21" fill="url(#grad1)" pointerEvents="none" />

        {/* 'Talk' as paths to prevent translation */}
        <g transform="translate(48, 25)" fill={textColor}>
          {/* T */}
          <path d="M0 -15H8V-12.5H5.2V0H2.8V-12.5H0V-15Z" />
          {/* a */}
          <path d="M10.5 -7C10.5 -9 11.5 -10 13.5 -10C15.5 -10 16.5 -9 16.5 -7V0H14.2V-1.5C13.8 -0.5 13 -0.2 12 -0.2C10.5 -0.2 9.5 -1.2 9.5 -3C9.5 -4.8 10.5 -5.8 12.5 -5.8H14.2V-6.5C14.2 -7.5 13.8 -8 12.8 -8C11.8 -8 11.4 -7.5 11.4 -6.8L10.5 -7ZM14.2 -4H12.8C12 -4 11.6 -3.6 11.6 -3C11.6 -2.4 12 -2 12.8 -2C13.8 -2 14.2 -2.5 14.2 -3.5V-4Z" />
          {/* l */}
          <path d="M19.5 -15H21.5V0H19.5V-15Z" />
          {/* k */}
          <path d="M24 -15H26V-6.5L30 -11H32.5L28.5 -6.5L33 0H30.5L26.8 -5.5L26 4.5V0H24V-15Z" />
        </g>
        
        {/* 화상영어 tag */}
        <g transform="translate(48, 38)">
          <text fontSize="8" fontWeight="bold" fill={variant === 'light' ? '#6B7280' : '#9CA3AF'} className="uppercase">화상영어</text>
        </g>

        {/* The Leaf SVG as part of the combined SVG */}
        <g transform="translate(90, 8)" stroke="#84CC16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 0C12 0 8 0 4 4C0 8 -1 13 -1 13M12 0C12 0 12 4 8 8C4 12 -1 13 -1 13M-1 13C-1 13 -3 15 -6 18" />
          <path d="M4 4C5.5 4 7 4.5 8 8" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}
