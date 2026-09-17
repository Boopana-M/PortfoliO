import React from 'react';
import { portfolio } from '../data/portfolio';

export const ResumePage: React.FC = () => {
  const { resume } = portfolio;

  return (
    <div className="page-content-wrapper">
      <div className="page-header-number">— {resume.chapterNumber} —</div>
      <h2 className="page-title">{resume.title}</h2>
      <div className="manuscript-divider">✦ ✤ ✦</div>

      <div className="manuscript-body">
        <p className="body-paragraph">{resume.summary}</p>
        
        <h3 className="section-subheading">Academia & Alchemy</h3>
        {resume.education.map((edu, idx) => (
          <div key={idx} className="education-block">
            <div className="edu-degree">{edu.degree}</div>
            <div className="edu-institution">{edu.institution} ({edu.period})</div>
          </div>
        ))}

        <div className="resume-download-box">
          <a href={resume.downloadUrl} className="antique-action-button" target="_blank" rel="noopener noreferrer">
            📜 Inscribe & Download Scroll
          </a>
        </div>
      </div>
    </div>
  );
};
