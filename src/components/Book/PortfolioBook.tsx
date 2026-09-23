import React, { useState, useEffect, useRef, useCallback } from 'react';
import { PageFlip } from 'page-flip';
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
  onSpreadChange: (spreadIndex: number) => void;
  isInitialOpening?: boolean;
}

export const PortfolioBook: React.FC<PortfolioBookProps> = ({
  currentSpread,
  onSpreadChange,
  isInitialOpening = true,
}) => {
  const bookContainerRef = useRef<HTMLDivElement>(null);
  const pageFlipRef = useRef<PageFlip | null>(null);
  const [isBookReady, setIsBookReady] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);
  const [openingFinished, setOpeningFinished] = useState(!isInitialOpening);

  // Safe wrapper methods for page-flip operations
  const safeFlipNext = useCallback(() => {
    try {
      if (pageFlipRef.current) {
        pageFlipRef.current.flipNext('bottom');
      }
    } catch (e) {
      console.warn('PageFlip flipNext ignored:', e);
    }
  }, []);

  const safeFlipPrev = useCallback(() => {
    try {
      if (pageFlipRef.current) {
        pageFlipRef.current.flipPrev('bottom');
      }
    } catch (e) {
      console.warn('PageFlip flipPrev ignored:', e);
    }
  }, []);

  const safeFlipTo = useCallback((targetPage: number) => {
    try {
      if (pageFlipRef.current) {
        pageFlipRef.current.flip(targetPage, 'bottom');
      }
    } catch (e) {
      console.warn('PageFlip flipTo ignored:', e);
    }
  }, []);

  // Initialize PageFlip instance
  useEffect(() => {
    if (!bookContainerRef.current) return;

    let isMounted = true;

    // Small timeout to guarantee DOM geometry is fully computed
    const initTimer = setTimeout(() => {
      if (!isMounted || !bookContainerRef.current) return;

      if (pageFlipRef.current) {
        try {
          pageFlipRef.current.destroy();
        } catch {
          // ignore
        }
        pageFlipRef.current = null;
      }

      const container = bookContainerRef.current;
      const pageFlip = new PageFlip(container, {
        width: 480,
        height: 620,
        size: 'stretch',
        minWidth: 260,
        maxWidth: 600,
        minHeight: 380,
        maxHeight: 740,
        drawShadow: true,
        maxShadowOpacity: 0.85,
        flippingTime: 1200,
        usePortrait: false, // Grimoire is always a dual-page spread
        startPage: 0,
        showCover: false,
        autoSize: false,
        mobileScrollSupport: false,
        swipeDistance: 30,
        clickEventForward: true,
        useMouseEvents: true,
        showPageCorners: true,
        disableFlipByClick: false,
      });

      const pageElements = container.querySelectorAll<HTMLElement>('.grimoire-page-sheet');
      if (pageElements.length > 0) {
        pageFlip.loadFromHTML(pageElements);
      }

      pageFlip.on('init', () => {
        if (isMounted) {
          setIsBookReady(true);
        }
      });

      pageFlip.on('flip', (e) => {
        const pageIndex = typeof e.data === 'number' ? e.data : parseInt(String(e.data), 10);
        if (pageIndex >= 4) {
          const spreadIdx = Math.min(spreads.length - 1, Math.max(0, Math.floor((pageIndex - 4) / 2)));
          onSpreadChange(spreadIdx);
        }
      });

      pageFlip.on('changeState', (e) => {
        const state = String(e.data);
        if (isMounted) {
          setIsFlipping(state === 'flipping' || state === 'user_fold');
        }
      });

      pageFlipRef.current = pageFlip;
    }, 50);

    return () => {
      isMounted = false;
      clearTimeout(initTimer);
      if (pageFlipRef.current) {
        try {
          pageFlipRef.current.destroy();
        } catch {
          // ignore
        }
        pageFlipRef.current = null;
      }
    };
  }, []);

  // Handle Initial 2-Turn Blank Leaf Sequence
  useEffect(() => {
    if (!isBookReady || !pageFlipRef.current) return;

    if (!isInitialOpening) {
      setOpeningFinished(true);
      try {
        pageFlipRef.current.turnToPage(4);
      } catch {
        // ignore
      }
      return;
    }

    setOpeningFinished(false);

    // Turn 1: 1st blank leaf peels from bottom corner (blank -> blank)
    const timer1 = setTimeout(() => {
      safeFlipNext();
    }, 500);

    // Turn 2: 2nd blank leaf peels from bottom corner, revealing About Me & Skills!
    const timer2 = setTimeout(() => {
      safeFlipNext();
    }, 1900);

    // Opening sequence completed
    const timerDone = setTimeout(() => {
      setOpeningFinished(true);
    }, 3300);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timerDone);
    };
  }, [isBookReady, isInitialOpening, safeFlipNext]);

  // Synchronize target spread when changed externally via SideNavigation
  useEffect(() => {
    if (!pageFlipRef.current || !openingFinished) return;

    try {
      const currentBookPage = pageFlipRef.current.getCurrentPageIndex();
      const targetBookPage = 4 + currentSpread * 2;

      if (currentBookPage !== targetBookPage && currentBookPage !== targetBookPage + 1) {
        safeFlipTo(targetBookPage);
      }
    } catch {
      // ignore
    }
  }, [currentSpread, openingFinished, safeFlipTo]);

  const handleNext = useCallback(() => {
    if (openingFinished && !isFlipping) {
      safeFlipNext();
    }
  }, [openingFinished, isFlipping, safeFlipNext]);

  const handlePrev = useCallback(() => {
    if (openingFinished && !isFlipping) {
      safeFlipPrev();
    }
  }, [openingFinished, isFlipping, safeFlipPrev]);

  return (
    <main className="book-stage" aria-label="Magical Portfolio Grimoire">
      {/* Atmosphere Glows & Multi-tier Ground Shadows */}
      <div className="book-ambient-glow" aria-hidden="true" />
      <div className="book-ground-shadow-wide" aria-hidden="true" />
      <div className="book-ground-shadow-contact" aria-hidden="true" />
      <div className="book-lectern-rest" aria-hidden="true" />

      {/* Main Physical Book Container */}
      <div className="book-container">
        <BookCover />

        {/* Realistic Page-Flip Grimoire Spread */}
        <div className="book-page-spread">
          <div ref={bookContainerRef} className="grimoire-page-flip-container">
            {/* SPREAD 0: Blank Flyleaves (Page 0 & 1) */}
            <div className="grimoire-page-sheet" data-density="soft">
              <BlankParchmentPage side="left" />
            </div>
            <div className="grimoire-page-sheet" data-density="soft">
              <BlankParchmentPage side="right" />
            </div>

            {/* SPREAD 1: 2nd Blank Flyleaves (Page 2 & 3) */}
            <div className="grimoire-page-sheet" data-density="soft">
              <BlankParchmentPage side="left" />
            </div>
            <div className="grimoire-page-sheet" data-density="soft">
              <BlankParchmentPage side="right" />
            </div>

            {/* SPREAD 2: Chapter 01 (Page 01 - About Me & Page 02 - Technical Skills) */}
            <div className="grimoire-page-sheet" data-density="soft">
              <BookPage side="left" pageNumber={1}>
                <AboutPage />
              </BookPage>
            </div>
            <div className="grimoire-page-sheet" data-density="soft">
              <BookPage side="right" pageNumber={2}>
                <SkillsPage />
              </BookPage>
            </div>

            {/* SPREAD 3: Chapter 02 (Page 03 - Projects & Page 04 - Experience) */}
            <div className="grimoire-page-sheet" data-density="soft">
              <BookPage side="left" pageNumber={3}>
                <ProjectsPage />
              </BookPage>
            </div>
            <div className="grimoire-page-sheet" data-density="soft">
              <BookPage side="right" pageNumber={4}>
                <ExperiencePage />
              </BookPage>
            </div>

            {/* SPREAD 4: Chapter 03 (Page 05 - Achievements & Page 06 - Open Source) */}
            <div className="grimoire-page-sheet" data-density="soft">
              <BookPage side="left" pageNumber={5}>
                <AchievementsPage />
              </BookPage>
            </div>
            <div className="grimoire-page-sheet" data-density="soft">
              <BookPage side="right" pageNumber={6}>
                <OpenSourcePage />
              </BookPage>
            </div>

            {/* SPREAD 5: Chapter 04 (Page 07 - Resume & Page 08 - Contact) */}
            <div className="grimoire-page-sheet" data-density="soft">
              <BookPage side="left" pageNumber={7}>
                <ResumePage />
              </BookPage>
            </div>
            <div className="grimoire-page-sheet" data-density="soft">
              <BookPage side="right" pageNumber={8}>
                <ContactPage />
              </BookPage>
            </div>
          </div>

          {/* Deep Center Gutter Spine Structure */}
          <div className="book-center-spine" aria-hidden="true">
            <div className="spine-crease-shadow" />
            <div className="spine-highlight-ridge" />
            <div className="spine-stitch stitch-1" />
            <div className="spine-stitch stitch-2" />
            <div className="spine-stitch stitch-3" />
            <div className="spine-stitch stitch-4" />
          </div>
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

      {/* Bottom Right Page Turn Controls */}
      {openingFinished && (
        <PageTurnControls
          currentSpread={currentSpread}
          totalSpreads={spreads.length}
          isTurning={isFlipping}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </main>
  );
};
