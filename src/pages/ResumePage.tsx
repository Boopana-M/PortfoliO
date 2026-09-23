import React from 'react';
import { Download, FileText, CheckCircle } from 'lucide-react';
import { portfolio } from '../data/portfolio';

export const ResumePage: React.FC = () => {
  const { resume } = portfolio;

  return (
    <div className="page-content-wrapper resume-manuscript-page">
      <div className="page-header-number">— {resume.chapterNumber} —</div>
      <h2 className="page-title">{resume.title}</h2>
      <div className="manuscript-divider">✦ ✤ ✦</div>

      <div className="resume-page-container">
        <div className="resume-scroll-card">
          <div className="resume-card-seal">
            <FileText size={32} />
          </div>

          <p className="resume-invitation-message">
            {resume.message}
          </p>

          <div className="resume-highlights-row">
            <span className="resume-highlight-item">
              <CheckCircle size={13} />
              <span>Full-Stack &amp; AI Engineering</span>
            </span>
            <span className="resume-highlight-item">
              <CheckCircle size={13} />
              <span>1,625+ Problems Solved</span>
            </span>
            <span className="resume-highlight-item">
              <CheckCircle size={13} />
              <span>Internships &amp; Open Source</span>
            </span>
          </div>

          <div className="resume-download-center-box">
            <a
              href={resume.downloadUrl}
              download={resume.fileName}
              className="grimoire-resume-download-btn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Curriculum Vitae Resume"
            >
              <Download size={17} />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
