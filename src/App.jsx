import React from "react";
import CenteredImage from "./components/CenteredImage";
import "./index.css"; // Import Tailwind CSS
import ContentSection from "./components/content/ContentSection";
import GlobalCulling from "./components/content/GlobalCulling";
import FreakSolar from "./components/content/FreakSolar";
import DoubleSolutions from "./components/content/DoubleSolutions";
import TaskForcesPseudoSciences from "./components/content/TaskForcesPseudoSciences";
import CalmCarryOn from "./components/content/CalmCarryOn";
import FinalCall from "./components/content/FinalCall";
import DevelopmentSchedules from "./components/content/DevelopmentSchedules";
import ManufacturingConstructions from "./components/content/ManufacturingConstructions";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div>
      <CenteredImage />
      <ContentSection />
      <GlobalCulling />
      <FreakSolar />
      <DoubleSolutions />
      <CalmCarryOn />
      <TaskForcesPseudoSciences />
      <FinalCall />
      <ManufacturingConstructions />
      <DevelopmentSchedules />
      <ContactForm />
    </div>
  );
}

export default App;
