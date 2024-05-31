import React, { useState } from "react";
import "../makanan.css";
import batagor from "../assets/makanan/batagor.jpg";
import cireng from "../assets/makanan/cireng.jpg";
import karedok from "../assets/makanan/karedok.jpg";
import nasiLiwet from "../assets/makanan/nasiLiwet.jpg";
import seblak from "../assets/makanan/seblak.jpg";
import tahuSumedang from "../assets/makanan/tahuSumedang.jpg";

const Makanan = () => {
    const [active, setActive] = useState(0);
    const [activeT, setActiveT] = useState(0);

    const handleCursor = index => {
        setActive(index);
        setActiveT(index);
    };

    const handleCursorGo = () => {
        setActive(0);
        setActiveT(0);
    };

    return (
        <div className="containerMakanan md:pt-0 pt-20">
            <div className="galleryMakanan">
                <div className={`makananDetail ${active === 1 ? "activeMakanan" : ""}`} style={{ backgroundImage: `url(${batagor})`}} onMouseEnter={() => handleCursor(1)} onMouseLeave={handleCursorGo}>
                </div>
                <div className={`makananDetail ${active === 2 ? "activeMakanan" : ""}`} style={{ backgroundImage: `url(${cireng})`}} onMouseEnter={() => handleCursor(2)} onMouseLeave={handleCursorGo}>
                </div>
                <div className={`makananDetail ${active === 3 ? "activeMakanan" : ""}`} style={{ backgroundImage: `url(${karedok})`}} onMouseEnter={() => handleCursor(3)} onMouseLeave={handleCursorGo}>
                </div>
                <div className={`makananDetail ${active === 4 ? "activeMakanan" : ""}`} style={{ backgroundImage: `url(${nasiLiwet})`}} onMouseEnter={() => handleCursor(4)} onMouseLeave={handleCursorGo}>
                </div>
                <div className={`makananDetail ${active === 5 ? "activeMakanan" : ""}`} style={{ backgroundImage: `url(${seblak})`}} onMouseEnter={() => handleCursor(5)} onMouseLeave={handleCursorGo}>
                </div>
                <div className={`makananDetail ${active === 6 ? "activeMakanan" : ""}`} style={{ backgroundImage: `url(${tahuSumedang})`}} onMouseEnter={() => handleCursor(6)} onMouseLeave={handleCursorGo}>
                </div>
            </div>
            <div className="textMakanan">
                <div className={`textDetail ${active === 1 ? "activeMakanan" : ""}`}>
                    <p>Singkatan dari bakso, tahu, dan goreng yang biasanya disajikan dengan saus kacang.</p>
                </div>
                <div className={`textDetail ${active === 2 ? "activeMakanan" : ""}`}>
                    <p>Jajanan yang terbuat dari tepung tapioka (aci) yang digoreng.</p>
                </div>
                <div className={`textDetail ${active === 3 ? "activeMakanan" : ""}`}>
                    <p>Sayuran mentah (timun, tauge, kol, kemangi, dll) disiram saus kacang.</p>
                </div>
                <div className={`textDetail ${active === 4 ? "activeMakanan" : ""}`}>
                    <p>Nasi yang dimasak dengan santan, kaldu ayam, dan rempah-rempah.</p>
                </div>
                <div className={`textDetail ${active === 5 ? "activeMakanan" : ""}`}>
                    <p>Kerupuk basah yang dimasak dengan telur orak-arik, sayuran, dan lainnya.</p>
                </div>
                <div className={`textDetail ${active === 6 ? "activeMakanan" : ""}`}>
                    <p>Tahu berwarna cokelat yang teksturnya renyah dan rasanya gurih.</p>
                </div>
            </div>
        </div>
    )
}

export default Makanan;
