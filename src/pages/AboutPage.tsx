import React from 'react';
import { portfolio } from '../data/portfolio';

export const AboutPage: React.FC = () => {
  const { about } = portfolio;
  const firstParagraph = about.paragraphs[0] || '';
  const remainingParagraphs = about.paragraphs.slice(1);

  // Separate the first letter for the illuminated drop cap
  const firstLetter = firstParagraph.charAt(0);
  const restOfFirstParagraph = firstParagraph.slice(1);

  return (
    <div className="page-content-wrapper about-manuscript-page">
      <h2 className="page-title">{about.title}</h2>
      <div className="manuscript-divider">✦ ✤ ✦</div>

      <div className="about-manuscript-body">
        {firstParagraph && (
          <p className="about-manuscript-p first-p">
            <span className="illuminated-initial">{firstLetter}</span>
            {restOfFirstParagraph}
          </p>
        )}

        {remainingParagraphs.map((paragraph, index) => (
          <p key={index} className="about-manuscript-p">
            {paragraph}
          </p>
        ))}

        {about.quote && (
          <div className="about-quote-cartouche">
            <div className="about-quote-ornament">❝</div>
            <p className="about-quote-text">{about.quote}</p>
            <div className="about-quote-ornament-close">❞</div>
          </div>
        )}

        <div className="about-closing-block">
          <div className="about-closing-valediction">With dedication &amp; curiosity,</div>
          <div className="about-signature-row">
            <span className="about-signature-hand">Boopana M.</span>
            <span className="about-quill-glyph" title="Signed in ink">✍</span>
          </div>
          <div className="about-origin-seal">Tamil Nadu, India</div>
        </div>
      </div>
    </div>
  );
};
