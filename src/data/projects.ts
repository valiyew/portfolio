export type ProjectCategory = "corporate" | "crm" | "support_maintenance";

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
    id: 2,
    title: "Agraf Steel",
    description:
      "Agraf Steel is a manufacturer/seller of metal-based suspended ceilings and design panels in the Uzbek market. Their products are often installed in offices, shopping malls, residential and commercial buildings.",
    category: "corporate",
    link: "https://agrafsteel.com/",
    images: ["/graf-1.png", "/graf-2.png", "/graf-3.png", "/graf-4.png", "/graf-5.png", "/graf-6.png"],
  },
  {
    id: 3,
    title: "Ptech.uz",
    description:
      "Technology company in Tashkent: digitalization, automation and equipment integration. Comprehensive solutions and technical support for your business development. We cooperate with companies from the CIS, Europe and Russia.",
    category: "corporate",
    link: "https://ptech.uz/",
    images: ["/ptech-1.png", "/ptech-2.png", "/ptech-3.png", "/ptech-4.png", "/ptech-5.png", "/ptech-6.png"],
  },
  {
    id: 4,
    title: "Adkhamov Restaurant",
    description:
      "Adkhamov Group is an international hospitality consulting company specializing in restaurant and hotel development, brand creation, and business optimization across multiple countries.",
    category: "corporate",
    link: "https://adkhamov.com/",
    images: ["/restaurant-1.png", "/restaurant-2.png", "/restaurant-3.png", "/restaurant-4.png", "/restaurant-5.png", "/restaurant-6.png", "/restaurant-7.png"],
  },
  {
    id: 5,
    title: "Ula.uz",
    description:
      "At the initiative of Uzbek Leasing International A.O. and many other lessors—leasing companies and commercial banks—the Uzbekistan Leasing Association was established and officially registered by the Ministry of Justice of the Republic of Uzbekistan on April 15, 2005. The Association's mission is to expand and actively develop the leasing market in Uzbekistan.",
    category: "corporate",
    link: "https://ula.uz/",
    images: ["/ula-1.png", "/ula-2.png", "/ula-3.png", "/ula-4.png", "/ula-5.png"],
  },

  // Support & Maintenance
  {
    id: 6,
    title: "Timeedu.uz",
    description:
      "A modern educational platform representing Tashkent Management and Economics Institute, offering quality higher education in management, economics, IT, and social sciences with a strong focus on innovation and practical skills.",
    category: "support_maintenance",
    link: "https://timeedu.uz/",
    images: ["/tmi-1.png", "/tmi-2.png", "/tmi-3.png", "/tmi-4.png", "/tmi-5.png"],
  },
  {
    id: 7,
    title: "Hajtex.com",
    description:
      "Specializing in the production of high-quality products and having a reliable reputation, we adhere to the 'Cotton Cluster Economy' concept, which consists of responsible cotton cultivation and deep processing of its components.",
    category: "support_maintenance",
    link: "https://hajtex.com/",
    images: ["/hajtex-1.png", "/hajtex-2.png", "/hajtex-3.png", "/hajtex-4.png", "/hajtex-5.png", "/hajtex-6.png", "/hajtex-7.png"],
  },
  {
    id: 8,
    title: "Pga.uz",
    description:
      "The plant's capacity is 10,000 tons of polyethylene pipes per year. Our specialists carry out design, research and engineering work on the installation, assembly and laying of hot and cold water supply, heating, sewage, heating mains and drainage systems.Our association has a wide network of partners in the Republic of Uzbekistan. Since 2009, we have been actively working in Central Asia and the CIS countries.",
    category: "support_maintenance",
    link: "https://hajtex.com/",
    images: ["/pga-1.png", "/pga-2.png", "/pga-3.png", "/pga-4.png", "/pga-5.png"],
  },
  {
    id: 9,
    title: "Triomed.uz",
    description:
      "Triomed LLC is the official distributor in Uzbekistan of leading international companies specializing in medical technologies, services, and solutions, including APT Medical, Terumo, Microport, Insight LifeTech, Lepu Medical, Electronmash Plant, WilCon, Honghu, ECO Medical, FulBright, Phenox, Medprin, and Pharmamed. Our products help improve the lives and health of millions of people every year. Our mission is to contribute to improving the quality of healthcare for all people across the country. By partnering with Triomed, you gain access to modern and convenient medical solutions and provide your patients with the best treatment options.",
    category: "support_maintenance",
    link: "https://triomed.uz/",
    images: ["/triomed-1.png", "/triomed-2.png", "/triomed-3.png", "/triomed-4.png", "/triomed-5.png", "/triomed-6.png", "/triomed-7.png", "/triomed-8.png"],
  },

  // CRM / ERP
];
