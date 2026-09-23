import React from 'react';
import { Trophy, ExternalLink, Award } from 'lucide-react';
import { portfolio } from '../data/portfolio';

export const AchievementsPage: React.FC = () => {
  const { achievements } = portfolio;

  return (
    <div className="page-content-wrapper achievements-manuscript-page">
      <div className="page-header-number">— {achievements.chapterNumber} —</div>
      <h2 className="page-title">{achievements.title}</h2>
      <div className="page-subtitle-hint">Honors &amp; Proof of Excellence</div>
      <div className="manuscript-divider">✦ ✤ ✦</div>

      <div className="achievements-cards-container">
        {achievements.items.map((item) => (
          <article key={item.id} className="achievement-manuscript-card">
            <div className="achievement-card-icon">
              <Trophy size={20} />
            </div>

            <div className="achievement-card-details">
              <div className="ach-title-year-row">
                <h3 className="achievement-name">{item.title}</h3>
                <span className="achievement-year-badge">{item.year}</span>
              </div>

              <p className="achievement-desc-text">{item.description}</p>

              {item.proofUrl && (
                <div className="ach-proof-row">
                  <a
                    href={item.proofUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="achievement-proof-btn"
                    aria-label={`View Proof for ${item.title}`}
                  >
                    <Award size={13} />
                    <span>View Proof</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
