import { useEffect } from "react";
import { QueryClientProvider } from "react-query";
import Router from "./router/index";
import { queryClient } from "./service/query-client/index";
import { ToastProvider } from "./utils/toast/ToastContainer";
import AOS from "aos";
import "aos/dist/aos.css";
import "./i18n";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
        <Router />
      </ToastProvider>
    </QueryClientProvider>
  );
}

export default App;
