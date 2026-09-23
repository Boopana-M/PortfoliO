import React from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import { portfolio } from '../data/portfolio';

export const EducationPage: React.FC = () => {
  const { education } = portfolio;
  const { item } = education;

  return (
    <div className="page-content-wrapper education-manuscript-page">
      <div className="page-header-number">— {education.chapterNumber} —</div>
      <h2 className="page-title">{education.title}</h2>
      <div className="manuscript-divider">✦ ✤ ✦</div>

      <div className="education-content-box">
        {/* Degree & Period Card */}
        <div className="education-card-manuscript">
          <div className="edu-icon-badge">
            <GraduationCap size={22} />
          </div>

          <div className="edu-details-block">
            <h3 className="edu-degree-title">{item.degree}</h3>
            <div className="edu-period-badge">
              <span className="edu-time-sigil">❖</span>
              <span>{item.period}</span>
            </div>
          </div>
        </div>

        {/* CGPA Cartouche */}
        <div className="edu-cgpa-cartouche">
          <div className="cgpa-ribbon-icon">
            <Award size={18} />
          </div>
          <div className="cgpa-data-box">
            <span className="cgpa-label">Cumulative GPA</span>
            <span className="cgpa-score">{item.cgpa}</span>
          </div>
        </div>

        {/* Relevant Coursework */}
        <div className="edu-coursework-section">
          <div className="coursework-header">
            <BookOpen size={14} className="coursework-header-icon" />
            <span className="coursework-title-text">Relevant Coursework</span>
          </div>

          <div className="coursework-tags-grid">
            {item.coursework.map((course, idx) => (
              <span key={idx} className="coursework-tag-capsule">
                <span className="coursework-bullet">✦</span>
                <span>{course}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
