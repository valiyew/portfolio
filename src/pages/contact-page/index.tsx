import React from "react";
import { useForm, Controller } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { MdEmail, MdPhone } from "react-icons/md";
import { BsTelegram } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useTranslation } from "react-i18next";

type ContactFormValues = {
  phone: string;
  message?: string;
};

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
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const ContactPage: React.FC = () => {
  const { t } = useTranslation();

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>();

  const onSubmit = (data: ContactFormValues) => {
    console.log("FORM DATA:", data);
    reset();
  };

  return (
    <div className="px-4 py-10 h-full overflow-auto">
      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        {/* TITLE */}
        <motion.section variants={containerVariants} className="mb-[40px]">
          <motion.h1 variants={itemVariants} className="text-[24px] font-bold">
            {t("contact")}
          </motion.h1>
          <motion.p variants={itemVariants} className="mt-6 text-[16px] text-(--gray-color) max-w-3xl">
            {t("contactDesc")}
          </motion.p>
        </motion.section>

        {/* CONTENT */}
        <motion.section variants={containerVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* LEFT CARD */}
          <motion.div variants={itemVariants} className="bg-(--gray-color) rounded-xl shadow-sm p-8 space-y-10">
            {/* CONTACT INFO */}
            <motion.div variants={containerVariants} className="space-y-6">
              <motion.div variants={itemVariants} className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-(--pale-sand) text-(--gray-color)">
                  <MdEmail size={22} />
                </div>
                <div>
                  <p className="text-sm text-(--pale-sand)">{t("email")}</p>
                  <a href="mailto:davronali84@gmail.com" className="font-medium text-(--pale-sand)">
                    davronali84@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-(--pale-sand) text-(--gray-color)">
                  <MdPhone size={22} />
                </div>
                <div>
                  <p className="text-sm text-(--pale-sand)">{t("phone")}</p>
                  <a href="tel:+998945690574" className="font-medium text-(--pale-sand)">
                    +998 94 569 05 74
                  </a>
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <p className="text-sm text-(--pale-sand) mb-3">{t("follow_me")}</p>
                <div className="flex gap-4 text-3xl">
                  <a href="https://t.me/valiyew" target="_blank" className="text-(--pale-sand)">
                    <BsTelegram />
                  </a>
                  <a href="https://instagram.com/" target="_blank" className="text-(--pale-sand)">
                    <RiInstagramFill />
                  </a>
                  <a href="https://linkedin.com/" target="_blank" className="text-(--pale-sand)">
                    <FaLinkedin />
                  </a>
                  <a href="https://github.com/valiyew" target="_blank" className="text-(--pale-sand)">
                    <FaGithub />
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* FORM */}
            <motion.form variants={containerVariants} onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* PHONE */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium mb-1 text-(--pale-sand)">{t("phone_number")} *</label>
                <Controller
                  name="phone"
                  control={control}
                  rules={{
                    required: t("phone_required"),
                  }}
                  render={({ field }) => (
                    <PhoneInput
                      {...field}
                      defaultCountry="UZ"
                      international
                      withCountryCallingCode
                      countrySelectProps={{
                        countries: ["UZ", "RU", "KZ", "PL", "UA", "GB", "US"],
                      }}
                      placeholder="+998901234567"
                      className="w-full px-4 py-2 text-(--pale-sand) border border-(--pale-sand) rounded-lg focus:outline-none focus:border-(--pale-sand)"
                      maxLength={17}
                    />
                  )}
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
              </motion.div>

              {/* MESSAGE */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium mb-1 text-(--pale-sand)">{t("message")}</label>
                <textarea
                  {...control.register("message")}
                  rows={4}
                  className="w-full px-4 py-2 text-(--pale-sand) border border-(--pale-sand) rounded-lg focus:outline-none focus:border-(--pale-sand)"
                  placeholder={t("your_message")}
                />
              </motion.div>

              {/* SUBMIT */}
              <motion.button
                variants={itemVariants}
                type="submit"
                className="w-full py-3 bg-(--pale-sand) text-(--gray-color) rounded-lg font-semibold transition-all duration-300 hover:opacity-90"
              >
                {t("send_message")}
              </motion.button>
            </motion.form>
          </motion.div>

          {/* MAP */}
          <motion.div variants={itemVariants} className="rounded-xl overflow-hidden border-4 border-(--gray-color) shadow-sm h-[600px]">
            <iframe
              title="location"
              src="https://www.google.com/maps?q=Tashkent,Uzbekistan&output=embed"
              className="w-full h-full border-none"
              style={{ filter: "invert(90%) hue-rotate(180deg)" }}
              loading="lazy"
            />
          </motion.div>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default ContactPage;
