import { NavLink } from "react-router-dom";
import { sidebarTools } from "./tools";
import { BsTelegram } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

interface SidebarProps {
  closeSidebar?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ closeSidebar }) => {
  const { t } = useTranslation();
  return (
    <div className="h-full flex flex-col p-4 bg-(--gray-color) text-(--pale-sand)">
      <div className="flex items-center justify-center flex-col gap-3">
        <div className="w-[140px] h-[140px] rounded-full p-2 bg-(--bg-icon)">
          <img className="w-full h-full object-cover rounded-full" src="/jennie.jpg" alt="" />
        </div>
        <div className="flex items-center gap-2">
          <h1 className="text-[20px] font-medium text-(--text-white)">Davron Valiev</h1>
          <p className="text-[12px] font-medium text-(--text-primary)">/ {t("frontendDeveloper")}</p>
        </div>

        <div className="flex items-center justify-between gap-2">
          <a
            href="https://t.me/your_telegram"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-(--bg-icon) flex items-center justify-center w-[50px] h-[50px] cursor-pointer duration-300 hover:opacity-[0.8] rounded-full"
          >
            <BsTelegram className="text-[22px]" />
          </a>

          <a
            href="https://instagram.com/your_instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-(--bg-icon) flex items-center justify-center w-[50px] h-[50px] cursor-pointer duration-300 hover:opacity-[0.8] rounded-full"
          >
            <RiInstagramFill className="text-[22px]" />
          </a>

          <a
            href="https://linkedin.com/in/your_linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-(--bg-icon) flex items-center justify-center w-[50px] h-[50px] cursor-pointer duration-300 hover:opacity-[0.8] rounded-full"
          >
            <FaLinkedin className="text-[22px]" />
          </a>

          <a
            href="https://facebook.com/your_facebook"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-(--bg-icon) flex items-center justify-center w-[50px] h-[50px] cursor-pointer duration-300 hover:opacity-[0.8] rounded-full"
          >
            <FaFacebook className="text-[22px]" />
          </a>

          <a
            href="https://facebook.com/your_facebook"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-(--bg-icon) flex items-center justify-center w-[50px] h-[50px] cursor-pointer duration-300 hover:opacity-[0.8] rounded-full"
          >
            <FaGithub className="text-[22px]" />
          </a>
        </div>
      </div>

      <nav className="flex flex-col gap-2 mt-4">
        {sidebarTools.map((item) => (
          <NavLink
            to={item.link}
            key={item.label}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-md text-[18px] duration-300 transition-colors ${
                isActive ? "bg-(--pale-sand) font-semibold text-(--gray-color)" : "text-(--text-primary) hover:text-(--text-white)"
              }`
            }
            onClick={closeSidebar}
          >
            <span className="flex items-center gap-2">
              {item.icon} {t(item.label)}
            </span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
