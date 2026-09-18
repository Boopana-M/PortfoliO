import React from 'react';

export const QuillFeather: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <svg
      viewBox="0 0 100 140"
      className={`quill-feather-svg ${className}`}
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0.8"
    >
      {/* Antique detailed etched quill feather */}
      <path
        d="M25 135 C32 110 40 80 62 20 C64 15 67 8 72 4 C71 10 68 20 63 35 C55 60 45 95 38 135 Z"
        fill="var(--ink)"
        opacity="0.85"
      />
      {/* Feather Vane Left Filaments */}
      <path
        d="M62 20 C50 35 30 55 18 80 C12 92 10 105 15 110 C18 108 22 100 28 88 C35 72 45 52 55 35 Z"
        fill="var(--ink)"
        opacity="0.75"
      />
      <path
        d="M55 35 C42 55 24 80 16 95 C20 90 28 80 38 65 C46 52 52 42 58 30 Z"
        fill="var(--ink)"
        opacity="0.6"
      />
      {/* Feather Vane Right Filaments */}
      <path
        d="M64 15 C72 25 82 45 88 65 C92 78 88 88 82 92 C80 88 78 78 72 65 C68 52 64 35 62 25 Z"
        fill="var(--ink)"
        opacity="0.75"
      />
      <path
        d="M68 28 C74 42 80 58 82 72 C80 68 76 58 72 48 C68 38 65 30 64 22 Z"
        fill="var(--ink)"
        opacity="0.6"
      />
      {/* Fine Quill Nib / Stem */}
      <path
        d="M25 135 L22 139 L26 137 Z"
        fill="var(--ink-accent)"
      />
      <line x1="25" y1="135" x2="68" y2="10" stroke="var(--parchment-light)" strokeWidth="1" opacity="0.6" />
    </svg>
  );
};
