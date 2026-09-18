import React from 'react';

interface TechIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = '', size = 26 }) => {
  const norm = name.toLowerCase().replace(/[^a-z0-9]/g, '');

  switch (norm) {
    case 'javascript':
    case 'js':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <rect x="2" y="2" width="20" height="20" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M7 16.5c.5.8 1.4 1.2 2.3 1.2 1.3 0 2.2-.8 2.2-2.3v-5.4h-1.8v5.3c0 .6-.3 1-.9 1-.5 0-.9-.3-1.1-.7l-.7.9z" />
          <path d="M14.2 16.2c.7.9 1.6 1.5 2.8 1.5 1.5 0 2.5-.8 2.5-2 0-1.2-.7-1.7-2.1-2.3l-.7-.3c-1.1-.5-1.5-.9-1.5-1.7 0-.9.8-1.5 1.8-1.5.9 0 1.6.4 2.1 1.1l.9-.9c-.7-.9-1.7-1.4-3-1.4-1.8 0-3 1.1-3 2.7 0 1.2.7 1.8 2 2.3l.7.3c1.2.5 1.7.9 1.7 1.8 0 1.1-.9 1.7-2.1 1.7-1.1 0-2.1-.6-2.7-1.5l-.9.7z" />
        </svg>
      );

    case 'python':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M11.9 2c-3.1 0-5 1.4-5 3.3v2.2h5v.8H4.7c-2 0-3.7 1.4-3.7 3.7 0 2.2 1.5 3.7 3.7 3.7h1.6v-2.3c0-2 1.7-3.7 3.7-3.7h5.1v-.8c0-2-1.7-3.7-3.7-3.7h-3.3v-.8c0-1.2.9-2.3 2.1-2.3h4.6c1.2 0 2.1.9 2.1 2.1v2.5h1.2c1.7 0 3-1.4 3-3.1 0-1.8-1.7-3.6-4.6-3.6h-4.9zM9.5 3.6c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z" />
          <path d="M12.1 22c3.1 0 5-1.4 5-3.3v-2.2h-5v-.8h7.2c2 0 3.7-1.4 3.7-3.7 0-2.2-1.5-3.7-3.7-3.7h-1.6v2.3c0 2-1.7 3.7-3.7 3.7H8.9v.8c0 2 1.7 3.7 3.7 3.7h3.3v.8c0 1.2-.9 2.3-2.1 2.3H9.2c-1.2 0-2.1-.9-2.1-2.1v-2.5H5.9c-1.7 0-3 1.4-3 3.1 0 1.8 1.7 3.6 4.6 3.6h4.6zM14.5 20.4c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z" />
        </svg>
      );

    case 'java':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M8.8 17.6s-.9.4.6.6c1.9.2 3.1.2 5.4-.3 0 0 .8.5 1.8.2-2.8 1.1-7.8.6-7.8-.5zm-.4-2.2s-1 .5.5.6c2.1.2 4 .3 7.3-.4 0 0 .5.4 1.4.3-3.8 1-9.2.6-9.2-.5zm4.8-5.3c.7.8.4 1.6.4 1.6s1.5-1.2.8-2.6c-.7-1.4-2.3-2.1-1.3-3.6 0 0-2.5 1.1-1.8 2.8.6 1.4 1.2 1 1.9 1.8zm-1.8 11.2c2.4-.2 5 .1 6.8-.7-.6-.5-2.6-.4-4.8-.2-2.1.2-3.7.1-3.7.1s.6.5 1.7.8zm6.5-6.6c1.7-.9 2.7-2.3 1.4-3.2-.4-.3-1.1-.3-1.8-.2.4-.7.6-1.5.3-2-.7-.9-2.5-.4-3.6.1 1.2-.8 2-1.9 1-2.6-.8-.6-2 .1-3.1.8.8-.9 1.3-2.1.4-2.7-.9-.6-2.1.2-3.2 1.3-.4.4-.8.9-1.1 1.4.3-.2.6-.4 1-.5 1-.4 1.9-.3 1.5.3-.4.6-1.8 1.2-2.7 2-.8.8-1 1.7-.5 2.4.6.8 1.9.9 3.2.7-1.4.6-2.8 1.6-2.3 2.6.4.7 1.5.9 2.7.9 1.8 0 3.7-.4 5.3-.9 1.1-.3 2.4-.5 3.2-.2.3.1.5.4.3.7-.4.6-1.7.9-2.9 1.1 1.2.4 2.5.4 3.7.1 1.7-.3 2.7-1.3 1.4-2.2z" />
        </svg>
      );

    case 'c':
    case 'cpp':
    case 'cplusplus':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M10.5 7.5c-2.8 0-5 2-5 4.5s2.2 4.5 5 4.5c1.8 0 3.3-.8 4.2-2.1l-1.8-1.2c-.6.8-1.4 1.3-2.4 1.3-1.7 0-3-1.1-3-2.5s1.3-2.5 3-2.5c1 0 1.8.5 2.4 1.3l1.8-1.2c-.9-1.3-2.4-2.1-4.2-2.1zM16.5 10.5v1.2h-1.2v1.2h1.2v1.2h1.2v-1.2h1.2v-1.2h-1.2v-1.2h-1.2zm4 0v1.2h-1.2v1.2h1.2v1.2h1.2v-1.2h1.2v-1.2h-1.2v-1.2h-1.2z" />
        </svg>
      );

    case 'react':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <ellipse cx="12" cy="12" rx="3.5" ry="9.5" fill="none" stroke="currentColor" strokeWidth="1.6" transform="rotate(30 12 12)" />
          <ellipse cx="12" cy="12" rx="3.5" ry="9.5" fill="none" stroke="currentColor" strokeWidth="1.6" transform="rotate(90 12 12)" />
          <ellipse cx="12" cy="12" rx="3.5" ry="9.5" fill="none" stroke="currentColor" strokeWidth="1.6" transform="rotate(150 12 12)" />
          <circle cx="12" cy="12" r="1.8" />
        </svg>
      );

    case 'nodejs':
    case 'node':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M12 2l8.7 5v10L12 22l-8.7-5V7L12 2zm0 2.3L5.3 8.2v7.6L12 19.7l6.7-3.9V8.2L12 4.3zM11 8h2v3.5l3-2 1.1 1.7-4.1 2.8v4h-2v-4L7 11.2l1-1.7 3 2V8z" />
        </svg>
      );

    case 'express':
    case 'expressjs':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <text x="12" y="16" fontSize="13" fontFamily="var(--font-title)" fontWeight="bold" textAnchor="middle" fill="currentColor">ex</text>
          <circle cx="12" cy="12" r="9.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
        </svg>
      );

    case 'mongodb':
    case 'mongo':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M12 2C11.6 3 8 7.5 8 12.8c0 4 2.5 6.7 4 7.9.3.2.4.7.2 1l-.2.3h.4c.1-.4.2-.8.5-1.1 1.8-1.5 4.1-4.2 4.1-8.1 0-5.3-3.6-9.8-4-10.8h-1zM11.9 4.3c1.5 2.5 3 6.1 2.9 8.5-.1 2.5-1.4 4.5-2.8 5.7-.1-4.8-.1-9.6-.1-14.2z" />
        </svg>
      );

    case 'git':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M19.7 10.9L13.1 4.3c-.4-.4-1.1-.4-1.5 0L10.3 5.6l2 2c.4-.1.9 0 1.2.3.5.5.5 1.3.1 1.8l2 2c.5-.4 1.3-.4 1.8.1.6.6.6 1.5 0 2.1-.6.6-1.5.6-2.1 0-.4-.4-.5-1-.2-1.5l-1.9-1.9v4.2c.3.2.5.6.5 1 0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5c0-.5.2-.9.6-1.2V9.8c-.4-.3-.6-.7-.6-1.2 0-.5.2-.9.5-1.2L7.3 5.4 4.3 8.4c-.4.4-.4 1.1 0 1.5l6.6 6.6c.4.4 1.1.4 1.5 0l7.3-7.3c.4-.4.4-1-.1-1.4z" />
        </svg>
      );

    case 'github':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M12 2C6.5 2 2 6.5 2 12c0 4.4 2.9 8.2 6.8 9.5.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.3-3.4-1.3-.5-1.1-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.3-4.5-1.1-4.5-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1 .8-.2 1.7-.3 2.5-.3s1.7.1 2.5.3c1.9-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.7.7 1 1.6 1 2.7 0 3.9-2.3 4.7-4.5 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5 4-1.3 6.8-5.1 6.8-9.5 0-5.5-4.5-10-10-10z" />
        </svg>
      );

    case 'vscode':
    case 'visualstudiocode':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M17.5 2l4.5 2.5v15L17.5 22 8 14.5 3.5 18 2 16.8 5.5 12 2 7.2 3.5 6 8 9.5 17.5 2zm-1.5 4.5L10 12l6 5.5V6.5z" />
        </svg>
      );

    case 'docker':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M22.5 10.5c-.3-.2-1.3-.3-2.5.3-.2-.8-.7-1.5-1.4-2l-.6-.4-.4.6c-.5.8-.6 1.8-.4 2.8-.7.4-1.8.4-2.4 0l-.5-.3-.3.5c-.6 1-1.5 1.6-2.5 1.8H2.1c-.6 0-1.1.5-1.1 1.1 0 4.2 3.4 7.6 7.6 7.6 5.3 0 9.8-3.4 11.2-8.3 1.5-.2 2.6-1.1 2.9-2.4l.1-.7-.3-.3zm-10-3.5h-2v2h2v-2zm3 0h-2v2h2v-2zm-6 0H7.5v2h2v-2zm6-3h-2v2h2v-2zm-3 0h-2v2h2v-2zm-3 0H7.5v2h2v-2zm9 6h-2v2h2v-2zm-12 0H4.5v2h2v-2zm3 0H7.5v2h2v-2z" />
        </svg>
      );

    case 'dsa':
    case 'datastructures':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <circle cx="12" cy="5" r="2.5" />
          <circle cx="6" cy="18" r="2.5" />
          <circle cx="18" cy="18" r="2.5" />
          <path d="M10.5 7.2L7.5 15.8M13.5 7.2L16.5 15.8M8.5 18h7" />
        </svg>
      );

    case 'problemsolving':
    case 'problem':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <path d="M12 2a7 7 0 0 0-7 7c0 2.5 1.3 4.7 3.2 5.9.6.4 1 1 1 1.7v1.4h5.6V16.6c0-.7.4-1.3 1-1.7A7 7 0 0 0 12 2z" />
          <path d="M9.5 21h5M10.5 18h3" />
        </svg>
      );

    case 'systemdesign':
    case 'system':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <rect x="3" y="3" width="6" height="5" rx="1" />
          <rect x="15" y="3" width="6" height="5" rx="1" />
          <rect x="9" y="15" width="6" height="6" rx="1" />
          <path d="M6 8v3.5a2 2 0 0 0 2 2h4m6-5.5v3.5a2 2 0 0 1-2 2h-4" />
        </svg>
      );

    case 'oops':
    case 'oop':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <rect x="4" y="4" width="16" height="16" rx="3" strokeDasharray="3 2" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      );

    default:
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <polygon points="12 2 15 9 22 12 15 15 12 22 9 15 2 12 9 9 12 2" />
        </svg>
      );
  }
};
