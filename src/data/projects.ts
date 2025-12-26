export type ProjectCategory = "corporate" | "crm";

export interface Project {
  id: number;
  title: string;
  description: string;
  category: ProjectCategory;
  link: string;
  images: string[];
}

export const projects: Project[] = [
  // Corporate website
  {
    id: 1,
    title: "Dachatop.uz",
    description:
      "Dachatop.uz is an online platform for finding and booking vacation houses, apartments, hotels, and mountain resorts across Uzbekistan. Users can select locations, check availability via a calendar, view photos, and book accommodations without intermediaries. The platform also offers domestic tourism options such as travel packages, mountain recreation, and extreme tours, while enabling property owners to list and rent out their properties online.",
    category: "corporate",
    link: "https://dachatop.uz/",
    images: ["/dacha-1.png", "/dacha-2.png", "/dacha-3.png", "/dacha-4.png", "/dacha-5.png", "/dacha-6.png"],
  },
  {
    id: 3,
    title: "Timeedu.uz",
    description:
      "A modern educational platform representing Tashkent Management and Economics Institute, offering quality higher education in management, economics, IT, and social sciences with a strong focus on innovation and practical skills.",
    category: "corporate",
    link: "https://timeedu.uz/",
    images: ["/tmi-1.png", "/tmi-2.png", "/tmi-3.png", "/tmi-4.png", "/tmi-5.png"],
  },
  {
    id: 4,
    title: "Agraf Steel",
    description:
      "Agraf Steel is a manufacturer/seller of metal-based suspended ceilings and design panels in the Uzbek market. Their products are often installed in offices, shopping malls, residential and commercial buildings.",
    category: "corporate",
    link: "https://agrafsteel.com/",
    images: ["/graf-1.png", "/graf-2.png", "/graf-3.png", "/graf-4.png", "/graf-5.png", "/graf-6.png"],
  },
  // CRM / ERP
  {
    id: 2,
    title: "ERP Management System",
    description: "Enterprise resource planning system built with Vue 3 and Ant Design.",
    category: "crm",
    link: "",
    images: ["/jennie.jpg", "/jennie.jpg"],
  },
];
