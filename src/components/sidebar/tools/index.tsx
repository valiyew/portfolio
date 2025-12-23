import { PiHouse, PiUser } from "react-icons/pi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { LuGalleryHorizontal } from "react-icons/lu";
import { MdOutlineContactless } from "react-icons/md";
import { GrServices } from "react-icons/gr";

export const sidebarTools = [
  {
    id: 1,
    label: "home",
    icon: <PiHouse />,
    link: "/",
  },
  {
    id: 2,
    label: "about",
    icon: <PiUser />,
    link: "/about",
  },
  {
    id: 3,
    label: "resume",
    icon: <IoDocumentTextOutline />,
    link: "/resume",
  },
  {
    id: 4,
    label: "projects",
    icon: <LuGalleryHorizontal />,
    link: "/projects",
  },
  {
    id: 5,
    label: "service",
    icon: <GrServices />,
    link: "/service",
  },
  {
    id: 6,
    label: "contact",
    icon: <MdOutlineContactless />,
    link: "/contact",
  },
];
