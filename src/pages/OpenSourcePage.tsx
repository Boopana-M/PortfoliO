import React from 'react';
import { portfolio } from '../data/portfolio';

export const OpenSourcePage: React.FC = () => {
  const { openSource } = portfolio;

  return (
    <div className="page-content-wrapper">
      <div className="page-header-number">— {openSource.chapterNumber} —</div>
      <h2 className="page-title">{openSource.title}</h2>
      <div className="manuscript-divider">✦ ✤ ✦</div>

      <div className="manuscript-items-list">
        {openSource.items.map((item) => (
          <div key={item.id} className="manuscript-card">
            <div className="card-header">
              <h3 className="card-title">{item.title}</h3>
              {item.stars && <span className="card-stars">★ {item.stars}</span>}
            </div>
            <div className="card-repo">{item.repo}</div>
            <p className="card-description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
