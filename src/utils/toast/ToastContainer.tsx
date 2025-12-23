import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Toast } from "./Toast";
import { ToastContext, type ToastContextType } from "./ToastContext";

type ToastItem = {
  id: string;
  type?: "success" | "error" | "info";
  message: string;
  duration?: number;
};

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const showToast: ToastContextType["showToast"] = (toast) => {
    const id = uuidv4();
    setToasts((prev) => [...prev, { ...toast, id }]);
  };

  const removeToast = (id: string) => setToasts((prev) => prev.filter((t) => t.id !== id));

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed top-5 right-5 flex flex-col gap-2 z-[9999]">
        {toasts.map((t) => (
          <Toast key={t.id} {...t} onClose={removeToast} />
        ))}
      </div>
    </ToastContext.Provider>
  );
};
