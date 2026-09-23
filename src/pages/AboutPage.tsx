import React from 'react';
import { portfolio } from '../data/portfolio';

export const AboutPage: React.FC = () => {
  const { about } = portfolio;

  return (
    <div className="page-content-wrapper about-manuscript-page">
      <h2 className="page-title">{about.title}</h2>
      <div className="manuscript-divider">✦ ✤ ✦</div>

      <div className="about-manuscript-body">
        {about.paragraphs.map((paragraph, index) => (
          <p key={index} className="about-scan-paragraph">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

