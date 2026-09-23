import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { portfolio } from '../data/portfolio';

export const ExperiencePage: React.FC = () => {
  const { experience } = portfolio;

  return (
    <div className="page-content-wrapper experience-manuscript-page">
      <h2 className="page-title">{experience.title}</h2>
      <div className="manuscript-divider">✦ ✤ ✦</div>

      <div className="experience-timeline-container">
        {experience.items.map((item) => (
          <article key={item.id} className="experience-entry-card">
            <div className="exp-card-header">
              <div className="exp-role-org">
                <h3 className="exp-role-heading">
                  <Briefcase size={14} className="exp-briefcase-icon" />
                  <span>{item.role}</span>
                </h3>
                <span className="exp-org-name">{item.organization}</span>
              </div>

              <div className="exp-period-badge">
                <Calendar size={12} />
                <span>{item.period}</span>
              </div>
            </div>

            <ul className="exp-description-list">
              {item.description.map((desc, dIdx) => (
                <li key={dIdx} className="exp-desc-bullet">
                  <span className="bullet-sigil">✦</span>
                  <span>{desc}</span>
                </li>
              ))}
            </ul>

            <div className="exp-skills-tags">
              {item.skills.map((skill, sIdx) => (
                <span key={sIdx} className="exp-skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
