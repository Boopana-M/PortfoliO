import React from 'react';

interface BookPageProps {
  side: 'left' | 'right';
  pageNumber: number;
  children: React.ReactNode;
}

export const BookPage: React.FC<BookPageProps> = ({ side, pageNumber, children }) => {
  return (
    <article 
      className={`parchment-page parchment-page-${side}`} 
      aria-label={`Page ${pageNumber}`}
    >
      {/* Dynamic Paper Lighting & Gutter Curvature Shadow */}
      <div className={`page-curvature-overlay curve-${side}`} aria-hidden="true" />
      <div className="parchment-noise-texture" aria-hidden="true" />
      <div className="parchment-vignette-stain" aria-hidden="true" />

      {/* Intricate Manuscript Borders & Corner Filigree */}
      <div className="page-border-outer" aria-hidden="true">
        <div className="page-border-inner">
          <span className="page-corner-ornament pco-tl">✤</span>
          <span className="page-corner-ornament pco-tr">✤</span>
          <span className="page-corner-ornament pco-bl">✤</span>
          <span className="page-corner-ornament pco-br">✤</span>

          {/* Side runic edge dots */}
          <span className="page-edge-rune rune-top">✧</span>
          <span className="page-edge-rune rune-bottom">✧</span>
        </div>
      </div>

      {/* Main Manuscript Content */}
      <div className="page-content-wrapper">
        {children}
      </div>

      {/* Antique Footer */}
      <footer className="page-footer" aria-hidden="true">
        <span className="page-footer-decor">✦</span>
        <span className="page-number-text">{pageNumber < 10 ? `0${pageNumber}` : pageNumber}</span>
        <span className="page-footer-decor">✦</span>
      </footer>
    </article>
  );
};

