import React from 'react';
import {
  User,
  Sparkles,
  Folder,
  Briefcase,
  Trophy,
  Code,
  FileText,
  Mail
} from 'lucide-react';
import { navigationItems, spreads } from '../../data/navigation';
import { portfolio } from '../../data/portfolio';
import './navigation.css';

interface SideNavigationProps {
  currentSpread: number;
  onSelectSpread: (spreadIndex: number) => void;
  onOpenEdit?: () => void;
}

export const SideNavigation: React.FC<SideNavigationProps> = ({
  currentSpread,
  onSelectSpread,
  onOpenEdit,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'User':
        return <User size={17} />;
      case 'Sparkles':
        return <Sparkles size={17} />;
      case 'Folder':
        return <Folder size={17} />;
      case 'Briefcase':
        return <Briefcase size={17} />;
      case 'Trophy':
        return <Trophy size={17} />;
      case 'Code':
        return <Code size={17} />;
      case 'FileText':
        return <FileText size={17} />;
      case 'Mail':
        return <Mail size={17} />;
      default:
        return <Sparkles size={17} />;
    }
  };

  const activeSpread = spreads[currentSpread];

  return (
    <aside className="side-navigation" aria-label="Book Chapters">
      <div className="nav-header">
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

      <div className="nav-footer-controls">
        <button
          type="button"
          className="nav-edit-pill-btn"
          onClick={onOpenEdit}
          aria-label="Edit Portfolio Information"
        >
          Edit
        </button>
      </div>
    </aside>
  );
};

