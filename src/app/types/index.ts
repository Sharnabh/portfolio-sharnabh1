export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  platform: string;
  language: string;
  technologies: string[];
  role: string;
  status: string;
  linkType: "Github" | "AppStore";
  linkUrl: string;
  imageUrl?: string;
  fallbackClass: string;
  fallbackIcon: string;
  size: "large" | "small";
}

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  period: string;
  achievements: string[];
  tags: string[];
}

export interface SkillItem {
  name: string;
  icon: string;
  level: string;
}

export interface ShippedProductMetrics {
  totalDownloads: string;
  avgRating: string;
  activeUsers: string;
  liveApps: string;
}

export interface ShippedProductItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  rating: string;
  ratingsCount: string;
  tags: string[];
  hasDownloads: boolean;
  icon: string;
  buttonText: string;
  linkUrl?: string;
}

export interface ShippedProductsData {
  metrics: ShippedProductMetrics;
  products: ShippedProductItem[];
  codePreview: string;
}

export interface ProfileInfo {
  name: string;
  role: string;
  location?: string;
  experienceSummary?: string;
  experienceLabel?: string;
  bio: string;
  coreTechnologies?: string[];
  linkedinUrl?: string;
  resumeUrl?: string;
  lastUpdated: string;
}

export interface PortfolioData {
  profile: ProfileInfo;
  projects: Project[];
  experience: ExperienceItem[];
  skills: SkillItem[];
  shippedProducts: ShippedProductsData;
}
