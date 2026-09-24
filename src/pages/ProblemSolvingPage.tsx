import React from 'react';
import { ArrowUpRight, Brain, Zap, Target, Award, Terminal, Code2, Activity, Sparkles } from 'lucide-react';
import { portfolio } from '../data/portfolio';

export const ProblemSolvingPage: React.FC = () => {
  const { problemSolving } = portfolio;

  const getPlatformIcon = (platform: string, size = 16) => {
    switch (platform.toLowerCase()) {
      case 'leetcode':
        return <Zap size={size} />;
      case 'skillrack':
        return <Award size={size} />;
      case 'codechef':
        return <Target size={size} />;
      case 'coding ninjas':
        return <Terminal size={size} />;
      case 'geeksforgeeks':
        return <Code2 size={size} />;
      case 'codeforces':
        return <Activity size={size} />;
      default:
        return <Brain size={size} />;
    }
  };

  const handleOpenUrl = (url: string) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="page-content-wrapper problemsolving-manuscript-page">
      {/* ----------------- FIRST HALF OF PAGE ----------------- */}
      <div className="ps-top-half-section">
        <h2 className="page-title">{problemSolving.title}</h2>
        <div className="page-subtitle-hint">Algorithmic Mastery &amp; Competitive Platforms</div>
        <div className="manuscript-divider">✦ ✤ ✦</div>

        {/* Grand Total Solved Showcase */}
        <div className="ps-grand-solved-showcase">
          <div className="ps-grand-sparkle-row">
            <Sparkles size={16} className="ps-grand-sparkle" />
            <span className="ps-grand-number">{problemSolving.totalProblemsSolved}</span>
            <Sparkles size={16} className="ps-grand-sparkle" />
          </div>
          <span className="ps-grand-label">Total Problems Solved</span>
          <span className="ps-grand-subtext">Across {problemSolving.platformsCount} Competitive Coding Platforms</span>
        </div>

        {/* Platforms Solved - All Platform Icons Showcase */}
        <div className="ps-icons-showcase-container">
          <div className="ps-icons-header-label">
            <span>✦ Platforms Solved ✦</span>
          </div>
          <div className="ps-icons-badges-row">
            {problemSolving.platforms.map((plat, idx) => (
              <div key={idx} className="ps-icon-badge" title={plat.platform}>
                <div className="ps-badge-glyph">
                  {getPlatformIcon(plat.platform, 15)}
                </div>
                <span className="ps-badge-name">{plat.platform}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ----------------- SECOND HALF OF PAGE ----------------- */}
      <div className="ps-bottom-half-section">
        <div className="ps-section-divider-mini">
          <span className="ps-divider-line" />
          <span className="ps-divider-text">Platform Profiles &amp; Metrics</span>
          <span className="ps-divider-line" />
        </div>

        {/* All 6 Platforms with Name, Count, and Clickable URL */}
        <div className="ps-bottom-platforms-grid">
          {problemSolving.platforms.map((plat, idx) => (
            <a
              key={idx}
              href={plat.url}
              target="_blank"
              rel="noopener noreferrer"
              className="ps-bottom-platform-card"
              onClick={(e) => {
                e.stopPropagation();
                handleOpenUrl(plat.url);
              }}
              aria-label={`Open ${plat.platform} profile - ${plat.solved}`}
              title={`Visit ${plat.platform} profile`}
            >
              <div className="ps-card-left-info">
                <div className="ps-card-platform-header">
                  <div className="ps-card-icon-small">
                    {getPlatformIcon(plat.platform, 13)}
                  </div>
                  <span className="ps-card-platform-title">{plat.platform}</span>
                </div>
                <div className="ps-card-metric-row">
                  <span className="ps-card-count">{plat.solved}</span>
                  <span className="ps-card-tag">{plat.highlight}</span>
                </div>
              </div>

              <div className="ps-card-nav-arrow-wrap" aria-hidden="true">
                <span className="ps-card-visit-text">Visit</span>
                <ArrowUpRight size={12} className="ps-card-arrow-icon" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
