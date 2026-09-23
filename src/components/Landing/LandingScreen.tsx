import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { BookPage, BlankParchmentPage } from '../Book/BookPage';
import { AboutPage } from '../../pages/AboutPage';
import { SkillsPage } from '../../pages/SkillsPage';
import './landing.css';

interface LandingScreenProps {
  isOpening: boolean;
  onOpen: () => void;
  onOpenComplete: () => void;
}

export const LandingScreen: React.FC<LandingScreenProps> = ({
  isOpening,
  onOpen,
  onOpenComplete,
}) => {
  const [contentRevealed, setContentRevealed] = useState<boolean>(false);

  useEffect(() => {
    if (!isOpening) {
      setContentRevealed(false);
      return;
    }

    // Exact Sequence Timing:
    // 0.0s - 1.15s: Hardcover turns open to reveal blank book spread
    // 0.65s - 1.75s: 1st Blank Parchment Page flips from right to left (0 -> -180deg)
    // 1.75s - 2.85s: 2nd Blank Parchment Page flips from right to left (0 -> -180deg)
    // 2.85s: Both blank pages finish turning. Smoothly reveal About Me & Technical Skills!
    // 3.70s: onOpenComplete() smoothly mounts the interactive PortfolioBook state.

    const revealTimer = setTimeout(() => {
      setContentRevealed(true);
    }, 2850);

    const completeTimer = setTimeout(() => {
      onOpenComplete();
    }, 3700);

    return () => {
      clearTimeout(revealTimer);
      clearTimeout(completeTimer);
    };
  }, [isOpening, onOpenComplete]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (!isOpening) {
        onOpen();
      }
    }
  };

  return (
    <section
      className={`landing-screen-container ${isOpening ? 'landing-opening-active' : ''}`}
      aria-label="Boopana M Grimoire Portfolio Hero"
    >
      {/* 1. Full Screen Backdrop Scene */}
      <div className="landing-scene-stage">
        <div className="landing-cinematic-backdrop" aria-hidden="true">
          <img
            src="/closed-book-cover.png"
            alt="Boopana M — Antique Grimoire Portfolio Background"
            className="landing-scene-image"
            loading="eager"
          />
          <div className="landing-candle-aura" />
          <div className="landing-arcane-aura" />
        </div>

        {/* 2. Interactive Hotspot centered over the Grimoire */}
        {!isOpening && (
          <div
            className="landing-book-interactive-hotspot"
            role="button"
            tabIndex={0}
            onClick={onOpen}
            onKeyDown={handleKeyDown}
            aria-label="Click to open Boopana M's Portfolio Grimoire"
          />
        )}

        {/* 3. Physical 3D Opening Grimoire with 2 Blank Turning Pages and Smooth Content Reveal */}
        {isOpening && (
          <div className="landing-opening-grimoire-stage" aria-hidden="true">
            <div className="landing-open-spread-container">
              {/* Stationary Left Wing: Blank until both blank pages finish turning, then smoothly reveals About Me */}
              <div className="landing-spread-wing landing-wing-left">
                {!contentRevealed ? (
                  <BlankParchmentPage side="left" />
                ) : (
                  <div className="manuscript-ink-reveal">
                    <BookPage side="left" pageNumber={1}>
                      <AboutPage />
                    </BookPage>
                  </div>
                )}
              </div>

              {/* Physical Center Spine Crease */}
              <div className="landing-center-spine">
                <div className="spine-crease-shadow" />
                <div className="spine-highlight-ridge" />
                <div className="spine-stitch stitch-1" />
                <div className="spine-stitch stitch-2" />
                <div className="spine-stitch stitch-3" />
                <div className="spine-stitch stitch-4" />
              </div>

              {/* Stationary Right Wing: Blank until both blank pages finish turning, then smoothly reveals Technical Skills */}
              <div className="landing-spread-wing landing-wing-right">
                {!contentRevealed ? (
                  <BlankParchmentPage side="right" />
                ) : (
                  <div className="manuscript-ink-reveal">
                    <BookPage side="right" pageNumber={2}>
                      <SkillsPage />
                    </BookPage>
                  </div>
                )}
              </div>

              {/* 1st Blank Physical Parchment Leaf (Turns 0deg -> -180deg) */}
              <div className="landing-blank-leaf-turner landing-blank-leaf-1">
                <div className="landing-blank-leaf-sheet">
                  <div className="landing-flyleaf-face-front">
                    <div className="parchment-noise-texture" />
                    <div className="parchment-vignette-stain" />
                    <div className="page-border-outer">
                      <div className="page-border-inner">
                        <span className="page-corner-ornament pco-tl">✤</span>
                        <span className="page-corner-ornament pco-tr">✤</span>
                        <span className="page-corner-ornament pco-bl">✤</span>
                        <span className="page-corner-ornament pco-br">✤</span>
                      </div>
                    </div>
                    <div className="leaf-curl-highlight" />
                    <div className="leaf-edge-thickness" />
                  </div>
                  <div className="landing-flyleaf-face-back">
                    <div className="parchment-noise-texture" />
                    <div className="parchment-vignette-stain" />
                    <div className="page-border-outer">
                      <div className="page-border-inner">
                        <span className="page-corner-ornament pco-tl">✤</span>
                        <span className="page-corner-ornament pco-tr">✤</span>
                        <span className="page-corner-ornament pco-bl">✤</span>
                        <span className="page-corner-ornament pco-br">✤</span>
                      </div>
                    </div>
                    <div className="leaf-curl-shadow-back" />
                    <div className="leaf-edge-thickness" />
                  </div>
                </div>
                <div className="landing-leaf-cast-shadow shadow-leaf-1" />
              </div>

              {/* 2nd Blank Physical Parchment Leaf (Turns 0deg -> -180deg right after 1st) */}
              <div className="landing-blank-leaf-turner landing-blank-leaf-2">
                <div className="landing-blank-leaf-sheet">
                  <div className="landing-flyleaf-face-front">
                    <div className="parchment-noise-texture" />
                    <div className="parchment-vignette-stain" />
                    <div className="page-border-outer">
                      <div className="page-border-inner">
                        <span className="page-corner-ornament pco-tl">✤</span>
                        <span className="page-corner-ornament pco-tr">✤</span>
                        <span className="page-corner-ornament pco-bl">✤</span>
                        <span className="page-corner-ornament pco-br">✤</span>
                      </div>
                    </div>
                    <div className="leaf-curl-highlight" />
                    <div className="leaf-edge-thickness" />
                  </div>
                  <div className="landing-flyleaf-face-back">
                    <div className="parchment-noise-texture" />
                    <div className="parchment-vignette-stain" />
                    <div className="page-border-outer">
                      <div className="page-border-inner">
                        <span className="page-corner-ornament pco-tl">✤</span>
                        <span className="page-corner-ornament pco-tr">✤</span>
                        <span className="page-corner-ornament pco-bl">✤</span>
                        <span className="page-corner-ornament pco-br">✤</span>
                      </div>
                    </div>
                    <div className="leaf-curl-shadow-back" />
                    <div className="leaf-edge-thickness" />
                  </div>
                </div>
                <div className="landing-leaf-cast-shadow shadow-leaf-2" />
              </div>

              {/* Hardcover Outer Lid turning open from right to left */}
              <div className="landing-hardcover-leaf-turner">
                <div className="landing-cover-outer-face">
                  <div className="hardcover-leather-bg" />
                  <div className="hardcover-gold-filigree">
                    <div className="hardcover-crest-seal">
                      <span className="hardcover-seal-letter">B</span>
                    </div>
                    <h2 className="hardcover-title">BOOPANA M</h2>
                    <p className="hardcover-subtitle">SOFTWARE ENGINEER</p>
                  </div>
                </div>
                <div className="landing-cover-inner-face">
                  <div className="hardcover-inner-marbled-paper" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 4. Responsive "OPEN PORTFOLIO" CTA Controls */}
        {!isOpening && (
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
        )}
      </div>
    </section>
  );
};
