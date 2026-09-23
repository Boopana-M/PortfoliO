import React from 'react';
import { portfolio } from '../data/portfolio';
import { QuillFeather } from '../components/common/QuillFeather';

export const AboutPage: React.FC = () => {
  const { about, person } = portfolio;

  return (
    <div className="page-content-wrapper about-manuscript-page">
      <div className="page-header-number">— {about.chapterNumber} —</div>
      <h2 className="page-title">{about.title}</h2>
      <div className="manuscript-divider">✦ ✤ ✦</div>

      <div className="about-manuscript-body">
        {about.paragraphs.map((paragraph, index) => (
          <p key={index} className="about-scan-paragraph">
            {paragraph}
          </p>
        ))}

        <div className="about-quill-signature-box">
          <QuillFeather className="antique-quill-feather" />
          <div className="handwritten-signature-ink">{person.signature}</div>
        </div>
      </div>
    </div>
  );
};
