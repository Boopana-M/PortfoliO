import React, { useState } from 'react';
import {
  User,
  Sparkles,
  Folder,
  Briefcase,
  Trophy,
  Code,
  FileText,
  Mail,
  BookOpen,
  X
} from 'lucide-react';
import { navigationItems, spreads } from '../../data/navigation';
import { portfolio } from '../../data/portfolio';
import './navigation.css';

interface SideNavigationProps {
  currentSpread: number;
  onSelectSpread: (spreadIndex: number) => void;
  onCloseBook?: () => void;
}

export const SideNavigation: React.FC<SideNavigationProps> = ({
  currentSpread,
  onSelectSpread,
  onCloseBook,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'User':
        return <User size={16} />;
      case 'Sparkles':
        return <Sparkles size={16} />;
      case 'Folder':
        return <Folder size={16} />;
      case 'Briefcase':
        return <Briefcase size={16} />;
      case 'Trophy':
        return <Trophy size={16} />;
      case 'Code':
        return <Code size={16} />;
      case 'FileText':
        return <FileText size={16} />;
      case 'Mail':
        return <Mail size={16} />;
      default:
        return <Sparkles size={16} />;
    }
  };

  const activeSpread = spreads[currentSpread];

  const handleChapterClick = (spreadIndex: number) => {
    onSelectSpread(spreadIndex);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Chapter Trigger Button */}
      <button
        type="button"
        className="mobile-chapter-trigger-btn"
        onClick={() => setIsMobileMenuOpen(true)}
        aria-label="Open Chapter Index"
      >
        <BookOpen size={17} className="mobile-btn-icon" />
        <span className="mobile-btn-text">Index</span>
      </button>

      {/* Mobile Chapter Drawer Backdrop & Modal */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-chapter-overlay"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        >
          <div 
            className="mobile-chapter-drawer"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-label="Chapters Directory"
          >
            <div className="mobile-drawer-header">
              <div className="mobile-drawer-title">
                <span className="mobile-drawer-rune">✦</span>
                <span>Grimoire Chapters</span>
                <span className="mobile-drawer-rune">✦</span>
              </div>
              <button
                type="button"
                className="mobile-drawer-close"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close chapter menu"
              >
                <X size={18} />
              </button>
            </div>

            <ul className="mobile-chapters-list">
              {navigationItems.map((item) => {
                const isActive =
                  activeSpread &&
                  (activeSpread.leftPageId === item.id || activeSpread.rightPageId === item.id);

                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      className={`mobile-chapter-btn ${isActive ? 'active' : ''}`}
                      onClick={() => handleChapterClick(item.spreadIndex)}
                    >
                      <span className="nav-icon">{getIcon(item.iconName)}</span>
                      <span>{item.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}

      {/* Desktop / Laptop Side Navigation */}
      <aside className="side-navigation" aria-label="Book Chapters">
        <div 
          className="nav-header"
          role={onCloseBook ? "button" : undefined}
          tabIndex={onCloseBook ? 0 : undefined}
          onClick={onCloseBook}
          onKeyDown={(e) => {
            if (onCloseBook && (e.key === 'Enter' || e.key === ' ')) {
              e.preventDefault();
              onCloseBook();
            }
          }}
          title={onCloseBook ? "Close book and return to cover" : undefined}
          style={{ cursor: onCloseBook ? 'pointer' : 'default' }}
        >
          <div className="nav-crest-monogram" aria-hidden="true">
            <div className="monogram-outer-ring" />
            <div className="monogram-inner-ring" />
            <span className="monogram-letter">B</span>
            <div className="monogram-accent mon-top" />
            <div className="monogram-accent mon-bottom" />
            <div className="monogram-accent mon-left" />
            <div className="monogram-accent mon-right" />
          </div>
          <h1 className="nav-author-name">{portfolio.person.name}</h1>
          <p className="nav-author-title">{portfolio.person.title}</p>
        </div>

        <ul className="nav-chapters-list">
          {navigationItems.map((item) => {
            const isActive = 
              activeSpread &&
              (activeSpread.leftPageId === item.id || activeSpread.rightPageId === item.id);

            return (
              <li key={item.id} className="nav-chapter-item">
                <button
                  type="button"
                  className={`nav-chapter-button ${isActive ? 'active' : ''}`}
                  onClick={() => onSelectSpread(item.spreadIndex)}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span className="nav-icon">{getIcon(item.iconName)}</span>
                  <span className="nav-label">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
};


