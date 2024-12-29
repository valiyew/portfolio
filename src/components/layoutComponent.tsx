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

interface MenuItem {
  key: string;
  label: string;
  icon: React.ReactNode;
}

const items: MenuItem[] = [
  {
    key: "1",
    label: "Home",
    icon: <HomeOutlined />,
  },
  {
    key: "2",
    label: "About",
    icon: <UserOutlined />,
  },
  {
    key: "3",
    label: "Resume",
    icon: <FileTextOutlined />,
  },
  {
    key: "4",
    label: "Portfolio",
    icon: <PictureOutlined />,
  },
  {
    key: "5",
    label: "Contact",
    icon: <MailOutlined />,
  },
];

function LayoutComponent() {
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
      {items.map((item) => (
        <ul>
          <li>
            <span>{item.icon}</span>
            <span className="icon">{item.label}</span>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default LayoutComponent;
