import { NavLink } from "react-router-dom";
import { sidebarTools } from "./tools";
import { BsTelegram } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
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
            href="https://t.me/valiyew"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-(--bg-icon) flex items-center justify-center w-[50px] h-[50px] cursor-pointer duration-300 hover:opacity-[0.8] rounded-full"
          >
            <BsTelegram className="text-[22px]" />
          </a>

          <a
            href="https://www.instagram.com/valiyew_/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-(--bg-icon) flex items-center justify-center w-[50px] h-[50px] cursor-pointer duration-300 hover:opacity-[0.8] rounded-full"
          >
            <RiInstagramFill className="text-[22px]" />
          </a>

          <a
            href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHeFj3fpDQMfQAAAZte1eIQf9v8Y_BpM28entg4Kk-E-Zt6MH_vOAovH8kxyyB_12BQ24Fvy9xnxGfwp1FoUHKtjcGWF-wLHs7xA_7XyD7YvLLonkl-FXgFRlulAhTJCTJ7Epg=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fdavronali-valiyev-107867282%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dios_app"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-(--bg-icon) flex items-center justify-center w-[50px] h-[50px] cursor-pointer duration-300 hover:opacity-[0.8] rounded-full"
          >
            <FaLinkedin className="text-[22px]" />
          </a>

          <a
            href="https://github.com/valiyew"
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
