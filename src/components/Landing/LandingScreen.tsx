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
    <div
      className={`landing-screen-container ${isOpening ? 'landing-opening' : ''}`}
      aria-label="Boopana M Grimoire Portfolio Landing"
    >
      {/* Contained, perfectly proportioned cinematic grimoire stage */}
      <div className="landing-scene-stage">
        {/* 1. Full High-Resolution Cinematic Scene */}
        <div className="landing-cinematic-backdrop">
          <img
            src="/closed-book-cover.jpg"
            alt="Boopana M — Antique Grimoire Portfolio Scene"
            className="landing-scene-image"
            loading="eager"
          />
          <div className="landing-scene-vignette" aria-hidden="true" />
          <div className="landing-candle-aura" aria-hidden="true" />
          <div className="landing-arcane-aura" aria-hidden="true" />
        </div>

        {/* 2. Interactive Hotspot on the Center Grimoire */}
        <div
          className="landing-book-interactive-hotspot"
          role="button"
          tabIndex={0}
          onClick={onOpen}
          onKeyDown={handleKeyDown}
          aria-label="Click to open Boopana M's Portfolio Grimoire"
        />

        {/* 3. 3D Physical Opening Cover Leaf (activates upon clicking OPEN) */}
        <div className="landing-opening-3d-leaf" aria-hidden="true">
          <div className="landing-cover-leaf-outer">
            <div className="landing-cover-leaf-inner" />
          </div>
        </div>

        {/* 4. Elegant "OPEN PORTFOLIO" CTA Controls positioned cleanly below */}
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
    </div>
  );
};

