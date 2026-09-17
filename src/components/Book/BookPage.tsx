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
      <div className="page-border-inner" aria-hidden="true">
        <span className="page-corner-ornament pco-tl">✤</span>
        <span className="page-corner-ornament pco-tr">✤</span>
        <span className="page-corner-ornament pco-bl">✤</span>
        <span className="page-corner-ornament pco-br">✤</span>
      </div>

      <div className="page-content-wrapper">
        {children}
      </div>

      <footer className="page-footer" aria-hidden="true">
        <span>— {pageNumber < 10 ? `0${pageNumber}` : pageNumber} —</span>
      </footer>
    </article>
  );
};
