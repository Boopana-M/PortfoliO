import React from 'react';
import { Trophy, Sparkles, Code, Zap, Palette } from 'lucide-react';
import { portfolio } from '../data/portfolio';

export const AchievementsPage: React.FC = () => {
  const { achievements } = portfolio;

  const renderAchievementIcon = (iconName?: string) => {
    switch (iconName) {
      case 'Code':
        return <Code size={15} />;
      case 'Zap':
        return <Zap size={15} />;
      case 'Palette':
        return <Palette size={15} />;
      case 'Trophy':
      default:
        return <Trophy size={15} />;
    }
  };

  return (
    <div className="page-content-wrapper achievements-manuscript-page">
      <h2 className="page-title">{achievements.title}</h2>
      <div className="manuscript-divider">✦ ✤ ✦</div>

      <div className="achievements-cards-container">
        {achievements.items.map((item) => (
          <article key={item.id} className="achievement-manuscript-card">
            <div className="achievement-card-icon" aria-hidden="true">
              {renderAchievementIcon(item.iconName)}
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
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
