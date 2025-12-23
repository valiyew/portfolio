import Layout from "@/components/layout";
import AboutPage from "@/pages/about-page";
import ContactPage from "@/pages/contact-page";
import HomePage from "@/pages/home-page";
import PortfolioPage from "@/pages/projects-page";
import ResumePage from "@/pages/resume-page";
import ServicePage from "@/pages/service-page";
import { Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="service" element={<ServicePage />} />
        <Route path="resume" element={<ResumePage />} />
        <Route path="projects" element={<PortfolioPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
};

export default Router;
