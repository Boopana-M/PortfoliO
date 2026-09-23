import React from 'react';
import { Sparkles } from 'lucide-react';
import { GithubIcon } from '../components/common/BrandIcons';
import { portfolio } from '../data/portfolio';

export const ProjectsPage: React.FC = () => {
  const { projects } = portfolio;

  return (
    <div className="page-content-wrapper projects-manuscript-page">
      <h2 className="page-title">{projects.title}</h2>
      <div className="page-subtitle-hint">Individual &amp; Team Creations</div>
      <div className="manuscript-divider">✦ ✤ ✦</div>

      <div className="projects-grid-manuscript">
        {projects.items.map((proj) => (
          <article key={proj.id} className="project-manuscript-card">
            <div className="project-card-top">
              <div className="project-title-row">
                <h3 className="project-card-heading">{proj.title}</h3>
                <span className={`project-category-badge badge-${proj.category}`}>
                  {proj.category === 'individual' ? 'Solo Project' : 'Team Project'}
                </span>
              </div>
              <p className="project-subtitle-text">{proj.subtitle}</p>
            </div>

            <p className="project-card-description">{proj.description}</p>

            <div className="project-tech-stack-row">
              {proj.technologies.slice(0, 6).map((tech, tIdx) => (
                <span key={tIdx} className="project-tech-pill">
                  {tech}
                </span>
              ))}
              {proj.technologies.length > 6 && (
                <span className="project-tech-pill tech-more">
                  +{proj.technologies.length - 6}
                </span>
              )}
            </div>

            <div className="project-actions-row">
              {proj.live && (
                <a
                  href={proj.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-action-btn btn-demo"
                  aria-label={`View Live Demo of ${proj.title}`}
                >
                  <Sparkles size={13} />
                  <span>Demo</span>
                </a>
              )}

              {proj.github && (
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-action-btn btn-github"
                  aria-label={`View GitHub repository of ${proj.title}`}
                >
                  <GithubIcon size={13} />
                  <span>GitHub</span>
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
