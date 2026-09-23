import React from 'react';
import { ArrowRight, Brain, Zap, Target, Award } from 'lucide-react';
import { portfolio } from '../data/portfolio';

export const ProblemSolvingPage: React.FC = () => {
  const { problemSolving } = portfolio;

  const getPlatformIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'leetcode':
        return <Zap size={18} />;
      case 'skillrack':
        return <Award size={18} />;
      case 'codechef':
        return <Target size={18} />;
      default:
        return <Brain size={18} />;
    }
  };

  return (
    <div className="page-content-wrapper problemsolving-manuscript-page">
      <div className="page-header-number">— {problemSolving.chapterNumber} —</div>
      <h2 className="page-title">{problemSolving.title}</h2>
      <div className="page-subtitle-hint">Algorithmic Mastery &amp; Competitive Platforms</div>
      <div className="manuscript-divider">✦ ✤ ✦</div>

      <div className="problem-solving-grid">
        {problemSolving.platforms.map((plat, idx) => (
          <article key={idx} className="ps-platform-card">
            <div className="ps-card-header">
              <div className="ps-platform-icon-wrap">
                {getPlatformIcon(plat.platform)}
              </div>
              <h3 className="ps-platform-name">{plat.platform}</h3>
            </div>

            <div className="ps-card-metric">
              <span className="ps-metric-number">{plat.solved}</span>
              <span className="ps-metric-highlight">{plat.highlight}</span>
            </div>

            <a
              href={plat.url}
              target="_blank"
              rel="noopener noreferrer"
              className="ps-platform-link-btn"
              aria-label={`Visit ${plat.platform} Profile`}
            >
              <span>{plat.platform}</span>
              <ArrowRight size={13} />
            </a>
          </article>
        ))}
      </div>
    </div>
  );
};
