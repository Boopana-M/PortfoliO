import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import './closedBook.css';

interface ClosedBookLandingProps {
  isOpening: boolean;
  onOpen: () => void;
}

export const ClosedBookLanding: React.FC<ClosedBookLandingProps> = ({
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
      className={`closed-book-stage ${isOpening ? 'opening' : ''}`}
      aria-label="Closed Magical Grimoire Portfolio Landing"
    >
      {/* 1. Full High-Resolution Cinematic Scene Backdrop */}
      <div className="closed-book-backdrop-container">
        <img
          src="/closed-book-cover.jpg"
          alt="Boopana M — Antique Grimoire Portfolio Scene"
          className="closed-book-backdrop-image"
          loading="eager"
        />
        <div className="closed-book-scene-vignette" aria-hidden="true" />
        <div className="closed-scene-candle-glow" aria-hidden="true" />
        <div className="closed-scene-arcane-glow" aria-hidden="true" />
      </div>

      {/* 2. Interactive Center Book Hotspot */}
      <div
        className="closed-book-interactive-area"
        role="button"
        tabIndex={0}
        onClick={onOpen}
        onKeyDown={handleKeyDown}
        aria-label="Click to open Boopana M's Portfolio Book"
      />

      {/* 3. 3D Book-Opening Animation Layer (activated during transition) */}
      <div className="book-opening-leaf-layer" aria-hidden="true">
        <div className="opening-cover-panel">
          <div className="opening-cover-panel-inner" />
        </div>
      </div>

      {/* 4. "OPEN PORTFOLIO" CTA Interface */}
      <div className="closed-book-bottom-bar">
        <button
          type="button"
          className="open-portfolio-button"
          onClick={onOpen}
          disabled={isOpening}
          aria-label="Open Portfolio Book"
        >
          <span className="cta-button-gem" aria-hidden="true" />
          <span>OPEN PORTFOLIO</span>
          <ArrowRight size={17} className="cta-button-arrow" aria-hidden="true" />
        </button>

        <p className="cta-subtext" aria-hidden="true">
          <Sparkles size={13} />
          Click book or press Enter to read
          <Sparkles size={13} />
        </p>
      </div>
    </div>
  );
};
