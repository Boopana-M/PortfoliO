import React, { useState, useEffect, useCallback } from 'react';
import { PortfolioBook } from './components/Book/PortfolioBook';
import { LandingScreen } from './components/Landing/LandingScreen';
import { SideNavigation } from './components/Navigation/SideNavigation';
import { Candlelight } from './components/Effects/Candlelight';
import { MagicalParticles } from './components/Effects/MagicalParticles';
import { ArcaneCircles } from './components/Effects/ArcaneCircles';
import { MagicTransition } from './components/Effects/MagicTransition';
import { spreads } from './data/navigation';
import './styles/global.css';
import './styles/responsive.css';

export const App: React.FC = () => {
  const [flowState, setFlowState] = useState<'closed' | 'magic-transition' | 'open'>('closed');
  const [currentSpread, setCurrentSpread] = useState<number>(0);
  const [targetSpread, setTargetSpread] = useState<number>(0);
  const [isTurning, setIsTurning] = useState<boolean>(false);
  const [turnDirection, setTurnDirection] = useState<'next' | 'prev' | null>(null);

  // Step 1 -> Step 2: User clicks Open Portfolio -> show Black Screen with Magic Visuals
  const handleOpenBook = useCallback(() => {
    if (flowState !== 'closed') return;
    setFlowState('magic-transition');
  }, [flowState]);

  // Step 2 -> Step 3: Magic Visuals complete -> mount Inside Motion UI & start 2 blank leaves
  const handleMagicComplete = useCallback(() => {
    setFlowState('open');
    setCurrentSpread(0);
    setTargetSpread(0);
  }, []);

  const handleCloseBook = useCallback(() => {
    setFlowState('closed');
    setCurrentSpread(0);
    setTargetSpread(0);
  }, []);

  const handleNextSpread = useCallback(() => {
    if (isTurning || currentSpread >= spreads.length - 1) return;
    const nextIndex = currentSpread + 1;
    setTargetSpread(nextIndex);
    setTurnDirection('next');
    setIsTurning(true);

    setTimeout(() => {
      setCurrentSpread(nextIndex);
      setIsTurning(false);
      setTurnDirection(null);
    }, 1350);
  }, [isTurning, currentSpread]);

  const handlePrevSpread = useCallback(() => {
    if (isTurning || currentSpread <= 0) return;
    const prevIndex = currentSpread - 1;
    setTargetSpread(prevIndex);
    setTurnDirection('prev');
    setIsTurning(true);

    setTimeout(() => {
      setCurrentSpread(prevIndex);
      setIsTurning(false);
      setTurnDirection(null);
    }, 1350);
  }, [isTurning, currentSpread]);

  const handleSelectSpread = useCallback((spreadIndex: number) => {
    if (isTurning || spreadIndex === currentSpread) return;
    const direction = spreadIndex > currentSpread ? 'next' : 'prev';
    setTargetSpread(spreadIndex);
    setTurnDirection(direction);
    setIsTurning(true);

    setTimeout(() => {
      setCurrentSpread(spreadIndex);
      setIsTurning(false);
      setTurnDirection(null);
    }, 1350);
  }, [isTurning, currentSpread]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (flowState === 'closed') {
        if (e.key === 'Enter' || e.key === ' ') {
          handleOpenBook();
        }
        return;
      }

      if (flowState === 'open') {
        if (e.key === 'ArrowRight' || e.key === 'PageDown') {
          handleNextSpread();
        } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
          handlePrevSpread();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [flowState, handleOpenBook, handleNextSpread, handlePrevSpread]);

  return (
    <div className="study-environment">
      {/* 1. Closed Front View: Exact Reference Grimoire Scene */}
      {flowState === 'closed' && (
        <LandingScreen onOpen={handleOpenBook} />
      )}

      {/* 2. Arcane Black Screen with Magical Visuals Transition */}
      {flowState === 'magic-transition' && (
        <MagicTransition onComplete={handleMagicComplete} />
      )}

      {/* 3. Inside Portfolio Motion UI: Ambient candlelight, particles, arcane rings & 2 blank pages leafing */}
      {flowState === 'open' && (
        <>
          {/* Background Vignette & Ambient Table illumination */}
          <div className="study-vignette" aria-hidden="true" />
          <div className="study-table-plinth" aria-hidden="true" />

          {/* Atmospheric Motion UI Effects */}
          <Candlelight />
          <MagicalParticles />
          <ArcaneCircles />

          {/* Side Navigation */}
          <SideNavigation
            currentSpread={currentSpread}
            onSelectSpread={handleSelectSpread}
            onCloseBook={handleCloseBook}
          />

          {/* Grimoire with Initial 2 Blank Leaf Sequence -> Reveal About Me & Skills */}
          <PortfolioBook
            currentSpread={currentSpread}
            targetSpread={targetSpread}
            isTurning={isTurning}
            turnDirection={turnDirection}
            onNextSpread={handleNextSpread}
            onPrevSpread={handlePrevSpread}
            isInitialOpening={true}
          />
        </>
      )}
    </div>
  );
};

export default App;
