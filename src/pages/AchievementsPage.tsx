import React from 'react';
import { portfolio } from '../data/portfolio';

export const AchievementsPage: React.FC = () => {
  const { achievements } = portfolio;

  return (
    <div className="page-content-wrapper">
      <div className="page-header-number">— {achievements.chapterNumber} —</div>
      <h2 className="page-title">{achievements.title}</h2>
      <div className="manuscript-divider">✦ ✤ ✦</div>

      <div className="manuscript-items-list">
        {achievements.items.map((item) => (
          <div key={item.id} className="manuscript-card">
            <div className="card-header">
              <h3 className="card-title">{item.title}</h3>
              <span className="card-year">{item.year}</span>
            </div>
            <div className="card-issuer">Granted by: {item.issuer}</div>
            <p className="card-description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
