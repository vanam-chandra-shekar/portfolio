export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface Certificate {
  id: number;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  url?: string;
  image?: string; // Added image field
}

export interface Achievement {
  id: number;
  title: string;
  description: string;
  date: string;
  image?: string; // Added image field
}

export interface SocialLink {
  id: number;
  platform: string;
  url: string;
  icon: string;
}