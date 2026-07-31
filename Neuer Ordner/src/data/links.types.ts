export interface ProfileLink {
  id: string;
  title: string;
  url: string;
  image?: string;
  description?: string;
  published: boolean;
}

export const defaultProfileLinks: ProfileLink[] = [
  { id: 'website', title: 'Official website', url: '/', description: 'Discover Eddy Gaetan, host, moderator and speaker.', published: true },
  { id: 'instagram', title: 'Instagram', url: 'https://www.instagram.com/', description: 'Behind the scenes and moments on stage.', published: true },
  { id: 'linkedin', title: 'LinkedIn', url: 'https://www.linkedin.com/', description: 'Professional updates and collaborations.', published: true },
];