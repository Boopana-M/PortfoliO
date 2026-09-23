import React, { useState, useEffect, useCallback } from 'react';
import { PortfolioBook } from './components/Book/PortfolioBook';
import { LandingScreen } from './components/Landing/LandingScreen';
import { SideNavigation } from './components/Navigation/SideNavigation';
import { Candlelight } from './components/Effects/Candlelight';
import { MagicalParticles } from './components/Effects/MagicalParticles';
import { ArcaneCircles } from './components/Effects/ArcaneCircles';
import { MagicTransition } from './components/Effects/MagicTransition';
import './styles/global.css';
import './styles/responsive.css';

export const App: React.FC = () => {
  const [flowState, setFlowState] = useState<'closed' | 'magic-transition' | 'open'>('closed');
  const [currentSpread, setCurrentSpread] = useState<number>(0);

  // Step 1 -> Step 2: User clicks Open Portfolio -> show Black Screen with Magic Visuals
  const handleOpenBook = useCallback(() => {
    if (flowState !== 'closed') return;
    setFlowState('magic-transition');
  }, [flowState]);

  // Step 2 -> Step 3: Magic Visuals complete -> mount Inside Motion UI & start 2 blank leaves
  const handleMagicComplete = useCallback(() => {
    setFlowState('open');
    setCurrentSpread(0);
  }, []);

  const handleCloseBook = useCallback(() => {
    setFlowState('closed');
    setCurrentSpread(0);
  }, []);

  const handleSpreadChange = useCallback((spreadIndex: number) => {
    setCurrentSpread(spreadIndex);
  }, []);

  const handleSelectSpread = useCallback((spreadIndex: number) => {
    setCurrentSpread(spreadIndex);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (flowState === 'closed') {
        if (e.key === 'Enter' || e.key === ' ') {
          handleOpenBook();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [flowState, handleOpenBook]);

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
            onSpreadChange={handleSpreadChange}
            isInitialOpening={true}
          />
        </>
      )}
    </div>
  );
};

export default App;
