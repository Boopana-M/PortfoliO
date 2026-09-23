import React from 'react';
import { Trophy, ExternalLink, Award, Sparkles } from 'lucide-react';
import { portfolio } from '../data/portfolio';

export const AchievementsPage: React.FC = () => {
  const { achievements } = portfolio;

  return (
    <div className="page-content-wrapper achievements-manuscript-page">
      <h2 className="page-title">{achievements.title}</h2>
      <div className="manuscript-divider">✦ ✤ ✦</div>

      <div className="achievements-cards-container">
        {achievements.items.map((item) => (
          <article key={item.id} className="achievement-manuscript-card">
            <div className="achievement-card-icon" aria-hidden="true">
              <Trophy size={15} />
            </div>

            <div className="achievement-card-details">
              <div className="ach-title-badge-row">
                <div className="ach-title-group">
                  <h3 className="achievement-name">{item.title}</h3>
                  <span className="achievement-year-badge">{item.year}</span>
                </div>
                <span className="achievement-award-pill">
                  <Sparkles size={10} className="award-sparkle-sigil" />
                  <span>{item.award}</span>
                </span>
              </div>

              <p className="achievement-desc-text">{item.description}</p>

              {item.proofUrl && (
                <div className="ach-proof-row">
                  <a
                    href={item.proofUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="achievement-proof-btn"
                    aria-label={`View Certificate & Proof for ${item.title}`}
                  >
                    <Award size={11} />
                    <span>View Proof</span>
                    <ExternalLink size={10} />
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
