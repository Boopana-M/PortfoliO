import React from 'react';
import { BookCover } from './BookCover';
import { BookPage } from './BookPage';
import { PageTurnControls } from './PageTurnControls';
import { CastleEtching } from '../common/CastleEtching';
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
  isTurning: boolean;
  turnDirection: 'next' | 'prev' | null;
  onNextSpread: () => void;
  onPrevSpread: () => void;
}

export const PortfolioBook: React.FC<PortfolioBookProps> = ({
  currentSpread,
  isTurning,
  turnDirection,
  onNextSpread,
  onPrevSpread,
}) => {
  const activeSpread = spreads[currentSpread] || spreads[0];

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

  return (
    <main className="book-stage" aria-label="Magical Portfolio Book">
      {/* Atmosphere Glows & Multi-tier Realistic Ground Shadows */}
      <div className="book-ambient-glow" aria-hidden="true" />
      <div className="book-ground-shadow-wide" aria-hidden="true" />
      <div className="book-ground-shadow-contact" aria-hidden="true" />
      <div className="book-lectern-rest" aria-hidden="true" />

      {/* Main Physical Book Container */}
      <div className={`book-container ${isTurning ? 'book-is-flipping' : ''}`}>
        <BookCover />

        {/* Spread Leaves with 3D physical curvature */}
        <div className="book-page-spread">
          <div className="book-page-wing book-page-wing-left">
            <BookPage side="left" pageNumber={activeSpread.leftPageNumber}>
              {renderPageContent(activeSpread.leftPageId)}
            </BookPage>
          </div>

          {/* Deep center gutter, physical spine fold, and binding stitches */}
          <div className="book-center-spine" aria-hidden="true">
            <div className="spine-crease-shadow" />
            <div className="spine-highlight-ridge" />
            <div className="spine-stitch stitch-1" />
            <div className="spine-stitch stitch-2" />
            <div className="spine-stitch stitch-3" />
            <div className="spine-stitch stitch-4" />
          </div>

          <div className="book-page-wing book-page-wing-right">
            <BookPage side="right" pageNumber={activeSpread.rightPageNumber}>
              {renderPageContent(activeSpread.rightPageId)}
            </BookPage>
          </div>

          {/* Realistic 3D Physical Turning Page Leaf */}
          {isTurning && (
            <div
              className={`turning-page-leaf-container leaf-turn-${turnDirection || 'next'}`}
              aria-hidden="true"
            >
              <div className="turning-leaf-sheet">
                {/* Front Face of Turning Sheet (Curled parchment with Castle Etching) */}
                <div className="leaf-face leaf-face-front">
                  <div className="parchment-noise-texture" />
                  <div className="leaf-curl-highlight" />
                  <div className="leaf-castle-artwork">
                    <CastleEtching className="turning-leaf-castle" />
                  </div>
                  <div className="leaf-edge-border" />
                </div>

                {/* Back Face of Turning Sheet */}
                <div className="leaf-face leaf-face-back">
                  <div className="parchment-noise-texture" />
                  <div className="leaf-curl-shadow-back" />
                  <div className="leaf-edge-border" />
                </div>
              </div>
              <div className="turning-leaf-cast-shadow" />
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

