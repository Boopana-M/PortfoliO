import React from 'react';
import { Folder, Sparkles, Compass } from 'lucide-react';
import { portfolio } from '../data/portfolio';

interface ProjectsPageProps {
  onOpenDetailed?: () => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onOpenDetailed }) => {
  const { projects } = portfolio;

  return (
    <div className="page-content-wrapper projects-manuscript-page">
      <h2 className="page-title">{projects.title}</h2>
      <div className="manuscript-divider">✦ ✤ ✦</div>

      <div className="projects-compact-list">
        {projects.items.map((proj) => (
          <article key={proj.id} className="project-manuscript-card project-minimal-card">
            <div className="proj-card-header">
              <div className="proj-title-group">
                <h3 className="proj-card-heading">
                  <Folder size={12} className="proj-folder-icon" />
                  <span>{proj.title}</span>
                </h3>
                <span className="proj-subtitle-text">{proj.subtitle}</span>
              </div>

              <span className={`project-category-badge badge-${proj.category}`}>
                {proj.category === 'individual' ? 'Solo' : 'Team'}
              </span>
            </div>

            <div className="proj-tech-stack-row">
              {proj.technologies.slice(0, 3).map((tech, tIdx) => (
                <span key={tIdx} className="project-tech-pill">
                  {tech}
                </span>
              ))}
              {proj.technologies.length > 3 && (
                <span className="project-tech-pill tech-more">
                  +{proj.technologies.length - 3}
                </span>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* View in Detail Button */}
      <div className="experience-actions-footer">
        <button 
          type="button" 
          className="exp-view-detailed-btn"
          onClick={onOpenDetailed}
          aria-label="View projects showcase in detail"
        >
          <Sparkles size={14} className="btn-sparkle-sigil" />
          <span className="btn-text">View in Detail ✧</span>
          <Compass size={14} className="btn-compass-sigil" />
        </button>
      </div>
    </div>
  );
};
