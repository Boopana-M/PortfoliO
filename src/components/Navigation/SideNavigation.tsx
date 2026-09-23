import React, { useState } from 'react';
import {
  Home,
  User,
  GraduationCap,
  Sparkles,
  Briefcase,
  Folder,
  Trophy,
  Code,
  Brain,
  BookOpen,
  BarChart2,
  FileText,
  Mail,
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
      case 'Home':
        return <Home size={15} />;
      case 'User':
        return <User size={15} />;
      case 'GraduationCap':
        return <GraduationCap size={15} />;
      case 'Sparkles':
        return <Sparkles size={15} />;
      case 'Briefcase':
        return <Briefcase size={15} />;
      case 'Folder':
        return <Folder size={15} />;
      case 'Trophy':
        return <Trophy size={15} />;
      case 'Code':
        return <Code size={15} />;
      case 'Brain':
        return <Brain size={15} />;
      case 'BookOpen':
        return <BookOpen size={15} />;
      case 'BarChart2':
        return <BarChart2 size={15} />;
      case 'FileText':
        return <FileText size={15} />;
      case 'Mail':
        return <Mail size={15} />;
      default:
        return <Sparkles size={15} />;
    }
  };

  const activeSpread = spreads[currentSpread] || spreads[0];

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

            <ul className="mobile-drawer-list">
              {navigationItems.map((item) => {
                const isActive = item.spreadIndex === currentSpread;
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      className={`mobile-drawer-item ${isActive ? 'active' : ''}`}
                      onClick={() => handleChapterClick(item.spreadIndex)}
                    >
                      <span className="nav-icon-wrapper">{getIcon(item.iconName)}</span>
                      <span className="mobile-item-label">{item.label}</span>
                      <span className="mobile-item-page">p.{item.pageNumber < 10 ? `0${item.pageNumber}` : item.pageNumber}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}

      {/* Desktop Vertical Antique Navigation Sidebar */}
      <nav 
        className="side-navigation"
        aria-label="Grimoire Table of Contents"
      >
        {/* Personal Crest Seal Header */}
        <div className="side-nav-header">
          <div className="personal-seal-crest" aria-hidden="true">
            <span className="crest-arcane-glyph">⚜</span>
          </div>
          <div className="developer-identity-box">
            <h1 className="developer-name-heading">{portfolio.person.name}</h1>
            <p className="developer-role-tag">{portfolio.person.role}</p>
          </div>
        </div>

        {/* Ornate Divider */}
        <div className="side-nav-divider" aria-hidden="true">
          <div className="nav-divider-line" />
          <span className="nav-divider-gem">✦</span>
          <div className="nav-divider-line" />
        </div>

        {/* Chapter Bookmarks Navigation List */}
        <ul className="side-nav-list" role="list">
          {navigationItems.map((item) => {
            const isLeftActive = activeSpread.leftPageId === item.id;
            const isRightActive = activeSpread.rightPageId === item.id;
            const isActive = isLeftActive || isRightActive;

            return (
              <li key={item.id} className="side-nav-item">
                <button
                  type="button"
                  className={`chapter-bookmark-btn ${isActive ? 'active' : ''}`}
                  onClick={() => onSelectSpread(item.spreadIndex)}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span className="bookmark-sigil" aria-hidden="true">
                    {isActive ? '✦' : '✧'}
                  </span>
                  
                  <span className="bookmark-icon-wrap" aria-hidden="true">
                    {getIcon(item.iconName)}
                  </span>

                  <span className="bookmark-label-text">{item.label}</span>

                  <span className="bookmark-page-number" aria-hidden="true">
                    {item.pageNumber < 10 ? `0${item.pageNumber}` : item.pageNumber}
                  </span>

                  {/* Active Golden Glow Underlay */}
                  {isActive && <div className="bookmark-active-aurora" aria-hidden="true" />}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Close Grimoire Cover Button */}
        {onCloseBook && (
          <div className="side-nav-footer">
            <button
              type="button"
              className="close-grimoire-btn"
              onClick={onCloseBook}
              aria-label="Close Grimoire Cover"
            >
              <span className="close-btn-sigil">❖</span>
              <span className="close-btn-text">Close Book</span>
            </button>
          </div>
        )}
      </nav>
    </>
  );
};
