import React from 'react';
import { Code2, Award, Zap, GitCommit, GitPullRequest } from 'lucide-react';
import { GithubIcon } from '../components/common/BrandIcons';
import { portfolio } from '../data/portfolio';

export const CodingStatsPage: React.FC = () => {
  const { codingStats } = portfolio;

  return (
    <div className="page-content-wrapper codingstats-manuscript-page">
      <div className="page-header-number">— {codingStats.chapterNumber} —</div>
      <h2 className="page-title">{codingStats.title}</h2>
      <div className="page-subtitle-hint">Live GitHub Activity &amp; Problem Solving Overview</div>
      <div className="manuscript-divider">✦ ✤ ✦</div>

      <div className="coding-stats-container">
        {/* Total Metric Overview Banner */}
        <div className="total-solved-banner">
          <div className="solved-banner-icon">
            <Zap size={24} />
          </div>
          <div className="solved-banner-data">
            <span className="solved-banner-number">{codingStats.totalProblemsSolved}</span>
            <span className="solved-banner-label">Total Algorithmic Problems Solved</span>
          </div>
        </div>

        {/* Dynamic GitHub Profile Card */}
        <div className="github-stats-card">
          <div className="github-card-header">
            <GithubIcon size={18} className="github-icon-gold" />
            <span className="github-handle-text">@{codingStats.githubUsername}</span>
            <span className="github-live-indicator">
              <span className="live-dot" /> Live Stats
            </span>
          </div>

          <div className="github-metrics-grid">
            <div className="github-metric-box">
              <GitPullRequest size={15} />
              <div className="github-metric-info">
                <span className="metric-val">Open Source</span>
                <span className="metric-lbl">Active Contributor</span>
              </div>
            </div>

            <div className="github-metric-box">
              <GitCommit size={15} />
              <div className="github-metric-info">
                <span className="metric-val">4+ Multi-Agent</span>
                <span className="metric-lbl">Featured Repositories</span>
              </div>
            </div>

            <div className="github-metric-box">
              <Code2 size={15} />
              <div className="github-metric-info">
                <span className="metric-val">Python &amp; TS</span>
                <span className="metric-lbl">Primary Stacks</span>
              </div>
            </div>

            <div className="github-metric-box">
              <Award size={15} />
              <div className="github-metric-info">
                <span className="metric-val">4 Platforms</span>
                <span className="metric-lbl">Competitive Coding</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
