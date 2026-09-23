import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X, Sparkles, Folder, ExternalLink, CheckCircle2, Award, Cpu } from 'lucide-react';
import { GithubIcon } from '../common/BrandIcons';
import { portfolio } from '../../data/portfolio';
import type { ProjectItem } from '../../data/portfolio';
import './projects-projection.css';

interface ProjectsProjectionProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectsProjection: React.FC<ProjectsProjectionProps> = ({
  isOpen,
  onClose,
}) => {
  const { projects } = portfolio;
  const items = projects.items;
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

  const currentItem: ProjectItem = items[activeIndex];

  return (
    <div className="ethereal-projection-portal" role="dialog" aria-modal="true" aria-label="Detailed Projects Showcase">
      {/* Dark Ethereal Atmosphere Backdrop */}
      <div className="ethereal-backdrop" onClick={onClose} aria-hidden="true" />

      {/* Magical Core Light & Rising Smoke Eruption from Sleeping Book Spine */}
      <div className="sleeping-book-eruption" aria-hidden="true">
        {/* Core incandescent golden light beam from book valley */}
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
          <span>PROJECTS SHOWCASE — {activeIndex + 1} OF {items.length}</span>
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
          aria-label="Previous Project"
          title="Previous Project (Arrow Left)"
        >
          <ChevronLeft size={30} />
          <span className="air-btn-aura" />
        </button>

        <button
          type="button"
          className={`floating-air-arrow-btn air-arrow-next ${activeIndex === items.length - 1 ? 'disabled' : ''}`}
          onClick={handleNext}
          disabled={activeIndex === items.length - 1}
          aria-label="Next Project"
          title="Next Project (Arrow Right)"
        >
          <ChevronRight size={30} />
          <span className="air-btn-aura" />
        </button>
      </div>

      {/* Floating Project Stage in the Air */}
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
              <div className="card-icon-seal project-icon-seal">
                <Folder size={22} />
              </div>
              <div className="card-title-group">
                <h2 className="card-role-heading">{currentItem.title}</h2>
                <div className="card-org-row">
                  <span className="card-org-name">{currentItem.subtitle}</span>
                </div>
              </div>
            </div>

            <div className="card-meta-badges">
              <div className={`card-meta-pill ${currentItem.category === 'individual' ? 'type-pill' : 'location-pill'}`}>
                <Cpu size={13} />
                <span>{currentItem.category === 'individual' ? 'Solo Architecture' : 'Collaborative System'}</span>
              </div>
            </div>
          </div>

          {/* Architecture Highlights Cartouche */}
          {(currentItem.architectureHighlights || currentItem.description) && (
            <div className="card-summary-cartouche">
              <p className="card-summary-text">
                “{currentItem.architectureHighlights || currentItem.description}”
              </p>
            </div>
          )}

          {/* Detailed Contributions / Features */}
          <div className="card-details-section">
            <h3 className="section-micro-heading">
              <span className="heading-sigil">❖</span>
              <span>Key Features &amp; Engineering Innovations</span>
            </h3>

            <ul className="card-detailed-bullet-list">
              {(currentItem.detailedHighlights || [currentItem.description]).map((bullet, bIdx) => (
                <li key={bIdx} className="card-detailed-bullet">
                  <span className="bullet-sigil">✦</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Milestones & Impact */}
          {currentItem.achievements && currentItem.achievements.length > 0 && (
            <div className="card-achievements-section">
              <h3 className="section-micro-heading">
                <Award size={14} className="heading-icon-gold" />
                <span>Performance &amp; Technical Milestones</span>
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

          {/* Technologies Capsules & Action Buttons */}
          <div className="card-technologies-footer project-tech-actions-footer">
            <div className="project-tech-group">
              <h4 className="tech-label-heading">Core Technologies &amp; Tools:</h4>
              <div className="card-tech-pills-row">
                {currentItem.technologies.map((tech, tIdx) => (
                  <span key={tIdx} className="card-tech-capsule">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="project-projection-actions">
              {currentItem.live && (
                <a
                  href={currentItem.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-projection-btn btn-live-demo"
                  aria-label={`View Live Demo of ${currentItem.title}`}
                >
                  <Sparkles size={14} />
                  <span>Live Demo</span>
                  <ExternalLink size={12} />
                </a>
              )}

              {currentItem.github && (
                <a
                  href={currentItem.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-projection-btn btn-view-github"
                  aria-label={`View GitHub repository of ${currentItem.title}`}
                >
                  <GithubIcon size={14} />
                  <span>GitHub Repository</span>
                </a>
              )}
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
              aria-label={`Jump to ${item.title}`}
            >
              <span className="gem-icon">{idx === activeIndex ? '✦' : '✧'}</span>
              <span className="gem-label">{item.title}</span>
            </button>
          ))}
        </div>
      </footer>
    </div>
  );
};
