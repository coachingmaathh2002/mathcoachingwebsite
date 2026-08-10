export interface Course {
  id: string;
  title: string;
  description: string;
  highlight: string;
  pricePlaceholder: string;
  category: 'School' | 'Competitive' | 'College';
  
  // Extended Poster Properties
  tagline?: string;
  instructor?: string;
  rating?: number;
  reviewsCount?: number;
  difficulty?: 'Foundation' | 'Intermediate' | 'Advanced' | 'Elite Ranker' | 'Undergraduate';
  duration?: string;
  badge?: string;
  enrolledCount?: number;
  syllabusTopics?: string[];
  featured?: boolean;
  posterImage?: string;
}