import React from 'react';
import { Sparkles, Compass, Heart } from 'lucide-react';
import { portfolio } from '../data/portfolio';
import { QuillFeather } from '../components/common/QuillFeather';

export const EpiloguePage: React.FC = () => {
  const { person } = portfolio;

  return (
    <div className="page-content-wrapper epilogue-manuscript-page">
      <div className="page-header-number">— 14 —</div>
      <h2 className="page-title">Epilogue</h2>
      <div className="page-subtitle-hint">Closing Inscription &amp; Colophon</div>
      <div className="manuscript-divider">✦ ✤ ✦</div>

      <div className="epilogue-content-container">
        {/* Navigation Seal */}
        <div className="epilogue-seal-wrapper">
          <div className="epilogue-seal-ring">
            <Compass size={24} className="epilogue-seal-icon" />
          </div>
        </div>

        {/* Developer Philosophy & Thank You */}
        <div className="epilogue-message-cartouche">
          <p className="epilogue-creed-text">
            “Software engineering is the discipline of translating abstract logic into resilient, scalable, and impactful digital solutions.”
          </p>
          <p className="epilogue-subtext">
            Thank you for reviewing my developer portfolio. Whether building Agentic AI workflows, architecting full-stack web platforms, or solving algorithmic challenges — I remain driven by continuous learning, clean architecture, and practical engineering impact.
          </p>
        </div>

        {/* Portfolio Architecture Specs */}
        <div className="epilogue-spec-card">
          <div className="epilogue-spec-header">
            <Sparkles size={13} className="spec-star-icon" />
            <span>Portfolio Architecture</span>
            <Sparkles size={13} className="spec-star-icon" />
          </div>
          <p className="epilogue-spec-body">
            Built with React 19, TypeScript, StPageFlip 3D Engine &amp; Modern Vanilla CSS.
          </p>
        </div>

        {/* Signature & Date */}
        <div className="epilogue-signature-section">
          <QuillFeather className="antique-quill-feather" />
          <div className="epilogue-signature-block">
            <span className="epilogue-handwritten">{person.signature}</span>
            <span className="epilogue-inscription-date">2026 · Software Engineer</span>
          </div>
        </div>

        <div className="epilogue-footer-note">
          <span>Engineered with dedication</span>
          <Heart size={11} className="epilogue-heart-icon" />
          <span>by Boopana M</span>
        </div>
      </div>
    </div>
  );
};
