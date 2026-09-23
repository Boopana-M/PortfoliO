import React from 'react';
import { FileText, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/common/BrandIcons';
import { portfolio } from '../data/portfolio';

export const HomePage: React.FC = () => {
  const { person } = portfolio;

  return (
    <div className="page-content-wrapper home-manuscript-page">
      <div className="page-header-number">— 01 —</div>
      <h2 className="page-title">Welcome</h2>
      <div className="manuscript-divider">✦ ✤ ✦</div>

      <div className="home-profile-container">
        {/* Ornate Gilded Portrait Frame */}
        <div className="home-portrait-wrapper">
          <div className="portrait-gilded-ring" />
          <img
            src={person.photo}
            alt={person.name}
            className="home-portrait-img"
          />
          <div className="portrait-inner-sheen" />
        </div>

        {/* Name & Identity */}
        <div className="home-identity-block">
          <h3 className="home-author-name">{person.name}</h3>
          <p className="home-author-role">{person.role}</p>
        </div>

        {/* Tagline */}
        <div className="home-tagline-cartouche">
          <p className="home-tagline-text">
            “{person.tagline}”
          </p>
        </div>

        {/* Quick Links */}
        <div className="home-quick-links-row" role="navigation" aria-label="Quick profile links">
          <a
            href={person.github}
            target="_blank"
            rel="noopener noreferrer"
            className="home-quick-link-btn"
            title="GitHub Profile"
          >
            <GithubIcon size={14} />
            <span>GitHub</span>
          </a>

          <a
            href={person.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="home-quick-link-btn"
            title="LinkedIn Profile"
          >
            <LinkedinIcon size={14} />
            <span>LinkedIn</span>
          </a>

          <a
            href={portfolio.resume.downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="home-quick-link-btn"
            title="Download Resume"
          >
            <FileText size={14} />
            <span>Resume</span>
          </a>

          <a
            href={`mailto:${person.email}`}
            className="home-quick-link-btn"
            title="Send Email"
          >
            <Mail size={14} />
            <span>Email</span>
          </a>
        </div>
      </div>
    </div>
  );
};
