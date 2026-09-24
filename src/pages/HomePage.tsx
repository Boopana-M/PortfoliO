import React from 'react';
import { portfolio } from '../data/portfolio';

export const HomePage: React.FC = () => {
  const { person } = portfolio;

  return (
    <div className="page-content-wrapper home-manuscript-page">
      <div className="home-full-portrait-container">
        {/* Full-Page Professional Framed Photograph */}
        <div className="home-professional-photo-frame">
          <img
            src={person.photo}
            alt={person.name}
            className="home-full-photo-img"
          />
          
          {/* Subtle cinematic gradient overlay for depth and contrast */}
          <div className="home-photo-vignette-overlay" aria-hidden="true" />

          {/* Corner Filigree Accents */}
          <div className="photo-corner photo-corner-tl" aria-hidden="true">✤</div>
          <div className="photo-corner photo-corner-tr" aria-hidden="true">✤</div>

          {/* Lower Identification Plaque */}
          <div className="home-photo-id-plate">
            <div className="home-plate-divider" aria-hidden="true">
              <span className="plate-divider-line" />
              <span className="plate-divider-sigil">✦</span>
              <span className="plate-divider-line" />
            </div>

            <h2 className="home-plate-name">{person.name}</h2>
            <p className="home-plate-role">{person.role}</p>

            <div className="home-plate-tagline">
              “{person.tagline}”
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

