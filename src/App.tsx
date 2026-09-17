import React, { useState } from 'react';
import { PortfolioBook } from './components/Book/PortfolioBook';
import { SideNavigation } from './components/Navigation/SideNavigation';
import { Candlelight } from './components/Effects/Candlelight';
import { MagicalParticles } from './components/Effects/MagicalParticles';
import { spreads } from './data/navigation';
import './styles/global.css';
import './styles/responsive.css';

export const App: React.FC = () => {
  const [currentSpread, setCurrentSpread] = useState<number>(0);
  const [isTurning, setIsTurning] = useState<boolean>(false);

  const handleNextSpread = () => {
    if (isTurning || currentSpread >= spreads.length - 1) return;
    setIsTurning(true);
    setCurrentSpread((prev) => prev + 1);
    setIsTurning(false);
  };

  const handlePrevSpread = () => {
    if (isTurning || currentSpread <= 0) return;
    setIsTurning(true);
    setCurrentSpread((prev) => prev - 1);
    setIsTurning(false);
  };

  const handleSelectSpread = (spreadIndex: number) => {
    if (isTurning || spreadIndex === currentSpread) return;
    setCurrentSpread(spreadIndex);
  };

  return (
    <div className="study-environment">
      {/* Background Vignette & Ambient Table illumination */}
      <div className="study-vignette" aria-hidden="true" />
      <div className="study-table-plinth" aria-hidden="true" />

      {/* Atmospheric Effects */}
      <Candlelight />
      <MagicalParticles />

      {/* Side Navigation (matching reference) */}
      <SideNavigation
        currentSpread={currentSpread}
        onSelectSpread={handleSelectSpread}
      />

      {/* Hero Physical Book */}
      <PortfolioBook
        currentSpread={currentSpread}
        isTurning={isTurning}
        onNextSpread={handleNextSpread}
        onPrevSpread={handlePrevSpread}
      />
    </div>
  );
};

export default App;
