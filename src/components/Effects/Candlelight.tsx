import React from 'react';
import './effects.css';

export const Candlelight: React.FC = () => {
  return (
    <div className="candlelight-container" aria-hidden="true">
      <div className="candle-glow-left" />
      <div className="candle-glow-right" />
    </div>
  );
};
