import React, { useState, useEffect } from 'react';
import { BookCover } from './BookCover';
import { BookPage, BlankParchmentPage } from './BookPage';
import { PageTurnControls } from './PageTurnControls';
import { AboutPage } from '../../pages/AboutPage';
import { SkillsPage } from '../../pages/SkillsPage';
import { ProjectsPage } from '../../pages/ProjectsPage';
import { ExperiencePage } from '../../pages/ExperiencePage';
import { AchievementsPage } from '../../pages/AchievementsPage';
import { OpenSourcePage } from '../../pages/OpenSourcePage';
import { ResumePage } from '../../pages/ResumePage';
import { ContactPage } from '../../pages/ContactPage';
import { spreads } from '../../data/navigation';
import './book.css';

interface PortfolioBookProps {
  currentSpread: number;
  targetSpread?: number;
  isTurning: boolean;
  turnDirection: 'next' | 'prev' | null;
  onNextSpread: () => void;
  onPrevSpread: () => void;
  isInitialOpening?: boolean;
}

export const PortfolioBook: React.FC<PortfolioBookProps> = ({
  currentSpread,
  targetSpread = currentSpread,
  isTurning,
  turnDirection,
  onNextSpread,
  onPrevSpread,
  isInitialOpening = true,
}) => {
  const [mobileActiveSide, setMobileActiveSide] = useState<'left' | 'right'>('left');
  const [openingStage, setOpeningStage] = useState<'blank1' | 'reveal' | 'ready'>(
    isInitialOpening ? 'blank1' : 'ready'
  );

  useEffect(() => {
    if (!isInitialOpening) {
      setOpeningStage('ready');
      return;
    }

    // Exact 2-Page Leafing Sequence:
    // 0.00s - 1.15s: Turn 1 -> Left & Right wings are empty blank parchment. 1st blank leaf turns.
    // 1.15s - 2.30s: Turn 2 -> 2nd leaf turns. Front is blank, uncovering Technical Skills on the right. Back has About Me swinging over to the left!
    // 2.30s+: Ready -> About Me settled on left, Technical Skills on right. Book fully open!

    setOpeningStage('blank1');

    const timerReveal = setTimeout(() => {
      setOpeningStage('reveal');
    }, 1150);

    const timerReady = setTimeout(() => {
      setOpeningStage('ready');
    }, 2300);

    return () => {
      clearTimeout(timerReveal);
      clearTimeout(timerReady);
    };
  }, [isInitialOpening]);

  useEffect(() => {
    setMobileActiveSide('left');
  }, [currentSpread]);

  const activeSpread = spreads[currentSpread] || spreads[0];
  const destSpread = spreads[targetSpread] || activeSpread;

  const renderPageContent = (pageId: string) => {
    switch (pageId) {
      case 'about':
        return <AboutPage />;
      case 'skills':
        return <SkillsPage />;
      case 'projects':
        return <ProjectsPage />;
      case 'experience':
        return <ExperiencePage />;
      case 'achievements':
        return <AchievementsPage />;
      case 'opensource':
        return <OpenSourcePage />;
      case 'resume':
        return <ResumePage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <AboutPage />;
    }
  };

  // Stationary wings during normal page turning
  const leftStationaryPage = isTurning && turnDirection === 'prev' ? destSpread : activeSpread;
  const rightStationaryPage = isTurning && turnDirection === 'next' ? destSpread : activeSpread;

  const isInitialLeafing = openingStage !== 'ready';
  const showContent = openingStage === 'ready';

  return (
    <main className="book-stage" aria-label="Magical Portfolio Book">
      {/* Atmosphere Glows & Multi-tier Ground Shadows */}
      <div className="book-ambient-glow" aria-hidden="true" />
      <div className="book-ground-shadow-wide" aria-hidden="true" />
      <div className="book-ground-shadow-contact" aria-hidden="true" />
      <div className="book-lectern-rest" aria-hidden="true" />

      {/* Mobile Spread Page Switcher Tab Bar */}
      {showContent && (
        <div className="mobile-spread-tabs" aria-label="Mobile page selector">
          <button
            type="button"
            className={`mobile-tab-btn ${mobileActiveSide === 'left' ? 'active' : ''}`}
            onClick={() => setMobileActiveSide('left')}
          >
            <span>Page {activeSpread.leftPageNumber}</span>
          </button>
          <span className="mobile-tab-divider">✦</span>
          <button
            type="button"
            className={`mobile-tab-btn ${mobileActiveSide === 'right' ? 'active' : ''}`}
            onClick={() => setMobileActiveSide('right')}
          >
            <span>Page {activeSpread.rightPageNumber}</span>
          </button>
        </div>
      )}

      {/* Main Physical Book Container */}
      <div className={`book-container ${isTurning ? 'book-is-flipping' : ''} mobile-show-${mobileActiveSide}`}>
        <BookCover />

        {/* Spread Leaves with 3D physical curvature */}
        <div className="book-page-spread">
          {/* Stationary Left Wing:
              - Stage 'blank1' & 'reveal': Empty blank parchment.
              - Stage 'ready': Settled with About Me (Page 01).
          */}
          <div className="book-page-wing book-page-wing-left">
            {!showContent ? (
              <BlankParchmentPage side="left" />
            ) : (
              <BookPage side="left" pageNumber={leftStationaryPage.leftPageNumber}>
                {renderPageContent(leftStationaryPage.leftPageId)}
              </BookPage>
            )}
          </div>

          {/* Deep Center Gutter, Physical Spine Fold & Stitching */}
          <div className="book-center-spine" aria-hidden="true">
            <div className="spine-crease-shadow" />
            <div className="spine-highlight-ridge" />
            <div className="spine-stitch stitch-1" />
            <div className="spine-stitch stitch-2" />
            <div className="spine-stitch stitch-3" />
            <div className="spine-stitch stitch-4" />
          </div>

          {/* Stationary Right Wing:
              - Stage 'blank1': Empty blank parchment!
              - Stage 'reveal': Technical Skills (Page 02), naturally unveiled when 2nd leaf lifts off!
              - Stage 'ready': Technical Skills (Page 02) or current page.
          */}
          <div className="book-page-wing book-page-wing-right">
            {openingStage === 'blank1' ? (
              <BlankParchmentPage side="right" />
            ) : (
              <BookPage side="right" pageNumber={rightStationaryPage.rightPageNumber}>
                {renderPageContent(rightStationaryPage.rightPageId)}
              </BookPage>
            )}
          </div>

          {/* Initial Opening: Exactly 2 Physical Leaf Turns */}
          {isInitialLeafing && (
            <>
              {/* 1st Blank Turning Leaf (0.15s - 1.20s) */}
              <div className="inside-blank-leaf-turner inside-blank-leaf-1" aria-hidden="true">
                <div className="inside-blank-leaf-sheet">
                  <div className="inside-flyleaf-face-front">
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
                  <div className="inside-flyleaf-face-back">
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
                <div className="inside-leaf-cast-shadow inside-shadow-leaf-1" />
              </div>

              {/* 2nd Turning Leaf: Physically turns from right to left (1.15s - 2.30s).
                  Front is blank parchment uncovering Technical Skills on the right.
                  Back is About Me swinging over and settling on the left!
              */}
              <div className="inside-blank-leaf-turner inside-reveal-leaf" aria-hidden="true">
                <div className="inside-blank-leaf-sheet">
                  {/* Front Face: Blank parchment lifting off the right */}
                  <div className="inside-flyleaf-face-front">
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

                  {/* Back Face: About Me (Page 01) physically swinging over and casually settling on the left */}
                  <div className="leaf-face leaf-face-back">
                    <BookPage side="left" pageNumber={1}>
                      <AboutPage />
                    </BookPage>
                    <div className="leaf-curl-shadow-back" />
                    <div className="leaf-edge-thickness" />
                  </div>
                </div>
                <div className="inside-leaf-cast-shadow inside-shadow-reveal" />
              </div>
            </>
          )}

          {/* Regular Dual-Faced 3D Physical Turning Page Leaf (Next / Prev) */}
          {!isInitialLeafing && isTurning && turnDirection === 'next' && (
            <div className="turning-page-leaf-container leaf-turn-next" aria-hidden="true">
              <div className="turning-leaf-sheet">
                <div className="leaf-face leaf-face-front">
                  <BookPage side="right" pageNumber={activeSpread.rightPageNumber}>
                    {renderPageContent(activeSpread.rightPageId)}
                  </BookPage>
                  <div className="leaf-curl-highlight" />
                  <div className="leaf-edge-thickness" />
                </div>
                <div className="leaf-face leaf-face-back">
                  <BookPage side="left" pageNumber={destSpread.leftPageNumber}>
                    {renderPageContent(destSpread.leftPageId)}
                  </BookPage>
                  <div className="leaf-curl-shadow-back" />
                  <div className="leaf-edge-thickness" />
                </div>
              </div>
              <div className="turning-leaf-cast-shadow shadow-turn-next" />
            </div>
          )}

          {!isInitialLeafing && isTurning && turnDirection === 'prev' && (
            <div className="turning-page-leaf-container leaf-turn-prev" aria-hidden="true">
              <div className="turning-leaf-sheet">
                <div className="leaf-face leaf-face-front">
                  <BookPage side="right" pageNumber={destSpread.rightPageNumber}>
                    {renderPageContent(destSpread.rightPageId)}
                  </BookPage>
                  <div className="leaf-curl-highlight" />
                  <div className="leaf-edge-thickness" />
                </div>
                <div className="leaf-face leaf-face-back">
                  <BookPage side="left" pageNumber={activeSpread.leftPageNumber}>
                    {renderPageContent(activeSpread.leftPageId)}
                  </BookPage>
                  <div className="leaf-curl-shadow-back" />
                  <div className="leaf-edge-thickness" />
                </div>
              </div>
              <div className="turning-leaf-cast-shadow shadow-turn-prev" />
            </div>
          )}
        </div>
      </div>

      {/* Centered Antique Plinth Clasp with Glowing Cyan Crystal */}
      <div className="plinth-crystal-clasp-wrapper" aria-hidden="true">
        <div className="plinth-ornate-plate">
          <div className="plinth-filigree-left" />
          <div className="plinth-gem-socket">
            <div className="plinth-gem-halo" />
            <div className="plinth-faceted-gem" />
          </div>
          <div className="plinth-filigree-right" />
        </div>
      </div>

      {/* Bottom Right Controls */}
      {showContent && (
        <PageTurnControls
          currentSpread={currentSpread}
          totalSpreads={spreads.length}
          isTurning={isTurning || isInitialLeafing}
          onNext={onNextSpread}
          onPrev={onPrevSpread}
        />
      )}
    </main>
  );
};
