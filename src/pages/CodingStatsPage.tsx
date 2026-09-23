import React from 'react';
import { GitCommit, FolderGit2, ExternalLink, Award, Sparkles, ShieldCheck } from 'lucide-react';
import { GithubIcon } from '../components/common/BrandIcons';
import { portfolio } from '../data/portfolio';

export const CodingStatsPage: React.FC = () => {
  const { codingStats } = portfolio;

  return (
    <div className="page-content-wrapper codingstats-manuscript-page">
      <h2 className="page-title">{codingStats.title}</h2>
      <div className="page-subtitle-hint">Open Source &amp; Repository Activity</div>
      <div className="manuscript-divider">✦ ✤ ✦</div>

      <div className="coding-stats-container">
        {/* Top GitHub Profile Banner */}
        <div className="github-profile-banner">
          <div className="github-profile-left">
            <GithubIcon size={20} className="github-icon-gold" />
            <a
              href={codingStats.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="github-handle-link"
              onClick={(e) => e.stopPropagation()}
              aria-label="Open Boopana-M GitHub Profile"
            >
              <span>@{codingStats.githubUsername}</span>
              <ExternalLink size={12} className="github-ext-icon" />
            </a>
          </div>

          <div className="github-live-status">
            <span className="live-dot" />
            <span>Active Contributor</span>
          </div>
        </div>

        {/* Primary Metrics Grid (Repositories & Contributions) */}
        <div className="github-core-stats-grid">
          <div className="github-core-stat-card">
            <div className="stat-card-icon-wrap">
              <FolderGit2 size={16} className="stat-icon-gold" />
            </div>
            <div className="stat-card-content">
              <span className="stat-card-number">{codingStats.totalRepositories}</span>
              <span className="stat-card-label">Total Repositories</span>
            </div>
          </div>

          <div className="github-core-stat-card">
            <div className="stat-card-icon-wrap">
              <GitCommit size={16} className="stat-icon-gold" />
            </div>
            <div className="stat-card-content">
              <span className="stat-card-number">{codingStats.totalContributions}</span>
              <span className="stat-card-label">Contributions Made</span>
            </div>
          </div>
        </div>

        {/* GitHub Badges / Profile Achievements */}
        <div className="github-section-block">
          <div className="github-section-header">
            <Award size={13} className="section-header-icon" />
            <span className="section-header-title">GitHub Profile Badges</span>
          </div>

          <div className="github-badges-grid">
            {codingStats.achievements.map((ach, idx) => (
              <a
                key={idx}
                href={ach.badgeUrl || codingStats.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="github-badge-card"
                onClick={(e) => e.stopPropagation()}
                aria-label={`View GitHub achievement ${ach.name}`}
              >
                <div className="badge-card-icon">
                  <ShieldCheck size={14} />
                </div>
                <div className="badge-card-text">
                  <div className="badge-name-row">
                    <span className="badge-name">{ach.name}</span>
                    <ExternalLink size={10} className="badge-ext-icon" />
                  </div>
                  <span className="badge-desc">{ach.description}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Organizations Contributed To */}
        <div className="github-section-block">
          <div className="github-section-header">
            <Sparkles size={13} className="section-header-icon" />
            <span className="section-header-title">Contributed Organizations</span>
          </div>

          <div className="github-orgs-row">
            {codingStats.organizations.map((org, idx) => (
              <a
                key={idx}
                href={org.url}
                target="_blank"
                rel="noopener noreferrer"
                className="github-org-link-card"
                onClick={(e) => e.stopPropagation()}
                aria-label={`Visit repository ${org.name} - ${org.repo}`}
              >
                <FolderGit2 size={13} className="org-card-icon" />
                <div className="org-card-info">
                  <span className="org-card-name">{org.name}</span>
                  <span className="org-card-repo">{org.repo}</span>
                </div>
                <ExternalLink size={11} className="org-ext-icon" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

