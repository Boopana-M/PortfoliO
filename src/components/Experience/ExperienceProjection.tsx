import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X, Sparkles, Briefcase, Calendar, MapPin, CheckCircle2, Award, Zap } from 'lucide-react';
import { portfolio } from '../../data/portfolio';
import type { ExperienceItem } from '../../data/portfolio';
import './experience-projection.css';

interface ExperienceProjectionProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExperienceProjection: React.FC<ExperienceProjectionProps> = ({
  isOpen,
  onClose,
}) => {
  const { experience } = portfolio;
  const items = experience.items;
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [slideDirection, setSlideDirection] = useState<'next' | 'prev'>('next');

  const handlePrev = useCallback(() => {
    if (activeIndex > 0) {
      setSlideDirection('prev');
      setActiveIndex((prev) => prev - 1);
    }
  }, [activeIndex]);

  const handleNext = useCallback(() => {
    if (activeIndex < items.length - 1) {
      setSlideDirection('next');
      setActiveIndex((prev) => prev + 1);
    }
  }, [activeIndex, items.length]);

  // Keyboard controls: ArrowLeft, ArrowRight, Escape
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handlePrev, handleNext, onClose]);

  if (!isOpen) return null;

  const currentItem: ExperienceItem = items[activeIndex];

  return (
    <div className="ethereal-projection-portal" role="dialog" aria-modal="true" aria-label="Detailed Experience Projection">
      {/* Dark Ethereal Atmosphere Backdrop */}
      <div className="ethereal-backdrop" onClick={onClose} aria-hidden="true" />

      {/* Magical Core Light & Rising Smoke Eruption from Sleeping Book Spine */}
      <div className="sleeping-book-eruption" aria-hidden="true">
        {/* Core incandescent golden light beam from book valley */}
        <div className="eruption-core-beam" />
        <div className="eruption-core-flare" />
        <div className="eruption-light-conduit" />

        {/* Ethereal Golden Smoke Plumes (multi-layered swirling wisps) */}
        <div className="smoke-plume smoke-plume-1" />
        <div className="smoke-plume smoke-plume-2" />
        <div className="smoke-plume smoke-plume-3" />
        <div className="smoke-plume smoke-plume-4" />
        <div className="smoke-plume smoke-plume-5" />

        {/* Floating Sparkles & Light Orbs rising in air */}
        <div className="ethereal-embers-container">
          {[...Array(16)].map((_, i) => (
            <span key={i} className={`ethereal-ember ember-${(i % 5) + 1}`} />
          ))}
        </div>

        {/* Rotating Arcane Seal on projection floor */}
        <div className="eruption-arcane-ring" />
      </div>

      {/* Floating Header Actions in Air */}
      <header className="floating-air-header">
        <div className="floating-chronicle-badge">
          <Sparkles size={14} className="badge-sparkle" />
          <span>PROFESSIONAL EXPERIENCE — {activeIndex + 1} OF {items.length}</span>
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
          aria-label="Previous Experience"
          title="Previous Experience (Arrow Left)"
        >
          <ChevronLeft size={30} />
          <span className="air-btn-aura" />
        </button>

        <button
          type="button"
          className={`floating-air-arrow-btn air-arrow-next ${activeIndex === items.length - 1 ? 'disabled' : ''}`}
          onClick={handleNext}
          disabled={activeIndex === items.length - 1}
          aria-label="Next Experience"
          title="Next Experience (Arrow Right)"
        >
          <ChevronRight size={30} />
          <span className="air-btn-aura" />
        </button>
      </div>

      {/* Floating Experience Stage in the Air */}
      <div className="floating-card-stage">
        <div 
          key={currentItem.id} 
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
              <div className="card-icon-seal">
                <Briefcase size={22} />
              </div>
              <div className="card-title-group">
                <h2 className="card-role-heading">{currentItem.role}</h2>
                <div className="card-org-row">
                  <span className="card-org-name">{currentItem.organization}</span>
                  {currentItem.organizationType && (
                    <>
                      <span className="card-meta-dot">•</span>
                      <span className="card-org-type">{currentItem.organizationType}</span>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="card-meta-badges">
              <div className="card-meta-pill period-pill">
                <Calendar size={13} />
                <span>{currentItem.period}</span>
              </div>
              {currentItem.location && (
                <div className="card-meta-pill location-pill">
                  <MapPin size={13} />
                  <span>{currentItem.location}</span>
                </div>
              )}
              <div className="card-meta-pill type-pill">
                <Zap size={13} />
                <span>{currentItem.type}</span>
              </div>
            </div>
          </div>

          {/* Summary Quote Cartouche */}
          {currentItem.summary && (
            <div className="card-summary-cartouche">
              <p className="card-summary-text">
                “{currentItem.summary}”
              </p>
            </div>
          )}

          {/* Detailed Contributions / Highlights */}
          <div className="card-details-section">
            <h3 className="section-micro-heading">
              <span className="heading-sigil">❖</span>
              <span>Key Responsibilities &amp; Engineering Contributions</span>
            </h3>

            <ul className="card-detailed-bullet-list">
              {(currentItem.detailedHighlights || currentItem.description).map((bullet, bIdx) => (
                <li key={bIdx} className="card-detailed-bullet">
                  <span className="bullet-sigil">✦</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quantifiable Impact & Achievements */}
          {currentItem.achievements && currentItem.achievements.length > 0 && (
            <div className="card-achievements-section">
              <h3 className="section-micro-heading">
                <Award size={14} className="heading-icon-gold" />
                <span>Key Milestones &amp; Impact</span>
              </h3>

              <div className="card-achievements-grid">
                {currentItem.achievements.map((ach, aIdx) => (
                  <div key={aIdx} className="card-achievement-item">
                    <CheckCircle2 size={14} className="ach-check-sigil" />
                    <span>{ach}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies & Tools Tags */}
          <div className="card-technologies-footer">
            <h4 className="tech-label-heading">Core Technologies &amp; Tools:</h4>
            <div className="card-tech-pills-row">
              {currentItem.skills.map((skill, sIdx) => (
                <span key={sIdx} className="card-tech-capsule">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Floating Step Indicator */}
      <footer className="floating-air-footer">
        <div className="floating-pagination-gems">
          {items.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              className={`pagination-gem-btn ${idx === activeIndex ? 'active' : ''}`}
              onClick={() => {
                setSlideDirection(idx > activeIndex ? 'next' : 'prev');
                setActiveIndex(idx);
              }}
              aria-label={`Jump to ${item.role}`}
            >
              <span className="gem-icon">{idx === activeIndex ? '✦' : '✧'}</span>
              <span className="gem-label">{item.organization}</span>
            </button>
          ))}
        </div>
      </footer>
    </div>
  );
};
