import React, { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { projects, type Project } from "@/data/projects";
import { useTranslation } from "react-i18next";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [imageIndex, setImageIndex] = useState(0);
  const { t } = useTranslation();

  type ProjectCategory = "corporate" | "crm";

  type Category = "all" | ProjectCategory;

  const categories: { key: Category; label: string }[] = [
    { key: "all", label: t("all") },
    { key: "corporate", label: t("corporotive") },
    { key: "crm", label: t("crm_erp") },
  ];

  // Filter logic
  const filteredProjects = activeCategory === "all" ? projects : projects.filter((p) => p.category === activeCategory);

  const nextImage = () => {
    if (!activeProject) return;
    setImageIndex((prev) => (prev === activeProject.images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    if (!activeProject) return;
    setImageIndex((prev) => (prev === 0 ? activeProject.images.length - 1 : prev - 1));
  };

  return (
    <div className="px-4 py-10 space-y-12">
      {/* Header */}
      <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.h1 variants={itemVariants} className="text-[24px] font-bold">
          {t("projects")}
        </motion.h1>

        <motion.p variants={itemVariants} className="mt-[40px] text-[16px] leading-relaxed">
          {t("projectsDesc")}
        </motion.p>
      </motion.section>

      {/* Categories */}
      <motion.section className="flex flex-wrap gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.6 }}>
        {categories.map((cat, idx) => (
          <motion.button
            key={cat.key}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + idx * 0.1, duration: 0.4 }}
            onClick={() => {
              setActiveCategory(cat.key);
            }}
            className={`
              px-6 py-2 rounded-full border text-sm font-medium
              transition-all duration-200 cursor-pointer
              ${activeCategory === cat.key ? "bg-(--pale-sand) text-(--gray-color) border-(--gray-color)" : "bg-(--gray-color) text-(--pale-sand) border-(--gray-color)"}
            `}
          >
            {cat.label}
          </motion.button>
        ))}
      </motion.section>

      {/* Projects Grid */}
      <AnimatePresence mode="wait">
        <motion.section key={activeCategory} variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                onClick={() => {
                  setActiveProject(project);
                  setImageIndex(0);
                }}
                className="bg-(--gray-color) rounded-xl overflow-hidden shadow-lg cursor-pointer
                  hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              >
                <img src={project.images[0]} alt={project.title} className="h-56 w-full object-cover" />

                <div className="p-5 space-y-2">
                  <span className="text-[8px] uppercase tracking-wide text-(--pale-sand)">{project.category}</span>
                  <h3 className="text-[14px] font-bold text-(--pale-sand)">{project.title}</h3>
                  <p className="text-(--pale-sand) text-[12px]">{project.description}</p>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div variants={itemVariants} className="col-span-full text-center py-12">
              <p className="text-(--gray-color)">No projects found in this category</p>
            </motion.div>
          )}
        </motion.section>
      </AnimatePresence>

      {/* Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              className="bg-slate-800 max-w-4xl w-full rounded-xl overflow-hidden relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 z-10 bg-slate-900 text-white p-2 rounded-full 
                  shadow-lg hover:bg-slate-700 transition-colors"
              >
                <X size={22} />
              </button>

              {/* Image Slider */}
              <div className="relative h-96 bg-slate-900">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={imageIndex}
                    src={activeProject.images[imageIndex]}
                    alt={activeProject.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.4 }}
                  />
                </AnimatePresence>

                {activeProject.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-slate-900/80 text-white 
                        p-2 rounded-full shadow-lg hover:bg-slate-800 transition-colors"
                    >
                      <ChevronLeft size={24} />
                    </button>

                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-slate-900/80 text-white 
                        p-2 rounded-full shadow-lg hover:bg-slate-800 transition-colors"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-3">
                <span className="uppercase tracking-wide text-blue-400 text-xs font-semibold">{activeProject.category}</span>
                <h2 className="text-xl font-bold text-white">{activeProject.title}</h2>
                <p className="text-slate-400 text-sm leading-relaxed">{activeProject.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
