import { QueryClientProvider } from "react-query";
import Router from "./router/index";
import { queryClient } from "./service/query-client/index";
import { ToastProvider } from "./utils/toast/ToastContainer";
import "aos/dist/aos.css";
import "./i18n";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
        <Router />
      </ToastProvider>
    </QueryClientProvider>
  );
}

export default App;
