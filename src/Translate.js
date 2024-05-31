import React, { useState, useEffect } from "react";
import "./translate.css";
import Footer from './Components/Footer';
import topLeft from './assets/translate/pojokkiriatas.png.png';
import topRight from './assets/translate/pojokkananatas.png.png';
import bottomLeft from './assets/translate/pojokkiribawah.png.png';
import bottomRight from './assets/translate/pojokkananbawah.png.png';


const Translate = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [selectLanguageFrom, setSelectLanguageFrom] = useState("id");
  const [selectLanguageTo, setSelectLanguageTo] = useState("id");

  const translateText = () => {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${selectLanguageFrom}&tl=${selectLanguageTo}&dt=t&q=${encodeURI(
      inputText
    )}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const translatedText = data[0][0][0];
        setOutputText(translatedText);
      })
      .catch((error) => {
        console.error("Error:", error);
        setOutputText("Error in translation. Please try again.");
      });
  };

  useEffect(() => {
    translateText();
  }, [selectLanguageFrom, selectLanguageTo, inputText]);

  return (
    <div className="bgTranslate">
      <div className="trContainer trCenter">
        <div className="decoration">
          <img className="corner-decoration top-left" src={topLeft} alt="Top Left Corner" />
          <img className="corner-decoration top-right" src={topRight} alt="Top Right Corner" />
          <img className="corner-decoration bottom-left" src={bottomLeft} alt="Bottom Left Corner" />
          <img className="corner-decoration bottom-right" src={bottomRight} alt="Bottom Right Corner" />
        </div>

        <div className="kamus">
          <div className="judul">
            <h3>Translate - Terjemahkan</h3>
            <h1>Bahasa Indonesia - Sunda</h1>
          </div>

          <div className="form-group">
            <label htmlFor="selectLanguageFrom">Dari Bahasa</label>
            <select
              className="form-control"
              id="selectLanguageFrom"
              value={selectLanguageFrom}
              onChange={(e) => setSelectLanguageFrom(e.target.value)}
            >
              <option value="id">Indonesia</option>
              <option value="su">Sunda</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="selectLanguageTo">Ke Bahasa</label>
            <select
              className="form-control"
              id="selectLanguageTo"
              value={selectLanguageTo}
              onChange={(e) => setSelectLanguageTo(e.target.value)}
            >
              <option value="id">Indonesia</option>
              <option value="su">Sunda</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="inputText">Teks</label>
            <textarea
              className="form-control"
              id="inputText"
              rows="3"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="outputText">Hasil Terjemahan</label>
            <textarea
              className="form-control"
              id="outputText"
              rows="3"
              value={outputText}
              readOnly
            ></textarea>
          </div>
        </div>
      </div>
    <Footer />
    </div>
  );
};

export default Translate;