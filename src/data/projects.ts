export type ProjectCategory = "corporate" | "crm";

export interface Project {
  id: number;
  title: string;
  description: string;
  category: ProjectCategory;
  images: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Corporate Website",
    description: "Modern corporate website with responsive UI and SEO optimization.",
    category: "corporate",
    images: ["/jennie.jpg", "/jennie.jpg", "/jennie.jpg"],
  },
  {
    id: 2,
    title: "ERP Management System",
    description: "Enterprise resource planning system built with Vue 3 and Ant Design.",
    category: "crm",
    images: ["/jennie.jpg", "/jennie.jpg"],
  },
  {
    id: 3,
    title: "Business Landing Page",
    description: "High-conversion landing page for business marketing.",
    category: "corporate",
    images: ["/jennie.jpg", "/jennie.jpg"],
  },
];
