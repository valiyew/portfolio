import { useTranslation } from "react-i18next";
import { IoChevronForward } from "react-icons/io5";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

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
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const AboutPage = () => {
  const { t } = useTranslation();

  const aboutMe = [
    { id: 1, title: t("address"), description: "Uzbekistan, Tashkent" },
    { id: 1, title: t("address_born"), description: "Uzbekistan, Andijan" },
    { id: 1, title: t("birthday"), description: "6 May 2005" },
    { id: 2, title: t("age"), description: "20" },
    { id: 3, title: t("phone"), description: "+998 94 569 05 74" },
    { id: 4, title: t("email"), description: "davronali84@gmail.com" },
  ];

  return (
    <div className="px-4 py-10 space-y-20">
      {/* ABOUT */}
      <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.h1 variants={itemVariants} className="text-[24px] font-bold">
          {t("about")}
        </motion.h1>

        <motion.p variants={itemVariants} className="mt-[40px] text-[16px] leading-relaxed">
          {t("aboutMeDesc")}
        </motion.p>
      </motion.section>

      {/* IMAGE + INFO */}
      <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <motion.div variants={itemVariants}>
          <img className="w-full h-full object-cover rounded-[12px] border-6 border-(--gray-color)" src="/logo-img.jpg" alt="profile" />
        </motion.div>

        <motion.div variants={containerVariants} className="flex flex-col gap-5">
          <motion.h2 variants={itemVariants} className="text-[18px] font-bold text-(--text-black)">
            {t("frontendDeveloper")}
          </motion.h2>

          <motion.p variants={itemVariants} className="text-[14px] italic">
            {t("homeTitleAboutDev")}
          </motion.p>

          <motion.div variants={containerVariants} className="grid grid-cols-1 gap-4 mt-4">
            {aboutMe.map((item) => (
              <motion.div key={item.id} variants={itemVariants} className="flex gap-2 items-center">
                <IoChevronForward className="text-(--gray-color)" />
                <h3 className="font-bold text-[14px] text-(--text-black)">{item.title}:</h3>
                <p className="text-[14px] text-(--text-gray)">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>

      {/* BOTTOM TEXT */}
      <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.p variants={itemVariants} className="text-[16px] leading-relaxed">
          {t("aboutMeDesc2")}
        </motion.p>
      </motion.section>
    </div>
  );
};

export default AboutPage;
