import React from 'react';
import { portfolio } from '../data/portfolio';

export const AboutPage: React.FC = () => {
  const { about, person } = portfolio;

  return (
    <div className="page-content-wrapper">
      <div className="page-header-number">— {about.chapterNumber} —</div>
      <h2 className="page-title">{about.title}</h2>
      <div className="manuscript-divider">✦ ✤ ✦</div>

      <div className="manuscript-body">
        <p className="lead-paragraph">
          <span className="illuminated-initial">{about.paragraphs[0].charAt(0)}</span>
          {about.paragraphs[0].slice(1)}
        </p>

        {about.paragraphs.slice(1).map((para, index) => (
          <p key={index} className="body-paragraph">
            {para}
          </p>
        ))}

        <blockquote className="manuscript-quote">
          {about.quote}
        </blockquote>

        <div className="signature-container">
          <span className="signature-prefix">Inscribed by:</span>
          <div className="handwritten-signature">{person.signature}</div>
        </div>
      </div>
    </div>
  );
};
