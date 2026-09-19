import React, { useState, useEffect, useCallback } from 'react';
import { PortfolioBook } from './components/Book/PortfolioBook';
import { SideNavigation } from './components/Navigation/SideNavigation';
import { Candlelight } from './components/Effects/Candlelight';
import { MagicalParticles } from './components/Effects/MagicalParticles';
import { ArcaneCircles } from './components/Effects/ArcaneCircles';
import { spreads } from './data/navigation';
import './styles/global.css';
import './styles/responsive.css';

export const App: React.FC = () => {
  const [isBookOpen, setIsBookOpen] = useState<boolean>(false);
  const [isOpening, setIsOpening] = useState<boolean>(false);
  const [currentSpread, setCurrentSpread] = useState<number>(0);
  const [isTurning, setIsTurning] = useState<boolean>(false);
  const [turnDirection, setTurnDirection] = useState<'next' | 'prev' | null>(null);

  const handleOpenBook = useCallback(() => {
    if (isOpening || isBookOpen) return;
    setIsOpening(true);

    // Realistic physical 3D book-opening transition
    setTimeout(() => {
      setIsBookOpen(true);
      setIsOpening(false);
    }, 1300);
  }, [isOpening, isBookOpen]);

  const handleCloseBook = useCallback(() => {
    setIsBookOpen(false);
    setIsOpening(false);
    setCurrentSpread(0);
  }, []);

  const handleNextSpread = useCallback(() => {
    if (isTurning || currentSpread >= spreads.length - 1) return;
    setTurnDirection('next');
    setIsTurning(true);

    setTimeout(() => {
      setCurrentSpread((prev) => prev + 1);
    }, 600);

    setTimeout(() => {
      setIsTurning(false);
      setTurnDirection(null);
    }, 1250);
  }, [isTurning, currentSpread]);

  const handlePrevSpread = useCallback(() => {
    if (isTurning || currentSpread <= 0) return;
    setTurnDirection('prev');
    setIsTurning(true);

    setTimeout(() => {
      setCurrentSpread((prev) => prev - 1);
    }, 600);

    setTimeout(() => {
      setIsTurning(false);
      setTurnDirection(null);
    }, 1250);
  }, [isTurning, currentSpread]);

  const handleSelectSpread = useCallback((spreadIndex: number) => {
    if (isTurning || spreadIndex === currentSpread) return;
    const direction = spreadIndex > currentSpread ? 'next' : 'prev';
    setTurnDirection(direction);
    setIsTurning(true);

    setTimeout(() => {
      setCurrentSpread(spreadIndex);
    }, 600);

    setTimeout(() => {
      setIsTurning(false);
      setTurnDirection(null);
    }, 1250);
  }, [isTurning, currentSpread]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isBookOpen) {
        if (e.key === 'Enter' || e.key === ' ') {
          handleOpenBook();
        }
        return;
      }

      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        handleNextSpread();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        handlePrevSpread();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isBookOpen, handleOpenBook, handleNextSpread, handlePrevSpread]);

  return (
    <div className="study-environment">
      {/* Background Vignette & Ambient Table illumination */}
      <div className="study-vignette" aria-hidden="true" />
      <div className="study-table-plinth" aria-hidden="true" />

      {/* Atmospheric Effects & Arcane Glowing Rings (2 Blue Circles) */}
      <Candlelight />
      <MagicalParticles />
      <ArcaneCircles />

      {/* Side Navigation (visible when book is open) */}
      {isBookOpen && (
        <SideNavigation
          currentSpread={currentSpread}
          onSelectSpread={handleSelectSpread}
          onCloseBook={handleCloseBook}
        />
      )}

      {/* Hero Physical Book with 3D Opening Animation */}
      <PortfolioBook
        isOpen={isBookOpen}
        isOpening={isOpening}
        onOpenBook={handleOpenBook}
        currentSpread={currentSpread}
        isTurning={isTurning}
        turnDirection={turnDirection}
        onNextSpread={handleNextSpread}
        onPrevSpread={handlePrevSpread}
      />
    </div>
  );
};

export default App;

