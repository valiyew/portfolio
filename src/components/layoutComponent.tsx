import {
  MailOutlined,
  PictureOutlined,
  FileTextOutlined,
  UserOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { FaTelegramPlane } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";

import myImg from "../assets/IMG_20240827_000115_307.jpg";

import "./layout.css";
import { useNavigate } from "react-router-dom";

interface MenuItem {
  key: string;
  label: string;
  path: string;
  icon: React.ReactNode;
}

const items: MenuItem[] = [
  {
    key: "1",
    label: "Home",
    path: "/",
    icon: <HomeOutlined />,
  },
  {
    key: "2",
    label: "About",
    path: "/about",
    icon: <UserOutlined />,
  },
  {
    key: "3",
    label: "Resume",
    path: "/resume",
    icon: <FileTextOutlined />,
  },
  {
    key: "4",
    label: "Portfolio",
    path: "/portfolio",
    icon: <PictureOutlined />,
  },
  {
    key: "5",
    label: "Contact",
    path: "/contact",
    icon: <MailOutlined />,
  },
];

function LayoutComponent() {
  const navigate = useNavigate();

  return (
    <div className="layout-menu">
      <div className="avatar">
        <div className="avatarBg">
          <img src={myImg} alt="" />
        </div>
        <span>Davron Valiyev</span>
        <ul>
          <a href="https://www.instagram.com/valiyew_?igsh=MXhxejc2a3RjNDI0aA==">
            <li>
              <BsInstagram />
            </li>
          </a>
          <a href="https://www.linkedin.com/in/davronali-valiyev-107867282/">
            <li>
              <SiLinkedin />
            </li>
          </a>
          <a href="https://t.me/valiyew">
            <li>
              <FaTelegramPlane />
            </li>
          </a>
          <a href="https://www.facebook.com/share/15HAMF5WoA/">
            <li>
              <FaFacebook />
            </li>
          </a>
        </ul>
      </div>
      {items.length > 0 && (
        <ul>
          {items.map((item) => (
            <li onClick={() => navigate(item.path)} key={item.key}>
              <span>{item.icon}</span>
              <span className="icon">{item.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LayoutComponent;
