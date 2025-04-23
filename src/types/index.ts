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
}

export interface Achievement {
  id: number;
  title: string;
  description: string;
  date: string;
}

export interface SocialLink {
  id: number;
  platform: string;
  url: string;
  icon: string;
}