import React from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  image: string;
  chapter: string; // Roman numeral
}

export interface Skill {
  category: string;
  items: string[];
  icon: React.ReactNode;
}

export enum ChapterType {
  PROLOGUE = 'prologue',
  LEXICON = 'lexicon', // Skills
  EXPERIENCE = 'experience', // Work History
  ANTHOLOGY = 'anthology', // Projects
  EDUCATION = 'education', // Education
  EPILOGUE = 'epilogue', // Contact
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}