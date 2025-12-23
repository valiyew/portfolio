import { useEffect } from "react";
import { motion, useAnimation, type Variants } from "framer-motion";
import { BsTelegram } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const letterContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const letterFromLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const letterFromRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const HomePage = () => {
  const { t } = useTranslation();
  const firstName = "Davron";
  const lastName = "Valiyev";

  const controls = useAnimation();

  useEffect(() => {
    const animate = async () => {
      while (true) {
        await controls.start("visible");
        await new Promise((res) => setTimeout(res, 3000));
        await controls.start("hidden");
      }
    };
    animate();
  }, [controls]);

  // Davron harflarini n dan boshlash uchun arrayni qaytarib olamiz
  const firstNameReversed = firstName.split("");

  return (
    <div className="w-full h-screen bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: "url('/jennie.jpg')" }}>
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="flex gap-4 text-5xl md:text-6xl font-bold mb-4">
          {/* Davron - n dan boshlash */}
          <motion.span className="flex" variants={letterContainer} initial="hidden" animate={controls}>
            {firstNameReversed.map((char, idx) => (
              <motion.span key={idx} variants={letterFromLeft} className="inline-block">
                {char}
              </motion.span>
            ))}
          </motion.span>

          {/* Valiyev - normal tartibda */}
          <motion.span className="flex" variants={letterContainer} initial="hidden" animate={controls}>
            {lastName.split("").map((char, idx) => (
              <motion.span key={idx} variants={letterFromRight} className="inline-block">
                {char}
              </motion.span>
            ))}
          </motion.span>
        </h1>

        {/* Subtitle */}
        <motion.p className="text-xl md:text-2xl italic mb-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5, duration: 1.5 }}>
          {t("homeTitleAboutDev")}
        </motion.p>

        {/* Socials */}
        <motion.div className="flex gap-4 mt-8 text-3xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
          <a href="https://t.me/" target="_blank" className="hover:text-(--pale-sand)">
            <BsTelegram />
          </a>
          <a href="https://instagram.com/" target="_blank" className="hover:text-(--pale-sand)">
            <RiInstagramFill />
          </a>
          <a href="https://linkedin.com/" target="_blank" className="hover:text-(--pale-sand)">
            <FaLinkedin />
          </a>
          <a href="https://github.com/" target="_blank" className="hover:text-(--pale-sand)">
            <FaGithub />
          </a>
        </motion.div>

        {/* Scroll Icon */}
        <motion.div className="absolute bottom-10" animate={{ y: [0, 12, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <span className="text-2xl">&#x21e3;</span>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
