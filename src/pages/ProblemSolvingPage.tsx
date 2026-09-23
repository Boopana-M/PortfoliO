import React from 'react';
import { ArrowUpRight, Brain, Zap, Target, Award, Terminal, Code2, Activity, Sparkles } from 'lucide-react';
import { portfolio } from '../data/portfolio';

export const ProblemSolvingPage: React.FC = () => {
  const { problemSolving } = portfolio;

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
      <div className="manuscript-divider">✦ ✤ ✦</div>

      {/* Top Overall Solved Count Banner */}
      <div className="ps-global-stats-banner">
        <div className="ps-banner-left">
          <Sparkles size={15} className="ps-sparkle-icon" />
          <span className="ps-total-number">{problemSolving.totalProblemsSolved} Problems Solved</span>
        </div>
        <span className="ps-banner-subtext">Across {problemSolving.platformsCount} Competitive Coding Platforms</span>
      </div>

      {/* 6 Platform Cards Grid */}
      <div className="problem-solving-grid">
        {problemSolving.platforms.map((plat, idx) => (
          <article key={idx} className="ps-platform-card">
            <div className="ps-card-top-row">
              <div className="ps-platform-brand">
                <div className="ps-platform-icon-wrap">
                  {getPlatformIcon(plat.platform)}
                </div>
                <h3 className="ps-platform-name">{plat.platform}</h3>
              </div>

              <a
                href={plat.url}
                target="_blank"
                rel="noopener noreferrer"
                className="ps-platform-nav-link"
                onClick={(e) => e.stopPropagation()}
                aria-label={`Visit ${plat.platform} Profile`}
                title={`Visit ${plat.platform} Profile`}
              >
                <span>Profile</span>
                <ArrowUpRight size={11} />
              </a>
            </div>

            <div className="ps-card-metric">
              <span className="ps-metric-number">{plat.solved}</span>
              <span className="ps-metric-highlight">{plat.highlight}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

