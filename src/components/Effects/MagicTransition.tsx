import React, { useEffect, useState } from 'react';
import './effects.css';

interface MagicTransitionProps {
  onComplete: () => void;
}

export const MagicTransition: React.FC<MagicTransitionProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'enter' | 'pulse' | 'exit'>('enter');

  useEffect(() => {
    // 0.0s - 0.3s: Fast black screen fade-in with arcane ring burst
    const pulseTimer = setTimeout(() => {
      setPhase('pulse');
    }, 300);

    // 1.1s: Start smooth exit fade into inside UI
    const exitTimer = setTimeout(() => {
      setPhase('exit');
    }, 1150);

    // 1.45s: Complete transition and mount inside UI
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 1450);

    return () => {
      clearTimeout(pulseTimer);
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className={`magic-transition-screen magic-phase-${phase}`} aria-hidden="true">
      {/* Mystical Arcane Aura Shockwaves */}
      <div className="magic-shockwave-aura shockwave-1" />
      <div className="magic-shockwave-aura shockwave-2" />
      <div className="magic-shockwave-aura shockwave-3" />

      {/* Central Rotating Arcane Runic Seal */}
      <div className="magic-sigil-center">
        <svg viewBox="0 0 300 300" className="magic-sigil-svg">
          {/* Outer Runic Rings */}
          <circle cx="150" cy="150" r="140" fill="none" stroke="#4dbfe8" strokeWidth="1.5" strokeDasharray="8 12" className="sigil-spin-slow" />
          <circle cx="150" cy="150" r="126" fill="none" stroke="#e5cb87" strokeWidth="1" opacity="0.8" />
          <circle cx="150" cy="150" r="112" fill="none" stroke="#4dbfe8" strokeWidth="1.2" strokeDasharray="4 6" className="sigil-spin-reverse" />
          <circle cx="150" cy="150" r="95" fill="none" stroke="#e5cb87" strokeWidth="1.5" />
          
          {/* Concentric Mystic Polygons & Runes */}
          <polygon points="150,38 247,150 150,262 53,150" fill="none" stroke="#4dbfe8" strokeWidth="1.2" opacity="0.8" className="sigil-spin-slow" />
          <polygon points="150,38 235,215 65,215" fill="none" stroke="#e5cb87" strokeWidth="1" opacity="0.7" className="sigil-spin-reverse" />
          <polygon points="150,262 65,85 235,85" fill="none" stroke="#e5cb87" strokeWidth="1" opacity="0.7" className="sigil-spin-reverse" />
          <circle cx="150" cy="150" r="60" fill="none" stroke="#4dbfe8" strokeWidth="1.5" strokeDasharray="3 7" className="sigil-spin-slow" />
          <circle cx="150" cy="150" r="35" fill="rgba(77, 191, 232, 0.15)" stroke="#e5cb87" strokeWidth="2" />
        </svg>

        {/* Arcane Center Core Shimmer */}
        <div className="magic-sigil-core" />
      </div>

      {/* Floating Arcane Runes & Ethereal Spells */}
      <div className="magic-glyphs-cluster">
        <span className="magic-glyph glyph-top">✦</span>
        <span className="magic-glyph glyph-right">✧</span>
        <span className="magic-glyph glyph-bottom">✵</span>
        <span className="magic-glyph glyph-left">✧</span>
      </div>

      {/* Ethereal Spell Whispers */}
      <div className="magic-whisper-text">
        <span className="whisper-rune">✧</span>
        <span className="whisper-words">UNVEILING THE GRIMOIRE</span>
        <span className="whisper-rune">✧</span>
      </div>
    </div>
  );
};
