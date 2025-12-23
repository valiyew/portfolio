import { useTranslation } from "react-i18next";
import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const ResumePage = () => {
  const { t } = useTranslation();

  const personalInfo = [
    { label: t("fullName"), value: "Davron Valiev" },
    { label: t("birthdate"), value: "2005.05.06" },
    { label: t("github"), value: "https://github.com/valiyew" },
    { label: t("linkedin"), value: "https://linkedin.com/in/valiyew" },
    { label: t("email"), value: "davronali84@gmail.com" },
    { label: t("telegram"), value: "https://t.me/valiyew" },
    { label: t("phone"), value: "+998 94 569 05 74" },
    { label: t("address"), value: "Uzbekistan, Tashkent" },
  ];

  const education = [
    {
      title: "PDP Academy, Tashkent",
      period: "Jan. 2024 - May. 2024",
      description: t("educationDesc"),
    },
  ];

  const experience = [
    {
      title: "NDC (National Development Community)",
      period: "Feb 2025 - Present",
      description: `Developed and maintained responsive web applications using Vue.js and Nuxt.js.
Collaborated with backend developers to integrate RESTful APIs.
Implemented reusable UI components with modern JavaScript and TypeScript.
Used Pinia and Vuex for state management and optimized component performance.
Participated in code reviews, daily standups, and sprint planning meetings.
Ensured cross-browser compatibility and mobile responsiveness.`,
    },
    {
      title: "Timeedu (Tashkent Management & Economics University)",
      period: "Sept. 2022 - Sept. 2023",
      description: `Increased the speed of the site by 2x by removing unnecessary libraries in Nuxt 3.
Focused on SEO performance.`,
    },
    {
      title: "ICAN Group",
      period: "Oct. 2023 - Jan. 2024",
      description: `Built responsive UI with HTML5, JavaScript, TypeScript, Vue3.
Integrated REST APIs for client communication via Telegram bot and phone calls.
Used ANTD Design for styling and enhancing user experience.`,
    },
    {
      title: "Freelancer / Joy-top Project",
      period: "Feb 2024 - May 2024",
      description: `Developed modern web applications for a dual-purpose luxury project (residential + hotel).
Built responsive UI to enhance client experience.
Integrated Telegram bot and real-time communication features.
Added booking functionality for hotel and cottages.`,
    },
  ];

  const skills = [
    "JavaScript",
    "Vue.js",
    "Nuxt.js",
    "React.js",
    "Next.js",
    "TypeScript",
    "Firebase",
    "Tailwind",
    "Rest API",
    "Shadcn.ui",
    "Material UI",
  ];

  const languages = [
    { name: "Uzbek", level: "Native" },
    { name: "English", level: "A2" },
    { name: "Russian", level: "A1" },
    { name: "German", level: "B1" },
  ];

  return (
    <motion.div className="px-6 py-10 space-y-15" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
      {/* HEADER */}
      <motion.section variants={itemVariants} className="pb-2 border-b-2 border-(--gray-color)">
        <h1 className="text-[24px] font-bold">{t("resume")}</h1>
        <p className="mt-[40px] text-[16px] leading-relaxed">{t("resumeDesc")}</p>
      </motion.section>

      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-[40px]">
        {/* PERSONAL INFO */}
        <motion.section variants={itemVariants}>
          <h1 className="text-[24px] font-bold border-b-2 border-(--gray-color) pb-2 w-[140px]">{t("personal")}</h1>

          <div className="grid gap-3 mt-6">
            {personalInfo.map((info, i) => (
              <motion.div key={i} variants={itemVariants} className="flex gap-2 items-center">
                <span className="font-semibold w-[140px] text-[14px] text-(--gray-color)">{info.label}:</span>
                <a href={info.value.startsWith("http") ? info.value : undefined} target="_blank" rel="noopener noreferrer" className="text-(--text-gray) text-[14px]">
                  {info.value}
                </a>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* EDUCATION & LANGUAGES */}
        <motion.div variants={containerVariants} className="flex flex-col gap-10">
          <motion.section variants={itemVariants}>
            <h1 className="text-[24px] font-bold border-b-2 border-(--gray-color) w-[120px] pb-2">{t("education")}</h1>

            <div className="mt-6 space-y-6">
              {education.map((edu, i) => (
                <motion.div key={i} variants={itemVariants} className="border-l-2 border-(--gray-color) pl-4">
                  <h3 className="text-[14px] font-bold text-(--gray-color)">{edu.title}</h3>
                  <span className="text-gray-500 text-[12px]">{edu.period}</span>
                  <p className="text-gray-600 text-[14px] mt-2">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section variants={itemVariants}>
            <h1 className="text-[24px] font-bold border-b-2 border-(--gray-color) w-[140px] pb-2">{t("languages")}</h1>

            <div className="grid gap-3 mt-6">
              {languages.map((lang, i) => (
                <motion.div key={i} variants={itemVariants} className="flex items-center gap-3">
                  <span className="font-semibold w-[80px] text-[14px] text-(--gray-color)">{lang.name}:</span>
                  <span className="px-4 py-2 bg-(--gray-color) rounded-lg text-(--pale-sand) text-[13px]">{lang.level}</span>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </motion.div>
      </div>

      {/* EXPERIENCE */}
      <motion.section variants={containerVariants}>
        <motion.h1 variants={itemVariants} className="text-[24px] font-bold border-b-2 border-(--gray-color) w-[240px] pb-2">
          {t("experience")}
        </motion.h1>

        <div className="mt-6 space-y-6">
          {experience.map((exp, i) => (
            <motion.div key={i} variants={itemVariants} className="border-l-2 border-(--gray-color) pl-4">
              <h3 className="text-[14px] font-bold text-(--gray-color)">{exp.title}</h3>
              <span className="text-gray-500 text-[12px]">{exp.period}</span>
              <p className="text-gray-600 whitespace-pre-line text-[14px] mt-2">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* SKILLS */}
      <motion.section variants={containerVariants}>
        <motion.h1 variants={itemVariants} className="text-[24px] font-bold border-b-2 border-(--gray-color) w-[100px] pb-2">
          {t("skills")}
        </motion.h1>

        <div className="grid grid-cols-5 max-md:grid-cols-2 gap-3 mt-6">
          {skills.map((skill, i) => (
            <motion.div key={i} variants={itemVariants} className="px-4 py-2 bg-(--gray-color) rounded-lg text-(--pale-sand) text-[13px]">
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
};

export default ResumePage;
