import React from 'react';
import { ArrowUpRight, Brain, Zap, Target, Award, Terminal, Code2, Activity, Sparkles } from 'lucide-react';
import { portfolio } from '../data/portfolio';

export const ProblemSolvingPage: React.FC = () => {
  const { problemSolving } = portfolio;

  const handleOpenPlatform = (url: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const getPlatformIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'leetcode':
        return <Zap size={16} />;
      case 'skillrack':
        return <Award size={16} />;
      case 'codechef':
        return <Target size={16} />;
      case 'coding ninjas':
        return <Terminal size={16} />;
      case 'geeksforgeeks':
        return <Code2 size={16} />;
      case 'codeforces':
        return <Activity size={16} />;
      default:
        return <Brain size={16} />;
    }
  };

  return (
    <div className="page-content-wrapper problemsolving-manuscript-page">
      <h2 className="page-title">{problemSolving.title}</h2>
      <div className="page-subtitle-hint">Algorithmic Mastery &amp; Competitive Platforms</div>
      <div className="manuscript-divider">✦ ✤ ✦</div>

      {/* Top Overall Solved Count Banner */}
      <div className="ps-global-stats-banner">
        <div className="ps-banner-left">
          <Sparkles size={16} className="ps-sparkle-icon" />
          <span className="ps-total-number">{problemSolving.totalProblemsSolved} Problems Solved</span>
        </div>
        <span className="ps-banner-subtext">Across {problemSolving.platformsCount} Competitive Coding Platforms</span>
      </div>

      {/* 6 Platform Cards Grid */}
      <div className="problem-solving-grid">
        {problemSolving.platforms.map((plat, idx) => (
          <article
            key={idx}
            className="ps-platform-card"
            onClick={(e) => handleOpenPlatform(plat.url, e)}
            role="link"
            tabIndex={0}
            aria-label={`Open ${plat.platform} Profile`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                e.stopPropagation();
                window.open(plat.url, '_blank', 'noopener,noreferrer');
              }
            }}
          >
            <div className="ps-card-top-row">
              <div className="ps-platform-brand">
                <div className="ps-platform-icon-wrap">
                  {getPlatformIcon(plat.platform)}
                </div>
                <a
                  href={plat.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ps-platform-name-link"
                  onClick={(e) => handleOpenPlatform(plat.url, e)}
                  aria-label={`Open ${plat.platform} Profile`}
                  title={`Open ${plat.platform} Profile`}
                >
                  <span className="ps-platform-name">{plat.platform}</span>
                  <ArrowUpRight size={13} className="ps-link-arrow" />
                </a>
              </div>
            </div>

            <div className="ps-card-metric-block">
              <span className="ps-metric-number">{plat.solved}</span>
              <span className="ps-metric-highlight">{plat.highlight}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

