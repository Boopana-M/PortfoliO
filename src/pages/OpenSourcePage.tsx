import React from 'react';
import { ExternalLink, Code2, Star } from 'lucide-react';
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
              {item.stars && (
                <span className="card-stars">
                  <Star size={12} fill="currentColor" /> {item.stars}
                </span>
              )}
            </div>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="card-repo-link"
              aria-label={`Open repository ${item.repo}`}
            >
              <Code2 size={13} />
              <span>{item.repo}</span>
              <ExternalLink size={11} className="repo-ext-icon" />
            </a>
            <p className="card-description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


