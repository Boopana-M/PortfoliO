import React from 'react';
import { GitCommit, FolderGit2, ExternalLink, Award, Sparkles, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '../components/common/BrandIcons';
import { portfolio } from '../data/portfolio';

export const CodingStatsPage: React.FC = () => {
  const { codingStats } = portfolio;

  const handleOpenGithub = () => {
    if (codingStats.profileUrl) {
      window.open(codingStats.profileUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="page-content-wrapper codingstats-manuscript-page">
      {/* ----------------- TOP HALF: INFO & STATS ----------------- */}
      <div className="github-top-half-section">
        <h2 className="page-title">{codingStats.title}</h2>
        <div className="page-subtitle-hint">Open Source &amp; Repository Activity</div>
        <div className="manuscript-divider">✦ ✤ ✦</div>

        {/* GitHub Header Showcase Banner */}
        <div className="github-profile-banner">
          <div className="github-profile-left">
            <div className="github-banner-icon-wrap" aria-hidden="true">
              <GithubIcon size={18} className="github-icon-gold" />
            </div>
            <div className="github-banner-info">
              <span className="github-profile-handle-text">@{codingStats.githubUsername}</span>
              <div className="github-live-status">
                <span className="live-dot" />
                <span>Active Contributor &amp; Open Source Builder</span>
              </div>
            </div>
          </div>
        </div>

        {/* Primary Metrics Grid (Repositories & Contributions) */}
        <div className="github-core-stats-grid">
          <div className="github-core-stat-card">
            <div className="stat-card-icon-wrap">
              <FolderGit2 size={15} className="stat-icon-gold" />
            </div>
            <div className="stat-card-content">
              <span className="stat-card-number">{codingStats.totalRepositories}</span>
              <span className="stat-card-label">Total Repositories</span>
            </div>
          </div>

          <div className="github-core-stat-card">
            <div className="stat-card-icon-wrap">
              <GitCommit size={15} className="stat-icon-gold" />
            </div>
            <div className="stat-card-content">
              <span className="stat-card-number">{codingStats.totalContributions}</span>
              <span className="stat-card-label">Contributions Made</span>
            </div>
          </div>
        </div>
      </div>

      {/* ----------------- MIDDLE: BADGES & ORGS ----------------- */}
      <div className="github-middle-section">
        {/* GitHub Badges / Profile Achievements */}
        <div className="github-section-block">
          <div className="github-section-header">
            <Award size={12} className="section-header-icon" />
            <span className="section-header-title">GitHub Badges &amp; Recognitions</span>
          </div>

          <div className="github-badges-grid">
            {codingStats.achievements.map((ach, idx) => (
              <div key={idx} className="github-badge-card">
                <div className="badge-card-icon">
                  <ShieldCheck size={13} />
                </div>
                <div className="badge-card-text">
                  <div className="badge-name-row">
                    <span className="badge-name">{ach.name}</span>
                  </div>
                  <span className="badge-desc">{ach.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Organizations Contributed To */}
        <div className="github-section-block">
          <div className="github-section-header">
            <Sparkles size={12} className="section-header-icon" />
            <span className="section-header-title">Contributed Organizations</span>
          </div>

          <div className="github-orgs-row">
            {codingStats.organizations.map((org, idx) => (
              <div key={idx} className="github-org-link-card">
                <FolderGit2 size={12} className="org-card-icon" />
                <div className="org-card-info">
                  <span className="org-card-name">{org.name}</span>
                  <span className="org-card-repo">{org.repo}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ----------------- BOTTOM HALF: ACTION LINK ----------------- */}
      <div className="github-bottom-actions-footer">
        <a
          href={codingStats.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="github-full-profile-btn"
          onClick={(e) => {
            e.stopPropagation();
            handleOpenGithub();
          }}
          aria-label="Open Boopana-M GitHub Profile in new tab"
        >
          <GithubIcon size={16} className="github-btn-icon" />
          <span className="github-btn-text">Visit @{codingStats.githubUsername} on GitHub</span>
          <ArrowUpRight size={14} className="github-btn-arrow" />
        </a>
      </div>
    </div>
  );
};
