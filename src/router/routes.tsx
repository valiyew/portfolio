import { Route, Routes as Switch } from "react-router-dom";
import { HomeComponent } from "../pages/home/index";
import { AboutComponent } from "../pages/about";
import { ResumeComponent } from "../pages/resume";
import { PortfolioComponent } from "../pages/portfolio";
import ContactComponent from "../pages/contact/contactComponent";

function Routes() {
  return (
    <Switch>
      <Route path="" element={<HomeComponent />} />
      <Route path="/about" element={<AboutComponent />} />
      <Route path="/resume" element={<ResumeComponent />} />
      <Route path="/portfolio" element={<PortfolioComponent />} />
      <Route path="/contact" element={<ContactComponent />} />
    </Switch>
  );
}

export default Routes;
