import React from 'react';
import { portfolio } from '../data/portfolio';

export const SkillsPage: React.FC = () => {
  const { skills } = portfolio;

  return (
    <div className="page-content-wrapper skills-manuscript-page">
      <h2 className="page-title">{skills.title}</h2>
      <div className="manuscript-divider">✦ ✤ ✦</div>

      <div className="skills-categories-container">
        {skills.categories.map((category, catIdx) => (
          <div key={catIdx} className="skills-category-group">
            <h3 className="skills-category-title">
              <span className="skill-cat-sigil">❖</span>
              <span>{category.title}</span>
            </h3>

            <div className="skills-capsules-cloud">
              {category.skills.map((skill, sIdx) => (
                <span key={sIdx} className="skill-capsule-item">
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
