import React from 'react';
import { ExternalLink, Code2 } from 'lucide-react';
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
            <div className="card-footer-row">
              <div className="card-tags">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="mini-tag">{tech}</span>
                ))}
              </div>
              <div className="card-links">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-action-link"
                    title="View Source Code"
                    aria-label={`View ${project.title} source code`}
                  >
                    <Code2 size={13} />
                    <span>Source</span>
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-action-link"
                    title="Launch Live Demo"
                    aria-label={`Launch ${project.title} live demo`}
                  >
                    <ExternalLink size={13} />
                    <span>Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


