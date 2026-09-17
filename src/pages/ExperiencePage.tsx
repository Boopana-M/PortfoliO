import React from 'react';
import { portfolio } from '../data/portfolio';

export const ExperiencePage: React.FC = () => {
  const { experience } = portfolio;

  return (
    <div className="page-content-wrapper">
      <div className="page-header-number">— {experience.chapterNumber} —</div>
      <h2 className="page-title">{experience.title}</h2>
      <div className="manuscript-divider">✦ ✤ ✦</div>

      <div className="manuscript-items-list">
        {experience.items.map((item) => (
          <div key={item.id} className="manuscript-timeline-entry">
            <div className="timeline-header">
              <h3 className="timeline-role">{item.role}</h3>
              <span className="timeline-period">{item.period}</span>
            </div>
            <div className="timeline-org">{item.organization}</div>
            <ul className="timeline-bullets">
              {item.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
