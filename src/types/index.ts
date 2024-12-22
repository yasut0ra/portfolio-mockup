export interface Project {
  id: string;
  title: {
    en: string;
    ja: string;
  };
  description: {
    en: string;
    ja: string;
  };
  technologies: string[];
  imageUrl: string;
  demoUrl: string;
  githubUrl: string;
  contributions: {
    en: string[];
    ja: string[];
  };
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export type Language = 'en' | 'ja';