import React, { useState } from "react";
import '../rumah.css';
import badakHeuay from "../assets/rumah/badakHeuay.jpg";
import julangNgapak from "../assets/rumah/julangNgapak.jpg";
import tagogAnjing from "../assets/rumah/tagogAnjing.jpg";
import capitGunting from "../assets/rumah/capitGunting.jpg";

const Rumah = () => {
    const [activeSection, setActiveSection] = useState("badakHeuay");

    const handleSectionClick = (sectionId) => {
        setActiveSection(sectionId);
    }

    return (
        <div className="borderRumah">
            <div className="borderButtonRumah">
                <div className="buttonForRumah">
                    <button className="buttonRumah" onClick={() => handleSectionClick('badakHeuay')}>Badak Heuay</button>
                    <button className="buttonRumah" onClick={() => handleSectionClick('julangNgapak')}>Julang Ngapak</button>
                    <button className="buttonRumah" onClick={() => handleSectionClick('tagogAnjing')}>Tagog Anjing</button>
                    <button className="buttonRumah" onClick={() => handleSectionClick('capitGunting')}>Capit Gunting</button>
                </div>
            </div>
            <div className="borderContentRumah">
                <div className={`detailRumah ${activeSection === "badakHeuay" ? 'visibleRumah' : ''}`}>
                    <img src={badakHeuay} alt="Badak Heuay"></img>
                    <p className="expRumah">Badak Heuay adalah rumah adat Sunda yang berbentuk rumah panggung. Dinamakan Badak Heuay karena bagian atapnya terlihat seperti mulut badak yang sedang terbuka. Bagian depannya memiliki golodog (tangga dari kayu) dan dindingnya berupa bilik bambu atau kayu. Sedangkan atapnya disusun dari genteng tanah liat. Ada 2 ketinggian atap, karena itu atapnya terlihat asimetris.</p>
                </div>
                <div className={`detailRumah ${activeSection === "julangNgapak" ? 'visibleRumah' : ''}`}>
                    <img src={julangNgapak} alt="Julang Ngapak"></img>
                    <p className="expRumah">Julang Ngapak adalah rumah adat Sunda yang bermakna burung yang sedang mengepakkan sayap. Hal ini dikarenakan bentuk arsitektur rumah ini yang atapnya melebar ke samping seperti burung yang sedang mengepakkan sayapnya. Atapnya terbuat dari alang-alang, ijuk, dan daun rumbia. Dindingnya terbuat dari bambu dan kayu. Atapnya dilengkapi dengan cagak gunting atau capit hurang.</p>
                </div>
                <div className={`detailRumah ${activeSection === "tagogAnjing" ? 'visibleRumah' : ''}`}>
                    <img src={tagogAnjing} alt="Tagog Anjing"></img>
                    <p className="expRumah">Tagog Anjing adalah rumah adat Sunda yang memiliki bentuk seperti anjing yang sedang duduk. Tagog Anjing mirip rumah panggung, namun ketinggiannya lebih rendah. Rumahnya berbentuk persegi panjang dan memanjang ke arah belakang. Sehingga, bagian sampingnya lebih sempit. Pada bagian depan terdapat atap kecil untuk mengurangi sinar matahari dan air hujan masuk ke dalam rumah.</p>
                </div>
                <div className={`detailRumah ${activeSection === "capitGunting" ? 'visibleRumah' : ''}`}>
                    <img src={capitGunting} alt="Capit Gunting"></img>
                    <p className="expRumah">Capit Gunting adalah rumah adat Sunda yang atapnya mirip dengan gunting (berbentuk X) dan disebut undagi. Atapnya tinggi dan berbahan dasar daun kering agar rumah tetap sejuk dan juga menahan air hujan. Bahan dasar rumah ini adalah menggunakan bambu. Bentuknya persegi panjang dan Capit Gunting memanjang ke arah belakang rumah, sehingga bagian depannya lebih kecil.</p>
                </div>
            </div>
        </div>
    )
}

export default Rumah;
