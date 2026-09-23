import React from 'react';
import { Sparkles, Compass } from 'lucide-react';
import { portfolio } from '../data/portfolio';

export const ResearchPage: React.FC = () => {
  const { research } = portfolio;

  return (
    <div className="page-content-wrapper research-manuscript-page">
      <div className="page-header-number">— {research.chapterNumber} —</div>
      <h2 className="page-title">{research.title}</h2>
      <div className="manuscript-divider">✦ ✤ ✦</div>

      <div className="research-status-container">
        <div className="research-scroll-card">
          <div className="research-scroll-seal">
            <Compass size={28} />
          </div>

          <div className="research-status-badge">
            <Sparkles size={13} />
            <span>{research.status}</span>
          </div>

          <p className="research-statement-text">
            “{research.statement}”
          </p>

          <div className="research-focus-areas">
            <span className="research-focus-pill">Agentic Systems</span>
            <span className="research-focus-pill">RAG Architectures</span>
            <span className="research-focus-pill">Applied Intelligence</span>
          </div>
        </div>
      </div>
    </div>
  );
};
