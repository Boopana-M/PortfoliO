import React from 'react';
import { portfolio } from '../../data/portfolio';

interface FrontCoverTypographyProps {
  isHovered?: boolean;
}

export const FrontCoverTypography: React.FC<FrontCoverTypographyProps> = ({ isHovered = false }) => {
  return (
    <div className={`front-cover-hd-overlay ${isHovered ? 'is-hovered' : ''}`} aria-hidden="true">
      {/* 1. Seamless Leather Texture Backdrop to blend away blurry underlying raster pixels */}
      <div className="front-cover-leather-mask" />

      {/* 2. Razor-Sharp Ultra-HD Vector Arcane Crest with Monogram B */}
      <div className="front-cover-crest-wrapper">
        <svg
          className="front-cover-crest-svg"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Rich Antique Gold Linear Gradients */}
            <linearGradient id="goldMetallicGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fff8db" />
              <stop offset="25%" stopColor="#f7dd94" />
              <stop offset="50%" stopColor="#d4b568" />
              <stop offset="75%" stopColor="#aa863c" />
              <stop offset="100%" stopColor="#6d4f1e" />
            </linearGradient>

            <linearGradient id="goldBrightGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fffdf0" />
              <stop offset="30%" stopColor="#f9e2a1" />
              <stop offset="70%" stopColor="#caa452" />
              <stop offset="100%" stopColor="#7a5a22" />
            </linearGradient>

            <radialGradient id="sealCoreGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#251c14" />
              <stop offset="60%" stopColor="#150f09" />
              <stop offset="100%" stopColor="#0a0704" />
            </radialGradient>

            <radialGradient id="gemBlueGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(110, 208, 224, 0.4)" />
              <stop offset="60%" stopColor="rgba(76, 159, 196, 0.15)" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>

            <filter id="goldGlowFilter" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            <filter id="deepShadowFilter" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000" floodOpacity="0.9" />
            </filter>
          </defs>

          {/* Ambient Arcane Glow behind seal */}
          <circle cx="100" cy="100" r="92" fill="url(#gemBlueGlow)" />

          {/* Outer Sunburst & Star Compass Points */}
          <g filter="url(#deepShadowFilter)">
            {/* Cardinal Star Rays */}
            <path
              d="M100 8 L103 40 L100 48 L97 40 Z M100 192 L103 160 L100 152 L97 160 Z M8 100 L40 103 L48 100 L40 97 Z M192 100 L160 103 L152 100 L160 97 Z"
              fill="url(#goldMetallicGrad)"
            />
            {/* Diagonal Star Rays */}
            <path
              d="M35 35 L58 52 L54 58 L48 54 Z M165 35 L142 52 L146 58 L152 54 Z M35 165 L58 148 L54 142 L48 146 Z M165 165 L142 148 L146 142 L152 146 Z"
              fill="url(#goldMetallicGrad)"
              opacity="0.85"
            />
          </g>

          {/* Outer Filigree Ornamental Ring */}
          <circle
            cx="100"
            cy="100"
            r="82"
            stroke="url(#goldMetallicGrad)"
            strokeWidth="1.6"
            fill="none"
            filter="url(#deepShadowFilter)"
          />
          <circle
            cx="100"
            cy="100"
            r="77"
            stroke="url(#goldMetallicGrad)"
            strokeWidth="0.8"
            strokeDasharray="2.5 4"
            fill="none"
            opacity="0.8"
          />

          {/* Intricate Filigree Petals surrounding inner core */}
          <g stroke="url(#goldBrightGrad)" strokeWidth="1.2" fill="none" opacity="0.9">
            <path d="M100 24 C108 42, 108 55, 100 68 C92 55, 92 42, 100 24 Z" />
            <path d="M100 176 C108 158, 108 145, 100 132 C92 145, 92 158, 100 176 Z" />
            <path d="M24 100 C42 108, 55 108, 68 100 C55 92, 42 92, 24 100 Z" />
            <path d="M176 100 C158 108, 145 108, 132 100 C145 92, 158 92, 176 100 Z" />
          </g>

          {/* Inner Medallion Background */}
          <circle
            cx="100"
            cy="100"
            r="60"
            fill="url(#sealCoreGrad)"
            stroke="url(#goldBrightGrad)"
            strokeWidth="2.4"
            filter="url(#deepShadowFilter)"
          />
          <circle
            cx="100"
            cy="100"
            r="54"
            stroke="url(#goldMetallicGrad)"
            strokeWidth="1"
            fill="none"
            opacity="0.75"
          />

          {/* Ultra-Crisp Monogram "B" */}
          <text
            x="100"
            y="124"
            textAnchor="middle"
            fontFamily="'Cinzel', Georgia, serif"
            fontSize="68"
            fontWeight="700"
            fill="url(#goldBrightGrad)"
            filter="url(#goldGlowFilter)"
            letterSpacing="0"
          >
            B
          </text>
        </svg>
      </div>

      {/* 3. Ultra-Crisp High-DPI Title: BOOPANA M */}
      <h1 className="front-cover-title-text" data-text={portfolio.person.name.toUpperCase()}>
        {portfolio.person.name.toUpperCase()}
      </h1>

      {/* 4. Subtitle: SOFTWARE ENGINEER */}
      <div className="front-cover-subtitle-row">
        <span className="front-cover-role-text">SOFTWARE ENGINEER</span>
      </div>

      {/* 5. Antique Vector Divider Bar with Diamond Centrepiece */}
      <div className="front-cover-ornament-divider">
        <svg
          className="front-cover-divider-svg"
          viewBox="0 0 280 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 10 H120 M160 10 H260"
            stroke="url(#goldMetallicGrad)"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <circle cx="20" cy="10" r="2" fill="url(#goldBrightGrad)" />
          <circle cx="260" cy="10" r="2" fill="url(#goldBrightGrad)" />
          {/* Diamond Central Flourish */}
          <polygon
            points="140,2 148,10 140,18 132,10"
            fill="url(#goldBrightGrad)"
            stroke="url(#goldMetallicGrad)"
            strokeWidth="0.8"
          />
          <circle cx="127" cy="10" r="1.5" fill="url(#goldBrightGrad)" />
          <circle cx="153" cy="10" r="1.5" fill="url(#goldBrightGrad)" />
        </svg>
      </div>

      {/* 6. High-DPI Tagline with Manuscript Warmth */}
      <p className="front-cover-tagline-text">
        Turning Ideas into Meaningful Solutions
      </p>
    </div>
  );
};
