import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect } from "react";
import { PiSealWarningFill, PiCheckCircleFill, PiInfoFill } from "react-icons/pi";

type ToastProps = {
  id: string;
  type?: "success" | "error" | "info";
  message: string;
  duration?: number;
  onClose: (id: string) => void;
};

const typeColors: Record<NonNullable<ToastProps["type"]>, string> = {
  success: "bg-(--gray-color) text-(--pale-sand) border border-(--pale-sand)",
  info: "bg-[#FFFBEB] text-[#F59E0B] border border-[#F59E0f]",
  error: "bg-(--gray-color) text-(--pale-sand) border border-(--pale-sand)",
};

const typeIcons = {
  success: <PiCheckCircleFill className="mr-2" />,
  info: <PiInfoFill className="mr-2" />,
  error: <PiSealWarningFill className="mr-2" />,
};

export const Toast: React.FC<ToastProps> = ({ id, type = "info", message, duration = 3000, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => onClose(id), duration);
    return () => clearTimeout(timer);
  }, [id, duration, onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className={`fixed left-1/2 -translate-x-1/2 py-2 px-4 rounded-[10px] shadow-md flex items-center w-auto max-w-md ${typeColors[type]}`}
        style={{ top: "30px" }}
      >
        {typeIcons[type]}
        <span className="whitespace-normal break-words">{message}</span>
      </motion.div>
    </AnimatePresence>
  );
};
