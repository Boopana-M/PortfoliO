import React from 'react';
import { Code, GitPullRequest, ExternalLink, CheckCircle } from 'lucide-react';
import { portfolio } from '../data/portfolio';

export const OpenSourcePage: React.FC = () => {
  const { openSource } = portfolio;
  const { item } = openSource;

  return (
    <div className="page-content-wrapper opensource-manuscript-page">
      <h2 className="page-title">{openSource.title}</h2>
      <div className="manuscript-divider">✦ ✤ ✦</div>

      <div className="opensource-container-box">
        <article className="opensource-manuscript-card">
          <div className="os-card-header">
            <div className="os-icon-seal">
              <Code size={22} />
            </div>

            <div className="os-header-info">
              <span className="os-org-label">{item.org}</span>
              <h3 className="os-repo-title">{item.repo}</h3>
              <span className="os-role-badge">{item.role}</span>
            </div>
          </div>

          <div className="os-stats-ribbon">
            <div className="os-stat-item">
              <GitPullRequest size={15} className="os-stat-icon" />
              <span>{item.stats}</span>
            </div>
            <div className="os-stat-item">
              <CheckCircle size={15} className="os-stat-icon-check" />
              <span>Maintainer Accepted</span>
            </div>
          </div>

          <p className="os-description-text">{item.description}</p>

          <div className="os-action-row">
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="os-contributions-btn"
              aria-label="View Open Source Contributions"
            >
              <span>View Contributions</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </article>
      </div>
    </div>
  );
};
