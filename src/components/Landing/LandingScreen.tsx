import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { FrontCoverTypography } from './FrontCoverTypography';
import './landing.css';

interface LandingScreenProps {
  onOpen: () => void;
}

export const LandingScreen: React.FC<LandingScreenProps> = ({ onOpen }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onOpen();
    }
  };

  return (
    <section
      className="landing-screen-container"
      aria-label="Boopana M Developer Portfolio Hero"
    >
      {/* 1. Full Screen Backdrop Scene with Pixel-Perfect Coordinate Mapping */}
      <div className="landing-scene-stage">
        <div className="landing-cinematic-backdrop" aria-hidden="true">
          <div className="landing-image-coordinate-layer">
            <img
              src="/closed-book-cover.png"
              alt="Boopana M — Developer Portfolio Background"
              className="landing-scene-image"
              loading="eager"
            />

            {/* Ultra-HD Vector & High-DPI Typography Layer over the book face */}
            <div className="landing-front-cover-mount">
              <FrontCoverTypography isHovered={isHovered} />
            </div>
          </div>

          <div className="landing-candle-aura" />
          <div className="landing-arcane-aura" />
        </div>

        {/* 2. Interactive Hotspot centered over the Book */}
        <div
          className="landing-book-interactive-hotspot"
          role="button"
          tabIndex={0}
          onClick={onOpen}
          onKeyDown={handleKeyDown}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocus={() => setIsHovered(true)}
          onBlur={() => setIsHovered(false)}
          aria-label="Click to open Boopana M's Portfolio"
        />

        {/* 3. Responsive "OPEN PORTFOLIO" CTA Controls */}
        <div className="landing-cta-controls">
          <button
            type="button"
            className="landing-open-btn"
            onClick={onOpen}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            aria-label="Open Developer Portfolio"
          >
            <span className="landing-btn-gem" aria-hidden="true" />
            <span>OPEN PORTFOLIO</span>
            <ArrowRight size={17} className="landing-btn-arrow" aria-hidden="true" />
          </button>

          <p className="landing-cta-hint" aria-hidden="true">
            <Sparkles size={13} />
            Click book or press Enter to open
            <Sparkles size={13} />
          </p>
        </div>
      </div>
    </section>
  );
};

