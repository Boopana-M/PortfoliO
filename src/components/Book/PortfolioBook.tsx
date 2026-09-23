import React from 'react';
import { BookCover } from './BookCover';
import { BookPage } from './BookPage';
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
}

export const PortfolioBook: React.FC<PortfolioBookProps> = ({
  currentSpread,
  targetSpread = currentSpread,
  isTurning,
  turnDirection,
  onNextSpread,
  onPrevSpread,
}) => {
  const [mobileActiveSide, setMobileActiveSide] = React.useState<'left' | 'right'>('left');

  React.useEffect(() => {
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

  // Determine what each stationary wing displays during animation vs resting
  const leftStationaryPage = isTurning && turnDirection === 'prev' ? destSpread : activeSpread;
  const rightStationaryPage = isTurning && turnDirection === 'next' ? destSpread : activeSpread;

  return (
    <main className="book-stage" aria-label="Magical Portfolio Book">
      {/* Atmosphere Glows & Multi-tier Ground Shadows */}
      <div className="book-ambient-glow" aria-hidden="true" />
      <div className="book-ground-shadow-wide" aria-hidden="true" />
      <div className="book-ground-shadow-contact" aria-hidden="true" />
      <div className="book-lectern-rest" aria-hidden="true" />

      {/* Mobile Spread Page Switcher Tab Bar */}
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

      {/* Main Physical Book Container */}
      <div className={`book-container ${isTurning ? 'book-is-flipping' : ''} mobile-show-${mobileActiveSide}`}>
        <BookCover />

        {/* Spread Leaves with 3D physical curvature */}
        <div className="book-page-spread">
          {/* Stationary Left Wing */}
          <div className="book-page-wing book-page-wing-left">
            <BookPage side="left" pageNumber={leftStationaryPage.leftPageNumber}>
              {renderPageContent(leftStationaryPage.leftPageId)}
            </BookPage>
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

          {/* Stationary Right Wing */}
          <div className="book-page-wing book-page-wing-right">
            <BookPage side="right" pageNumber={rightStationaryPage.rightPageNumber}>
              {renderPageContent(rightStationaryPage.rightPageId)}
            </BookPage>
          </div>

          {/* REAL DUAL-FACED 3D PHYSICAL TURNING PAGE LEAF */}
          {isTurning && turnDirection === 'next' && (
            <div className="turning-page-leaf-container leaf-turn-next" aria-hidden="true">
              <div className="turning-leaf-sheet">
                {/* Front Face: Outgoing Right Page (e.g. Skills) rotating 0deg to -90deg */}
                <div className="leaf-face leaf-face-front">
                  <BookPage side="right" pageNumber={activeSpread.rightPageNumber}>
                    {renderPageContent(activeSpread.rightPageId)}
                  </BookPage>
                  <div className="leaf-curl-highlight" />
                  <div className="leaf-edge-thickness" />
                </div>

                {/* Back Face: Incoming Left Page (e.g. Projects) rotating -90deg to -180deg */}
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

          {isTurning && turnDirection === 'prev' && (
            <div className="turning-page-leaf-container leaf-turn-prev" aria-hidden="true">
              <div className="turning-leaf-sheet">
                {/* Front Face: Incoming Right Page (e.g. Skills) descending onto right */}
                <div className="leaf-face leaf-face-front">
                  <BookPage side="right" pageNumber={destSpread.rightPageNumber}>
                    {renderPageContent(destSpread.rightPageId)}
                  </BookPage>
                  <div className="leaf-curl-highlight" />
                  <div className="leaf-edge-thickness" />
                </div>

                {/* Back Face: Outgoing Left Page (e.g. Projects) lifting off left */}
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
      <PageTurnControls
        currentSpread={currentSpread}
        totalSpreads={spreads.length}
        isTurning={isTurning}
        onNext={onNextSpread}
        onPrev={onPrevSpread}
      />
    </main>
  );
};
