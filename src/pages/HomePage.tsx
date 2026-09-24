import React from 'react';
import { portfolio } from '../data/portfolio';

export const HomePage: React.FC = () => {
  const { person } = portfolio;

  return (
    <div className="page-content-wrapper home-manuscript-page">
      <h2 className="page-title">{portfolio.home?.title || 'Home'}</h2>
      <div className="manuscript-divider">✦ ✤ ✦</div>

      <div className="home-profile-container">
        {/* Ornate Gilded Portrait Frame */}
        <div className="home-portrait-wrapper">
          <div className="portrait-gilded-ring" />
          <img
            src={person.photo}
            alt={person.name}
            className="home-portrait-img"
          />
          <div className="portrait-inner-sheen" />
        </div>

        {/* Name & Identity */}
        <div className="home-identity-block">
          <h3 className="home-author-name">{person.name}</h3>
          <p className="home-author-role">{person.role}</p>
        </div>

        {/* Tagline */}
        <div className="home-tagline-cartouche">
          <p className="home-tagline-text">
            “{person.tagline}”
          </p>
        </div>
      </div>
    </div>
  );
};

