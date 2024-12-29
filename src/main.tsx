import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import "antd/dist/reset.css";

import { LayoutComponent } from "./components";
import { PageComponent } from "./pages";

import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ConfigProvider>
    <BrowserRouter>
      <div
        style={{
          display: "flex",
        }}
      >
        <LayoutComponent />
        <PageComponent />
      </div>
    </BrowserRouter>
  </ConfigProvider>
);
