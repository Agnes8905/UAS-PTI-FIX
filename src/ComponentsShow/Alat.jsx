import React, { useState } from "react";
import "../alat.css";
import angklung from "../assets/alatMusik/angklung.png";
import suling from "../assets/alatMusik/suling.png";
import karinding from "../assets/alatMusik/karinding.png";

const Alat = () => {
  const [activeSection, setActiveSection] = useState("");

  const handleSectionClick = (sectionId) => {
    setActiveSection((prevSection) => (prevSection === sectionId ? "" : sectionId));
  };

  return (
    <div className="w-full flex justify-center md:mt-20 mt-40">
        <div className={`borderAlat ${activeSection ? "activeAlat" : ""}`}>
      <h1>Alat Musik</h1>
      <div className="containerAlat">
        <div className="isiContainerAlat">
          <div className="gambarAlat" onClick={() => handleSectionClick("angklung")}>
            <img src={angklung} alt="Angklung" />
          </div>
          <div className="gambarAlat" onClick={() => handleSectionClick("suling")}>
            <img src={suling} alt="Suling" />
          </div>
          <div className="gambarAlat" onClick={() => handleSectionClick("karinding")}>
            <img src={karinding} alt="Karinding" />
          </div>
        </div>
        <div className={`appearingText ${activeSection === "angklung" ? "visibleAlat" : ""}`}>
          <h2>Angklung</h2>
          <p>
            Angklung adalah alat musik yang dibuat dari bilah bambu dan dimainkan dengan cara digetarkan atau digoyangkan. Menghasilkan suara merdu khas dan perlu dimainkan secara teratur.
          </p>
        </div>
        <div className={`appearingText ${activeSection === "suling" ? "visibleAlat" : ""}`}>
          <h2>Seruling</h2>
          <p>
            Seruling atau suling adalah alat musik yang dibuat dari bambu dan dimainkan dengan cara ditiup. Seruling dapat dimainkan secara solo atau juga dipadukan dengan alat musik lainnya.
          </p>
        </div>
        <div className={`appearingText ${activeSection === "karinding" ? "visibleAlat" : ""}`}>
          <h2>Karinding</h2>
          <p>
            Karinding adalah alat musik yang terbuat dari bilah bambu atau pelepah daun enau. Saat mengalami getaran, karinding akan menghasilkan gema dan juga suara dengungan.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Alat;
