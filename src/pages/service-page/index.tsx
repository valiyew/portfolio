import { IoCodeSlash, IoColorPalette, IoPhonePortrait } from "react-icons/io5";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useTranslation } from "react-i18next";
import { MdAdminPanelSettings } from "react-icons/md";

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

const ServicePage = () => {
  const { t } = useTranslation();

  const services = [
    {
      id: 1,
      icon: <IoCodeSlash className="text-[40px] text-(--text-blue)" />,
      title: "Web Development",
      description: "Modern, fast and responsive websites built with React, Vue and modern frontend tools.",
    },
    {
      id: 2,
      icon: <IoColorPalette className="text-[40px] text-(--text-blue)" />,
      title: "UI/UX Design",
      description: "Beautiful, user-friendly interfaces designed with attention to detail.",
    },
    {
      id: 3,
      icon: <IoPhonePortrait className="text-[40px] text-(--text-blue)" />,
      title: "Mobile Responsive",
      description: "Adaptable designs that look perfect on phones, tablets and desktops.",
    },
    {
      id: 4,
      icon: <MdAdminPanelSettings className="text-[40px] text-(--text-blue)" />,
      title: "CRM/ERP platforms",
      description: "Service of creating convenient and high-quality Crm/Erp platforms for your business.",
    },
  ];

  return (
    <motion.div className="px-4 py-10 space-y-20 h-full overflow-auto" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
      {/* HEADER */}
      <motion.section variants={itemVariants}>
        <h1 className="text-(--bg-primary) text-[24px] font-bold">{t("service")}</h1>

        <p className="text-(--gray-color) mt-[40px] text-[16px] leading-relaxed">{t("serviceDesc")}</p>
      </motion.section>

      {/* SERVICES GRID */}
      <motion.section className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants}>
        {services.map((service) => (
          <motion.div
            key={service.id}
            variants={itemVariants}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="p-6 bg-(--gray-color) cursor-pointer rounded-xl shadow-xl hover:shadow-2xl"
          >
            <div className="flex flex-col items-center text-center gap-4">
              {service.icon}
              <h3 className="text-[15px] font-bold text-(--pale-sand)">{service.title}</h3>
              <p className="text-[13px] text-(--pale-sand)">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.section>
    </motion.div>
  );
};

export default ServicePage;
