import React from "react";
import Tarian from "./ComponentsShow/Tarian";
import Makanan from "./ComponentsShow/Makanan";
import Rumah from "./ComponentsShow/Rumah";
import Alat from "./ComponentsShow/Alat";
import Lagu from "./ComponentsShow/Lagu";
import Footer from './Components/Footer';

import "./show.css";

const Show = () => {
    return (
        <div className="menu">
            <section id="rumah">
                <div className="divrumah flex justify-center w-full mt-20">
                    <Rumah />
                </div>
            </section>

            <section id="makanan">
                <Makanan />
            </section>

            <section id="tarian">
                <Tarian />
            </section>

            <section id="alat">
                <Alat />
            </section>

            <section className="laguMenu" id="lagu">
                <Lagu />
            </section>

            <Footer />
        </div>
    )
}

export default Show;