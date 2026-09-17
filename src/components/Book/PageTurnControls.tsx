import React from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

interface PageTurnControlsProps {
  currentSpread: number;
  totalSpreads: number;
  isTurning: boolean;
  onNext: () => void;
  onPrev: () => void;
}

export const PageTurnControls: React.FC<PageTurnControlsProps> = ({
  currentSpread,
  totalSpreads,
  isTurning,
  onNext,
  onPrev,
}) => {
  const canGoNext = currentSpread < totalSpreads - 1;
  const canGoPrev = currentSpread > 0;

  return (
    <div className="book-bottom-controls" role="toolbar" aria-label="Book page navigation">
      {canGoPrev && (
        <button
          type="button"
          className="page-turn-btn"
          onClick={onPrev}
          disabled={isTurning || !canGoPrev}
          aria-label="Turn to previous page"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          <span>Prev Page</span>
        </button>
      )}

      <button
        type="button"
        className="page-turn-btn"
        onClick={onNext}
        disabled={isTurning || !canGoNext}
        aria-label="Turn to next page"
      >
        <span>Next Page</span>
        <ArrowRight size={16} aria-hidden="true" />
      </button>
    </div>
  );
};
