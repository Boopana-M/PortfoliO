export interface NavItem {
  id: string;
  label: string;
  iconName: string;
  spreadIndex: number;
  pageSide: 'left' | 'right';
  pageNumber: number;
}

export const navigationItems: NavItem[] = [
  { id: 'home', label: 'Home', iconName: 'Home', spreadIndex: 0, pageSide: 'left', pageNumber: 1 },
  { id: 'about', label: 'About Me', iconName: 'User', spreadIndex: 0, pageSide: 'right', pageNumber: 2 },
  { id: 'education', label: 'Education', iconName: 'GraduationCap', spreadIndex: 1, pageSide: 'left', pageNumber: 3 },
  { id: 'skills', label: 'Skills', iconName: 'Sparkles', spreadIndex: 1, pageSide: 'right', pageNumber: 4 },
  { id: 'experience', label: 'Experience', iconName: 'Briefcase', spreadIndex: 2, pageSide: 'left', pageNumber: 5 },
  { id: 'projects', label: 'Projects', iconName: 'Folder', spreadIndex: 2, pageSide: 'right', pageNumber: 6 },
  { id: 'achievements', label: 'Achievements', iconName: 'Trophy', spreadIndex: 3, pageSide: 'left', pageNumber: 7 },
  { id: 'opensource', label: 'Open Source', iconName: 'Code', spreadIndex: 3, pageSide: 'right', pageNumber: 8 },
  { id: 'problemsolving', label: 'Problem Solving', iconName: 'Brain', spreadIndex: 4, pageSide: 'left', pageNumber: 9 },
  { id: 'research', label: 'Research & Conf.', iconName: 'BookOpen', spreadIndex: 4, pageSide: 'right', pageNumber: 10 },
  { id: 'codingstats', label: 'GitHub / Stats', iconName: 'BarChart2', spreadIndex: 5, pageSide: 'left', pageNumber: 11 },
  { id: 'resume', label: 'Resume', iconName: 'FileText', spreadIndex: 5, pageSide: 'right', pageNumber: 12 },
  { id: 'contact', label: 'Contact', iconName: 'Mail', spreadIndex: 6, pageSide: 'left', pageNumber: 13 },
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
  { id: 'spread-1', spreadIndex: 0, leftPageId: 'home', rightPageId: 'about', leftPageNumber: 1, rightPageNumber: 2 },
  { id: 'spread-2', spreadIndex: 1, leftPageId: 'education', rightPageId: 'skills', leftPageNumber: 3, rightPageNumber: 4 },
  { id: 'spread-3', spreadIndex: 2, leftPageId: 'experience', rightPageId: 'projects', leftPageNumber: 5, rightPageNumber: 6 },
  { id: 'spread-4', spreadIndex: 3, leftPageId: 'achievements', rightPageId: 'opensource', leftPageNumber: 7, rightPageNumber: 8 },
  { id: 'spread-5', spreadIndex: 4, leftPageId: 'problemsolving', rightPageId: 'research', leftPageNumber: 9, rightPageNumber: 10 },
  { id: 'spread-6', spreadIndex: 5, leftPageId: 'codingstats', rightPageId: 'resume', leftPageNumber: 11, rightPageNumber: 12 },
  { id: 'spread-7', spreadIndex: 6, leftPageId: 'contact', rightPageId: 'epilogue', leftPageNumber: 13, rightPageNumber: 14 },
];
