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
  id: string;
  icon: string;
  name: string;
  level: string;
}

export interface CodeLineItem {
  lineNum: number;
  isKeyword?: boolean;
  isType?: boolean;
  isString?: boolean;
  isComment?: boolean;
  isMethod?: boolean;
  content: string;
  indent?: number;
}

export interface PortfolioData {
  projects: Project[];
  experiences: ExperienceItem[];
  skills: SkillItem[];
  mainSwiftCode: CodeLineItem[];
}
