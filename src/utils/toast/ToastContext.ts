import { createContext, useContext } from "react";

export type ToastContextType = {
  showToast: (toast: { type?: "success" | "error" | "info"; message: string; duration?: number }) => void;
};

export const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast must be used within ToastProvider");
  return context;
};
