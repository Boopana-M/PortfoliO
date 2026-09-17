export interface NavItem {
  id: string;
  label: string;
  iconName: string;
  spreadIndex: number;
  pageSide: 'left' | 'right';
  pageNumber: number;
}

export const navigationItems: NavItem[] = [
  { id: 'about', label: 'About Me', iconName: 'Compass', spreadIndex: 0, pageSide: 'left', pageNumber: 1 },
  { id: 'skills', label: 'Skills', iconName: 'Sparkles', spreadIndex: 0, pageSide: 'right', pageNumber: 2 },
  { id: 'projects', label: 'Projects', iconName: 'FolderGit2', spreadIndex: 1, pageSide: 'left', pageNumber: 3 },
  { id: 'experience', label: 'Experience', iconName: 'Hourglass', spreadIndex: 1, pageSide: 'right', pageNumber: 4 },
  { id: 'achievements', label: 'Achievements', iconName: 'Award', spreadIndex: 2, pageSide: 'left', pageNumber: 5 },
  { id: 'opensource', label: 'Open Source', iconName: 'Code2', spreadIndex: 2, pageSide: 'right', pageNumber: 6 },
  { id: 'resume', label: 'Resume', iconName: 'Scroll', spreadIndex: 3, pageSide: 'left', pageNumber: 7 },
  { id: 'contact', label: 'Contact', iconName: 'Mail', spreadIndex: 3, pageSide: 'right', pageNumber: 8 },
];

export interface SpreadDefinition {
  id: string;
  spreadIndex: number;
  leftPageId: string;
  rightPageId: string;
  leftPageNumber: number;
  rightPageNumber: number;
}

export const spreads: SpreadDefinition[] = [
  { id: 'spread-1', spreadIndex: 0, leftPageId: 'about', rightPageId: 'skills', leftPageNumber: 1, rightPageNumber: 2 },
  { id: 'spread-2', spreadIndex: 1, leftPageId: 'projects', rightPageId: 'experience', leftPageNumber: 3, rightPageNumber: 4 },
  { id: 'spread-3', spreadIndex: 2, leftPageId: 'achievements', rightPageId: 'opensource', leftPageNumber: 5, rightPageNumber: 6 },
  { id: 'spread-4', spreadIndex: 3, leftPageId: 'resume', rightPageId: 'contact', leftPageNumber: 7, rightPageNumber: 8 },
];
