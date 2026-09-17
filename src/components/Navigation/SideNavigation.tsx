import React from 'react';
import {
  Compass,
  Sparkles,
  FolderGit2,
  Hourglass,
  Award,
  Code2,
  Scroll,
  Mail,
  Flame
} from 'lucide-react';
import { navigationItems, spreads } from '../../data/navigation';
import { portfolio } from '../../data/portfolio';
import './navigation.css';

interface SideNavigationProps {
  currentSpread: number;
  onSelectSpread: (spreadIndex: number) => void;
}

export const SideNavigation: React.FC<SideNavigationProps> = ({
  currentSpread,
  onSelectSpread,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass size={18} />;
      case 'Sparkles':
        return <Sparkles size={18} />;
      case 'FolderGit2':
        return <FolderGit2 size={18} />;
      case 'Hourglass':
        return <Hourglass size={18} />;
      case 'Award':
        return <Award size={18} />;
      case 'Code2':
        return <Code2 size={18} />;
      case 'Scroll':
        return <Scroll size={18} />;
      case 'Mail':
        return <Mail size={18} />;
      default:
        return <Sparkles size={18} />;
    }
  };

  const activeSpread = spreads[currentSpread];

  return (
    <nav className="side-navigation" aria-label="Book Chapters">
      <div className="nav-header">
        <div className="nav-crest">
          <Flame className="crest-symbol" size={24} />
          <span>Grimoire</span>
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
    </nav>
  );
};
