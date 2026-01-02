
import React from 'react';
import { 
  Code2, 
  Terminal, 
  Cpu, 
  Globe, 
  Github, 
  BrainCircuit, 
  Database, 
  Layout,
  Workflow,
  Sparkles,
  Table,
  BarChart3,
  LineChart,
  Network,
  BookOpen,
  Cloud,
  GitBranch,
  Code
} from 'lucide-react';
import { Skill, Project, TimelineItem } from './types';

export const SKILLS: Skill[] = [
  // Programming Languages
  { name: 'Python', icon: 'Terminal', category: 'Programming Languages' },
  { name: 'SQL', icon: 'Database', category: 'Programming Languages' },
  { name: 'C Language', icon: 'Code2', category: 'Programming Languages' },
  
  // Data Science & AI Libraries
  { name: 'NumPy', icon: 'Cpu', category: 'Data Science & AI Libraries' },
  { name: 'Pandas', icon: 'Table', category: 'Data Science & AI Libraries' },
  { name: 'Seaborn', icon: 'BarChart3', category: 'Data Science & AI Libraries' },
  { name: 'Matplotlib', icon: 'LineChart', category: 'Data Science & AI Libraries' },
  
  // Artificial Intelligence
  { name: 'Machine Learning', icon: 'BrainCircuit', category: 'Artificial Intelligence' },
  { name: 'Deep Learning', icon: 'Network', category: 'Artificial Intelligence' },
  { name: 'Generative AI', icon: 'Sparkles', category: 'Artificial Intelligence' },
  
  // Tools & Platforms
  { name: 'Jupyter Notebook', icon: 'BookOpen', category: 'Tools & Platforms' },
  { name: 'Google Colab', icon: 'Cloud', category: 'Tools & Platforms' },
  { name: 'Git', icon: 'GitBranch', category: 'Tools & Platforms' },
  { name: 'VS Code', icon: 'Code', category: 'Tools & Platforms' },
  { name: 'Spyder', icon: 'Terminal', category: 'Tools & Platforms' },
];

export const PROJECTS: Project[] = [
  {
    title: 'AgriMind AI',
    description: 'A smart crop advisory system using AI to recommend best crops based on soil nutrients and climatic conditions.',
    techStack: ['Python', 'Scikit-Learn', 'Flask', 'NumPy'],
    githubUrl: 'https://github.com/lakhanladdha24/agrimind-ai',
    imageUrl: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Skill Bridge AI',
    description: 'An AI-powered platform designed to bridge the gap between academic learning and industry requirements.',
    techStack: ['React', 'Python', 'FastAPI', 'TensorFlow'],
    githubUrl: 'https://github.com/lakhanladdha24/skill-bridge-ai',
    imageUrl: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Vehicle Pro Prototype',
    description: 'Advanced vehicle monitoring and diagnostic prototype utilizing real-time sensor data and predictive analysis.',
    techStack: ['Python', 'IoT', 'OpenCV', 'Streamlit'],
    githubUrl: 'https://github.com/lakhanladdha24/vehicle-pro',
    imageUrl: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=800',
  },
];

export const TIMELINE_DATA: TimelineItem[] = [
  {
    title: 'Ambassador / Lead',
    organization: 'Viral Fission',
    period: '2022 - Present',
    description: 'Spearheading community initiatives and digital marketing strategies for 2+ years.',
    type: 'project',
  },
  {
    title: 'B.Tech Computer Science',
    organization: 'Parul University',
    period: '2023 - Present',
    description: 'Focusing on core CS fundamentals, algorithms, and artificial intelligence.',
    type: 'education',
  },
  {
    title: 'AI/ML Specialization',
    organization: 'Self-Paced Learning',
    period: '2023 - 2027',
    description: 'Mastering NumPy, Pandas, Scikit-Learn, and basic neural network architectures.',
    type: 'certification',
  },
];
