import React from 'react';
import { portfolio } from '../data/portfolio';

export const SkillsPage: React.FC = () => {
  const { skills } = portfolio;

  return (
    <div className="page-content-wrapper">
      <div className="page-header-number">— {skills.chapterNumber} —</div>
      <h2 className="page-title">{skills.title}</h2>
      <div className="manuscript-divider">✦ ✤ ✦</div>

      <div className="skills-scroll-container">
        {skills.categories.map((category, idx) => (
          <div key={idx} className="skill-category-block">
            <h3 className="skill-category-title">
              <span className="bullet-rune">✦</span> {category.title}
            </h3>
            <div className="skill-badges-grid">
              {category.skills.map((skill, sIdx) => (
                <span key={sIdx} className="manuscript-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
