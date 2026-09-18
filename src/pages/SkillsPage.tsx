import React from 'react';
import { portfolio } from '../data/portfolio';
import { TechIcon } from '../components/common/TechIcons';

export const SkillsPage: React.FC = () => {
  const { skills } = portfolio;

  return (
    <div className="page-content-wrapper skills-manuscript-page">
      <div className="page-header-number">— {skills.chapterNumber} —</div>
      <h2 className="page-title">{skills.title}</h2>
      <div className="manuscript-divider">✦ ✤ ✦</div>

      <div className="skills-grid-container">
        {skills.categories.map((category, idx) => (
          <div key={idx} className="skill-section-block">
            <h3 className="skill-section-title">{category.title}</h3>
            <div className="skill-icons-row">
              {category.skills.map((skill, sIdx) => (
                <div key={sIdx} className="skill-icon-cell">
                  <div className="skill-icon-glyph">
                    <TechIcon name={skill} size={26} />
                  </div>
                  <span className="skill-icon-label">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

