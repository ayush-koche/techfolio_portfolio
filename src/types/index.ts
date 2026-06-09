export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubLink?: string; // '?' ka matlab hai ye optional hai
  demoLink?: string; // '?' optional
  trailheadLink?: string; // '?' optional (Sirf Salesforce ke liye)
}
