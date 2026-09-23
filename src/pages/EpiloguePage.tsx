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
      <div className="page-subtitle-hint">Colophon &amp; Closing Inscription</div>
      <div className="manuscript-divider">✦ ✤ ✦</div>

      <div className="epilogue-content-container">
        {/* Arcane Colophon Seal */}
        <div className="epilogue-seal-wrapper">
          <div className="epilogue-seal-ring">
            <Compass size={24} className="epilogue-seal-icon" />
          </div>
        </div>

        {/* Developer Creed & Thank You */}
        <div className="epilogue-message-cartouche">
          <p className="epilogue-creed-text">
            “Every line of code is an incantation — transforming abstract logic into living, impactful systems.”
          </p>
          <p className="epilogue-subtext">
            Thank you for journeying through my grimoire. Whether engineering autonomous Agentic AI workflows, architecting full-stack web platforms, or tackling complex algorithmic challenges — the pursuit of mastery never ceases.
          </p>
        </div>

        {/* Colophon Stack Specs */}
        <div className="epilogue-spec-card">
          <div className="epilogue-spec-header">
            <Sparkles size={13} className="spec-star-icon" />
            <span>Grimoire Architecture</span>
            <Sparkles size={13} className="spec-star-icon" />
          </div>
          <p className="epilogue-spec-body">
            Handcrafted with React 19, TypeScript, StPageFlip 3D Engine &amp; Arcane Vanilla CSS.
          </p>
        </div>

        {/* Signature & Seal */}
        <div className="epilogue-signature-section">
          <QuillFeather className="antique-quill-feather" />
          <div className="epilogue-signature-block">
            <span className="epilogue-handwritten">{person.signature}</span>
            <span className="epilogue-inscription-date">Anno Domini · 2026</span>
          </div>
        </div>

        <div className="epilogue-footer-note">
          <span>Crafted with passion</span>
          <Heart size={11} className="epilogue-heart-icon" />
          <span>by Boopana M</span>
        </div>
      </div>
    </div>
  );
};
