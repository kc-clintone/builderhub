// User types
export interface User {
  id: string;
  username: string;
  email: string;
  avatar?: string;
  role: 'learner' | 'mentor' | 'maintainer';
  joinedAt: Date;
  progress: LearningProgress;
}

// Learning progress types
export interface LearningProgress {
  currentPhase: number;
  completedPhases: number[];
  totalContributions: number;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  progress: number; // 0-100
}

// Project types
export interface Project {
  id: string;
  name: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  technologies: string[];
  status: 'active' | 'completed' | 'archived';
  contributors: string[];
  issues: Issue[];
}

export interface Issue {
  id: string;
  title: string;
  description: string;
  status: 'open' | 'in-progress' | 'closed';
  assignee?: string;
  labels: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

// Learning phase types
export interface LearningPhase {
  id: number;
  title: string;
  description: string;
  duration: string;
  concepts: string[];
  exercises: Exercise[];
  deliverables: string[];
}

export interface Exercise {
  title: string;
  description: string;
  type: 'tutorial' | 'project' | 'quiz';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: string;
}

// API response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Form types
export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContributionForm {
  projectId: string;
  type: 'bug-fix' | 'feature' | 'documentation' | 'other';
  title: string;
  description: string;
  links?: string[];
}
