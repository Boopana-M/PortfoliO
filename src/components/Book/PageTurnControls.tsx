import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Share2, Check } from 'lucide-react';

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
  const [copied, setCopied] = useState(false);
  const canGoNext = currentSpread < totalSpreads - 1;
  const canGoPrev = currentSpread > 0;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Boopana M — Developer Portfolio",
          text: "Check out Boopana's developer portfolio!",
          url: window.location.href,
        });
        return;
      } catch {
        // Fallback to clipboard
      }
    }

    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // ignore
    }
  };

  return (
    <div className="book-bottom-controls" role="toolbar" aria-label="Book page navigation">
      {canGoPrev && (
        <button
          type="button"
          className="cartouche-nav-btn prev-cartouche-btn"
          onClick={onPrev}
          disabled={isTurning || !canGoPrev}
          aria-label="Turn to previous page"
        >
          <ArrowLeft size={15} aria-hidden="true" />
          <span>PREV PAGE</span>
        </button>
      )}

      <button
        type="button"
        className="cartouche-nav-btn next-cartouche-btn"
        onClick={onNext}
        disabled={isTurning || !canGoNext}
        aria-label="Turn to next page"
      >
        <span>NEXT PAGE</span>
        <ArrowRight size={15} aria-hidden="true" />
      </button>

      <button
        type="button"
        className="antique-share-circle-btn"
        onClick={handleShare}
        aria-label="Share Portfolio Link"
        title={copied ? "Link copied to clipboard!" : "Share Portfolio"}
      >
        {copied ? <Check size={18} className="share-copied-icon" /> : <Share2 size={18} />}
      </button>

      {copied && (
        <div className="share-toast-bubble" role="status">
          ✦ Portfolio URL copied to clipboard! ✦
        </div>
      )}
    </div>
  );
};

