import React from 'react';

export const BookCover: React.FC = () => {
  return (
    <div className="book-cover-frame" aria-hidden="true">
      <div className="book-corner book-corner-tl" />
      <div className="book-corner book-corner-tr" />
      <div className="book-corner book-corner-bl" />
      <div className="book-corner book-corner-br" />
    </div>
  );
};
