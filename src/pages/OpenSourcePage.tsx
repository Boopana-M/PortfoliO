import React from 'react';
import { GitPullRequest, GitMerge, ExternalLink, Sparkles, Compass, FolderGit2 } from 'lucide-react';
import { portfolio } from '../data/portfolio';

interface OpenSourcePageProps {
  onOpenDetailed?: () => void;
}

export const OpenSourcePage: React.FC<OpenSourcePageProps> = ({ onOpenDetailed }) => {
  const { openSource } = portfolio;
  const { organizations, totalMerged } = openSource;

  return (
    <div className="page-content-wrapper opensource-manuscript-page">
      <h2 className="page-title">{openSource.title}</h2>
      <div className="manuscript-divider">✦ ✤ ✦</div>

      {/* Top Highlight Metric Banner */}
      <div className="os-global-stats-banner">
        <div className="os-stat-badge-main">
          <GitMerge size={15} className="os-git-merge-icon" />
          <span className="os-stat-number">{totalMerged} Merged Pull Requests</span>
        </div>
        <span className="os-stat-subtext">Active Production Contributions</span>
      </div>

      {/* Organizations & Contributions List */}
      <div className="os-organizations-list">
        {organizations.map((org) => (
          <article key={org.id} className="os-org-card">
            <div className="os-org-header">
              <div className="os-org-title-group">
                <div className="os-org-heading-row">
                  <FolderGit2 size={13} className="os-org-icon" />
                  <a
                    href={org.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="os-org-name-link"
                    onClick={(e) => e.stopPropagation()}
                    aria-label={`Open repository ${org.name} - ${org.repo} on GitHub`}
                  >
                    <span>{org.name} — {org.repo}</span>
                    <ExternalLink size={11} className="os-ext-icon" />
                  </a>
                </div>
                <span className="os-org-role">{org.role}</span>
              </div>

              <div className="os-pr-count-pill">
                <GitPullRequest size={11} />
                <span>
                  {org.prsMade} PRs made{org.prsMerged ? ` · ${org.prsMerged} merged` : ''}
                </span>
              </div>
            </div>

            <p className="os-org-highlights-text">{org.highlights}</p>
          </article>
        ))}
      </div>

      {/* View in Detail Button */}
      <div className="experience-actions-footer">
        <button 
          type="button" 
          className="exp-view-detailed-btn"
          onClick={(e) => {
            e.stopPropagation();
            onOpenDetailed?.();
          }}
          aria-label="View open source pull requests in detail"
        >
          <Sparkles size={14} className="btn-sparkle-sigil" />
          <span className="btn-text">View in Detail ✧</span>
          <Compass size={14} className="btn-compass-sigil" />
        </button>
      </div>
    </div>
  );
};
