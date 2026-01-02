
export type SkillCategory = 'Programming Languages' | 'Data Science & AI Libraries' | 'Artificial Intelligence' | 'Tools & Platforms';

export interface Skill {
  name: string;
  icon: string;
  category: SkillCategory;
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl: string;
}

export interface TimelineItem {
  title: string;
  organization: string;
  period: string;
  description: string;
  type: 'education' | 'project' | 'certification';
}
