import React from 'react';

export const ArcaneCircles: React.FC = () => {
  return (
    <div className="arcane-circles-container" aria-hidden="true">
      {/* Left Arcane Circle Aura */}
      <div className="arcane-circle-wing arcane-wing-left">
        <svg viewBox="0 0 200 200" className="arcane-ring-svg">
          <circle cx="100" cy="100" r="92" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="6 8" className="spin-slow" />
          <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="100" cy="100" r="68" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 5" className="spin-reverse" />
          <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" strokeWidth="1" />
          {/* Arcane Star / Runic Polygons */}
          <polygon points="100,20 180,100 100,180 20,100" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
          <polygon points="100,20 169,150 31,150" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
          <polygon points="100,180 31,50 169,50" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
        </svg>
      </div>

      {/* Right Arcane Circle Aura */}
      <div className="arcane-circle-wing arcane-wing-right">
        <svg viewBox="0 0 200 200" className="arcane-ring-svg">
          <circle cx="100" cy="100" r="92" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="6 8" className="spin-slow" />
          <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="100" cy="100" r="68" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 5" className="spin-reverse" />
          <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" strokeWidth="1" />
          {/* Arcane Star / Runic Polygons */}
          <polygon points="100,20 180,100 100,180 20,100" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
          <polygon points="100,20 169,150 31,150" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
          <polygon points="100,180 31,50 169,50" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
        </svg>
      </div>
    </div>
  );
};
