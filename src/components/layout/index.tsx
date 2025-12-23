import React, { useState } from "react";
import Sidebar from "../sidebar";
import { Outlet } from "react-router-dom";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import SwitchLanguages from "../switch-languages";

const Layout: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-(--pale-sand)">
      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-full w-80 z-50
          bg-bg-primary text-text-white
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          xl:translate-x-0 xl:static xl:block
        `}
      >
        <Sidebar closeSidebar={() => setIsOpen(false)} />
      </div>

      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-40 xl:hidden" onClick={() => setIsOpen(false)} />}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-auto">
        {/* Burger Button */}
        <button
          className="cursor-pointer xl:hidden fixed top-[5px] right-4 z-50 text-2xl text-(--text-white) p-2 bg-bg-primary rounded-md shadow-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX className="text-(--text-white)" /> : <HiOutlineMenu className="text-(--text-white)" />}
        </button>

        <div className="cursor-pointer fixed top-[10px] z-40 right-[60px] xl:right-[10px] ">
          <SwitchLanguages />
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
