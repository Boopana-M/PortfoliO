import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X, Sparkles, GitPullRequest, ExternalLink, GitMerge } from 'lucide-react';
import { portfolio } from '../../data/portfolio';
import type { OpenSourcePR } from '../../data/portfolio';
import '../Projects/projects-projection.css';

interface OpenSourceProjectionProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OpenSourceProjection: React.FC<OpenSourceProjectionProps> = ({
  isOpen,
  onClose,
}) => {
  const { openSource } = portfolio;
  const prs = openSource.mergedPRs;
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [slideDirection, setSlideDirection] = useState<'next' | 'prev'>('next');

  const handlePrev = useCallback(() => {
    if (activeIndex > 0) {
      setSlideDirection('prev');
      setActiveIndex((prev) => prev - 1);
    }
  }, [activeIndex]);

  const handleNext = useCallback(() => {
    if (activeIndex < prs.length - 1) {
      setSlideDirection('next');
      setActiveIndex((prev) => prev + 1);
    }
  }, [activeIndex, prs.length]);

  // Keyboard controls: ArrowLeft, ArrowRight, Escape
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        e.stopPropagation();
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        e.stopPropagation();
        handleNext();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        e.stopPropagation();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown, true);
    return () => window.removeEventListener('keydown', handleKeyDown, true);
  }, [isOpen, handlePrev, handleNext, onClose]);

  if (!isOpen) return null;

  const currentPR: OpenSourcePR = prs[activeIndex];

  return (
    <div className="ethereal-projection-portal" role="dialog" aria-modal="true" aria-label="Detailed Open Source Contributions Showcase">
      {/* Dark Ethereal Atmosphere Backdrop */}
      <div className="ethereal-backdrop" onClick={onClose} aria-hidden="true" />

      {/* Magical Core Light & Rising Smoke Eruption from Sleeping Book Spine */}
      <div className="sleeping-book-eruption" aria-hidden="true">
        <div className="eruption-core-beam" />
        <div className="eruption-core-flare" />
        <div className="eruption-light-conduit" />

        {/* Ethereal Golden Smoke Plumes */}
        <div className="smoke-plume smoke-plume-1" />
        <div className="smoke-plume smoke-plume-2" />
        <div className="smoke-plume smoke-plume-3" />
        <div className="smoke-plume smoke-plume-4" />
        <div className="smoke-plume smoke-plume-5" />

        {/* Floating Sparkles & Light Orbs */}
        <div className="ethereal-embers-container">
          {[...Array(16)].map((_, i) => (
            <span key={i} className={`ethereal-ember ember-${(i % 5) + 1}`} />
          ))}
        </div>

        {/* Rotating Arcane Seal */}
        <div className="eruption-arcane-ring" />
      </div>

      {/* Floating Header Actions in Air */}
      <header className="floating-air-header">
        <div className="floating-chronicle-badge">
          <Sparkles size={14} className="badge-sparkle" />
          <span>OPEN SOURCE CONTRIBUTIONS — {activeIndex + 1} OF {prs.length}</span>
        </div>

        <button 
          type="button" 
          className="floating-close-grimoire-btn"
          onClick={onClose}
          aria-label="Close detailed view and return to portfolio overview"
          title="Close Detailed View (Esc)"
        >
          <X size={15} />
          <span>Close Detailed View</span>
        </button>
      </header>

      {/* Floating Air Navigation Buttons (< and >) */}
      <div className="floating-air-nav-controls">
        <button
          type="button"
          className={`floating-air-arrow-btn air-arrow-prev ${activeIndex === 0 ? 'disabled' : ''}`}
          onClick={handlePrev}
          disabled={activeIndex === 0}
          aria-label="Previous Pull Request"
          title="Previous Pull Request (Arrow Left)"
        >
          <ChevronLeft size={30} />
          <span className="air-btn-aura" />
        </button>

        <button
          type="button"
          className={`floating-air-arrow-btn air-arrow-next ${activeIndex === prs.length - 1 ? 'disabled' : ''}`}
          onClick={handleNext}
          disabled={activeIndex === prs.length - 1}
          aria-label="Next Pull Request"
          title="Next Pull Request (Arrow Right)"
        >
          <ChevronRight size={30} />
          <span className="air-btn-aura" />
        </button>
      </div>

      {/* Floating Project Stage in the Air */}
      <div className="floating-card-stage">
        <div 
          key={currentPR.id} 
          className={`floating-experience-card slide-${slideDirection}`}
        >
          {/* Card Parchment Border Filigree */}
          <div className="card-filigree-frame" aria-hidden="true">
            <span className="card-corner cc-tl">✤</span>
            <span className="card-corner cc-tr">✤</span>
            <span className="card-corner cc-bl">✤</span>
            <span className="card-corner cc-br">✤</span>
            <div className="card-inner-dash-border" />
          </div>

          {/* Card Top Title Block */}
          <div className="card-projection-header">
            <div className="card-role-title-row">
              <div className="card-icon-seal project-icon-seal">
                <GitPullRequest size={22} />
              </div>
              <div className="card-title-group">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span className="project-category-badge badge-individual" style={{ fontSize: '0.65rem', padding: '2px 7px' }}>
                    {currentPR.prNumber}
                  </span>
                  <span className="card-org-name" style={{ color: '#7a5a2d' }}>Learning Unlimited — ESP-Website</span>
                </div>
                <h2 className="card-role-heading" style={{ marginTop: '2px' }}>{currentPR.title}</h2>
              </div>
            </div>

            <div className="card-meta-badges">
              <div className="card-meta-pill type-pill" style={{ background: 'rgba(56, 142, 60, 0.15)', borderColor: 'rgba(56, 142, 60, 0.4)', color: '#2e7d32' }}>
                <GitMerge size={13} />
                <span>Merged &amp; Maintainer Approved</span>
              </div>
            </div>
          </div>

          {/* Description Overview Cartouche */}
          <div className="card-summary-cartouche">
            <p className="card-summary-text">
              “{currentPR.description}”
            </p>
          </div>

          {/* Key Contributions Section */}
          <div className="card-details-section">
            <h3 className="section-micro-heading">
              <span className="heading-sigil">❖</span>
              <span>Key Architectural &amp; Engineering Contributions</span>
            </h3>

            <ul className="card-detailed-bullet-list">
              {currentPR.keyContributions.map((contribution, cIdx) => (
                <li key={cIdx} className="card-detailed-bullet">
                  <span className="bullet-sigil">✦</span>
                  <span>{contribution}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology Tags & Direct PR Link Action */}
          <div className="card-technologies-footer project-tech-actions-footer">
            <div className="project-tech-group">
              <h4 className="tech-label-heading">Domain &amp; Stack Categories:</h4>
              <div className="card-tech-pills-row">
                {currentPR.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="card-tech-capsule">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="project-projection-actions">
              <a
                href={currentPR.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-projection-btn btn-live-demo"
                aria-label={`View Pull Request on GitHub: ${currentPR.title}`}
              >
                <GitPullRequest size={14} />
                <span>View Pull Request →</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Floating Step Indicator */}
      <footer className="floating-air-footer">
        <div className="floating-pagination-gems">
          {prs.map((pr, idx) => (
            <button
              key={pr.id}
              type="button"
              className={`pagination-gem-btn ${idx === activeIndex ? 'active' : ''}`}
              onClick={() => {
                setSlideDirection(idx > activeIndex ? 'next' : 'prev');
                setActiveIndex(idx);
              }}
              aria-label={`Jump to ${pr.prNumber}`}
            >
              <span className="gem-icon">{idx === activeIndex ? '✦' : '✧'}</span>
              <span className="gem-label">{pr.prNumber}</span>
            </button>
          ))}
        </div>
      </footer>
    </div>
  );
};
