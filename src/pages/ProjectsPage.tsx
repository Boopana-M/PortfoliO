import React from 'react';
import { portfolio } from '../data/portfolio';

export const ProjectsPage: React.FC = () => {
  const { projects } = portfolio;

  return (
    <div className="page-content-wrapper">
      <div className="page-header-number">— {projects.chapterNumber} —</div>
      <h2 className="page-title">{projects.title}</h2>
      <div className="manuscript-divider">✦ ✤ ✦</div>

      <div className="manuscript-items-list">
        {projects.items.map((project) => (
          <div key={project.id} className="manuscript-card">
            <div className="card-header">
              <h3 className="card-title">{project.title}</h3>
              <span className="card-category">{project.category}</span>
            </div>
            <p className="card-description">{project.description}</p>
            <div className="card-tags">
              {project.technologies.map((tech, i) => (
                <span key={i} className="mini-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
