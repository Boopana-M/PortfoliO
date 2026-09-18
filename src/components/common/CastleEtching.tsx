import React from 'react';

export const CastleEtching: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <svg
      viewBox="0 0 160 200"
      className={`castle-etching-svg ${className}`}
      fill="none"
      stroke="var(--ink)"
      strokeWidth="0.8"
      opacity="0.35"
    >
      {/* Antique medieval wizarding castle sketch */}
      {/* Central Keep & Spire */}
      <path d="M80 20 L80 60 M75 35 L85 35 M70 60 L90 60" />
      <polygon points="80,10 75,35 85,35" fill="var(--ink)" opacity="0.4" />
      <rect x="72" y="60" width="16" height="45" stroke="var(--ink)" strokeWidth="0.8" />
      <line x1="80" y1="65" x2="80" y2="75" strokeWidth="1" />
      <line x1="80" y1="85" x2="80" y2="95" strokeWidth="1" />

      {/* Left Tower */}
      <polygon points="45,35 40,65 50,65" fill="var(--ink)" opacity="0.3" />
      <rect x="38" y="65" width="14" height="60" stroke="var(--ink)" strokeWidth="0.8" />
      <line x1="45" y1="75" x2="45" y2="85" />
      <line x1="45" y1="95" x2="45" y2="105" />

      {/* Right Tower */}
      <polygon points="115,30 110,60 120,60" fill="var(--ink)" opacity="0.3" />
      <rect x="108" y="60" width="14" height="65" stroke="var(--ink)" strokeWidth="0.8" />
      <line x1="115" y1="70" x2="115" y2="80" />
      <line x1="115" y1="90" x2="115" y2="100" />

      {/* Connecting ramparts & battlements */}
      <path d="M52 80 L72 80 M88 80 L108 80" strokeWidth="1" />
      <path d="M52 75 L54 75 L54 80 L58 80 L58 75 L62 75 L62 80 L66 80 L66 75 L70 75 L70 80" />
      <path d="M90 75 L92 75 L92 80 L96 80 L96 75 L100 75 L100 80 L104 80 L104 75 L108 75" />

      {/* Main Base Walls & Buttresses */}
      <rect x="30" y="125" width="100" height="50" stroke="var(--ink)" strokeWidth="0.8" />
      <path d="M70 175 C70 155 90 155 90 175 Z" fill="var(--ink)" opacity="0.5" />
      
      {/* Stone Hatching / Etching lines */}
      <line x1="32" y1="135" x2="48" y2="135" strokeDasharray="2 2" />
      <line x1="52" y1="145" x2="68" y2="145" strokeDasharray="2 2" />
      <line x1="92" y1="135" x2="118" y2="135" strokeDasharray="2 2" />
      <line x1="102" y1="155" x2="128" y2="155" strokeDasharray="2 2" />
      <line x1="35" y1="165" x2="65" y2="165" strokeDasharray="2 2" />

      {/* Rocky Cliff Base */}
      <path d="M15 175 Q40 165 70 175 Q110 165 145 175 Q155 190 135 195 Q80 190 25 195 Z" opacity="0.4" />
      <line x1="20" y1="185" x2="140" y2="185" strokeDasharray="3 3" />
    </svg>
  );
};
