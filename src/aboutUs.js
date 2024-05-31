import React, { useState } from 'react';
import './aboutUs.css';
import Footer from './Components/Footer';

const AboutUs = () => {
  const [showMore, setShowMore] = useState(false);

  const handleKnowMoreClick = (e) => {
    e.preventDefault();
    setShowMore(!showMore);
  };

  return (
    <div className="AboutUs">
      <div className="bgAboutUs">
        <div className="SectionTop">
          <img src="images/foto/foto berempat.jpg" alt="Group Photo" />
          <div className="content">
            <h1>About Us</h1>
            <br />
            <a href="#" id="knowMore" onClick={handleKnowMoreClick}>Know More</a>
          </div>
        </div>

        <div className="ruangKosong">

        </div>

        {showMore && (
          <>
            <div className="text">
              <div className="title">
                <h1>Introduction</h1>
              </div>
              <div className="paragraf">
                <p>Sekelompok manusia random yang tidak mengerti mengapa mengambil jurusan Informatika akhirnya berkumpul dalam satu ruangan.</p>
                <p>Masing-masing membawa impian, kebingungan, dan harapan untuk masa depan yang lebih cerah. </p>
                <p>Mereka tidak tahu pasti apa yang akan mereka lakukan dengan jurusan pilihan mereka, tetapi satu hal yang pasti: mereka ahli dalam menghadapi ketidakpastian. </p>
                <p>Dari jurusan yang tampak seperti teka-teki silang hingga yang lebih membingungkan daripada memahami seseorang, yaitu membuat website, mereka siap hadapi.</p>
                <p>Selamat datang di website kami, di mana keahlian adalah bonus dan bahagia adalah keharusan!</p>
              </div>
            </div>

            <div className="text2">
              <h1>WHO WE ARE</h1>
            </div>

            <div className="photo">
              <div className="card">
                <img src="images/foto/abigail.jpg" alt="Abigail Vania Prasetio" />
                <div className="info">
                  <h1>Abigail Vania Prasetio</h1>
                  <p>"It's good to take the mask off once in a while, even just for one night."</p>
                  <a href="https://www.instagram.com/abigaiilvania" target="_blank" rel="noopener noreferrer" className="btn">Contact</a>
                </div>
              </div>
              <div className="card">
                <img src="images/foto/agnes.jpg" alt="Agnes Devita Widjaja" />
                <div className="info">
                  <h1>Agnes Devita Widjaja</h1>
                  <p>"Web saja yang dihosting, manusia jangan dighosting."</p>
                  <a href="https://www.instagram.com/agnesdevita01" target="_blank" rel="noopener noreferrer" className="btn">Contact</a>
                </div>
              </div>
              <div className="card">
                <img src="images/foto/alya.jpg" alt="Alya Azzahra" />
                <div className="info">
                  <h1>Alya Azzahra</h1>
                  <p>'Allah does not require of any soul more than what it can afford. All good will be for its own benefit, and all evil will be to its own loss." - Quran 02:286</p>
                  <a href="https://www.instagram.com/alyazzahrra" target="_blank" rel="noopener noreferrer" className="btn">Contact</a>
                </div>
              </div>
              <div className="card">
                <img src="images/foto/livia.jpg" alt="Livia Junike" />
                <div className="info">
                  <h1>Livia Junike</h1>
                  <p>“Every time you cross my mind, I break out in exclamations of thanks to God” - Philippians 1:3</p>
                  <a href="https://www.instagram.com/junikxz" target="_blank" rel="noopener noreferrer" className="btn">Contact</a>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
