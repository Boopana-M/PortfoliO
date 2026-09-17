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
  isTurning: boolean;
  onNextSpread: () => void;
  onPrevSpread: () => void;
}

export const PortfolioBook: React.FC<PortfolioBookProps> = ({
  currentSpread,
  isTurning,
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
      {/* Atmosphere Glow & Standing Ground Shadow */}
      <div className="book-ambient-glow" aria-hidden="true" />
      <div className="book-ground-shadow" aria-hidden="true" />

      {/* Main Physical Book Container */}
      <div className="book-container">
        <BookCover />

        {/* Spread Leaves */}
        <div className="book-page-spread">
          <BookPage side="left" pageNumber={activeSpread.leftPageNumber}>
            {renderPageContent(activeSpread.leftPageId)}
          </BookPage>

          <div className="book-center-spine" aria-hidden="true" />

          <BookPage side="right" pageNumber={activeSpread.rightPageNumber}>
            {renderPageContent(activeSpread.rightPageId)}
          </BookPage>
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
