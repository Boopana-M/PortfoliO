import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import './landing.css';

interface LandingScreenProps {
  isOpening: boolean;
  onOpen: () => void;
}

export const LandingScreen: React.FC<LandingScreenProps> = ({
  isOpening,
  onOpen,
}) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onOpen();
    }
  };

  return (
    <section
      className={`landing-screen-container ${isOpening ? 'landing-opening' : ''}`}
      aria-label="Boopana M Grimoire Portfolio Hero"
    >
      {/* Centered, contained scene stage ensuring the entire book is 100% visible from top to bottom */}
      <div className="landing-scene-stage">
        {/* 1. Full High-Resolution Grimoire Scene */}
        <div className="landing-cinematic-backdrop" aria-hidden="true">
          <img
            src="/closed-book-cover.jpg"
            alt="Boopana M — Antique Grimoire Portfolio Background"
            className="landing-scene-image"
            loading="eager"
          />
          <div className="landing-candle-aura" />
          <div className="landing-arcane-aura" />
        </div>

        {/* 2. Interactive Hotspot centered over the Grimoire */}
        <div
          className="landing-book-interactive-hotspot"
          role="button"
          tabIndex={0}
          onClick={onOpen}
          onKeyDown={handleKeyDown}
          aria-label="Click to open Boopana M's Portfolio Grimoire"
        />

        {/* 3. 3D Physical Opening Cover Leaf */}
        <div className="landing-opening-3d-leaf" aria-hidden="true">
          <div className="landing-cover-leaf-outer">
            <div className="landing-cover-leaf-inner" />
          </div>
        </div>

        {/* 4. Responsive "OPEN PORTFOLIO" CTA Controls */}
        <div className="landing-cta-controls">
          <button
            type="button"
            className="landing-open-btn"
            onClick={onOpen}
            disabled={isOpening}
            aria-label="Open Portfolio Grimoire"
          >
            <span className="landing-btn-gem" aria-hidden="true" />
            <span>OPEN PORTFOLIO</span>
            <ArrowRight size={17} className="landing-btn-arrow" aria-hidden="true" />
          </button>

          <p className="landing-cta-hint" aria-hidden="true">
            <Sparkles size={13} />
            Click grimoire or press Enter to open
            <Sparkles size={13} />
          </p>
        </div>
      </div>
    </section>
  );
};
