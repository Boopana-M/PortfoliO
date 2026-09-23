import React from 'react';
import { Briefcase, Calendar, Sparkles, Compass } from 'lucide-react';
import { portfolio } from '../data/portfolio';

interface ExperiencePageProps {
  onOpenDetailed?: () => void;
}

export const ExperiencePage: React.FC<ExperiencePageProps> = ({ onOpenDetailed }) => {
  const { experience } = portfolio;

  return (
    <div className="page-content-wrapper experience-manuscript-page">
      <h2 className="page-title">{experience.title}</h2>
      <div className="manuscript-divider">✦ ✤ ✦</div>

      <div className="experience-timeline-container experience-compact-list">
        {experience.items.map((item) => (
          <article key={item.id} className="experience-entry-card experience-minimal-card">
            <div className="exp-card-header">
              <div className="exp-role-org">
                <h3 className="exp-role-heading">
                  <Briefcase size={13} className="exp-briefcase-icon" />
                  <span>{item.role}</span>
                </h3>
                <span className="exp-org-name">{item.organization}</span>
              </div>

              <div className="exp-period-badge">
                <Calendar size={11} />
                <span>{item.period}</span>
              </div>
            </div>

            <p className="exp-minimal-summary">
              {item.summary || item.description[0]}
            </p>

            <div className="exp-skills-tags">
              {item.skills.slice(0, 4).map((skill, sIdx) => (
                <span key={sIdx} className="exp-skill-tag">
                  {skill}
                </span>
              ))}
              {item.skills.length > 4 && (
                <span className="exp-skill-tag exp-skill-more">
                  +{item.skills.length - 4}
                </span>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* View in Detail Button */}
      <div className="experience-actions-footer">
        <button 
          type="button" 
          className="exp-view-detailed-btn"
          onClick={(e) => {
            e.stopPropagation();
            onOpenDetailed?.();
          }}
          aria-label="View experience chronicle in detail"
        >
          <Sparkles size={14} className="btn-sparkle-sigil" />
          <span className="btn-text">View in Detail ✧</span>
          <Compass size={14} className="btn-compass-sigil" />
        </button>
      </div>
    </div>
  );
};
