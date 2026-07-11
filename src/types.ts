export interface Course {
  id: string;
  title: string;
  description: string;
  highlight: string;
  pricePlaceholder: string;
  category: 'School' | 'Competitive' | 'College';
}