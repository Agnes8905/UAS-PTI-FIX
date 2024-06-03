import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp, faVolumeMute } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Slider from './slider';
import Footer from '../Components/Footer';
import '../home.css';

import videoOpening from '../asetHome/video.mp4';
import petaIndo from '../asetHome/peta/petaNusantara.png';
import petaJawa from '../asetHome/peta/petaJawaBarat.png';
import petaKecil from '../asetHome/petaKecil.png';

function Home() {
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const factsLink = document.getElementById('facts-link');
    const video = document.getElementById('background-video');

    factsLink.addEventListener('click', (event) => {
      event.preventDefault();
      const videoHeight = video.getBoundingClientRect().height;
      
      window.scrollTo({
        top: window.pageYOffset + videoHeight - 160, 
        behavior: 'smooth'
      });
    });

    const elements = document.querySelectorAll(".hidden");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    elements.forEach(element => {
      observer.observe(element);
    });
  }, []);

  const handleMuteToggle = () => {
    const video = document.getElementById("background-video");
    setIsMuted((prev) => {
      video.muted = !prev;
      return !prev;
    });
  };

  return (
    <div className="home">
      <div className="header" id="aaa">
        <video autoPlay loop muted playsInline className="back-video" id="background-video">
          <source src={videoOpening} type="video/mp4" />
        </video>
        <div className="content">
          <h4>Welcome to</h4>
          <h1>JAWA BARAT</h1>
          <div className="navContent">
            <a id="facts-link">Facts</a>
            <Link to="/show">Explore</Link> 
          </div>
        </div>
      </div>

      <div className="buttonForMuted">
        <button id="mute-toggle" onClick={handleMuteToggle}>
          <FontAwesomeIcon icon={isMuted ? faVolumeMute : faVolumeUp} />
        </button>
      </div>

      <div className="peta">
        <h1>PETA JAWA BARAT</h1>
        <p>Arahkan cursor pada peta untuk mengetahui letak Provinsi Jawa Barat</p>
        <div className="image-container">
          <img src={petaIndo} alt="Gambar 1" className="base-image" />
          <img src={petaJawa} alt="Gambar 2" className="hover-image" />
        </div>
        <p className="deks">Jawa Barat adalah sebuah provinsi di Indonesia yang terletak pada bagian barat Pulau Jawa.</p>
        <p className="deks">Jawa Barat berbatasan dengan D.K.I Jakarta di sebelah barat, Laut Jawa di utara, Jawa Tengah di timur, dan Samudra Hindia di sebelah selatan.</p>
      </div>

      <div className="container">
        <div className="text ">
          <div className="title">
            <h1>Apa itu Jawa Barat?</h1>
          </div>
          <div className="isi">
            <p>
              Jawa Barat adalah salah satu provinsi di Indonesia yang terletak di bagian barat Pulau Jawa dengan ibu kota terletak di Bandung. 
              <br />
              Provinsi Jawa Barat terdiri atas 18 kabupaten dan 9 kota. Beberapa kota terkenal, yaitu Bandung, Bogor, Cirebon, Garut, dan Sukabumi.
            </p>
          </div>
        </div>
        <div className="image">
          <img src={petaKecil} alt="Image" />
        </div>
      </div>


      <div className="container2">
        <h1 className="title2">Kebudayaan dan Wisata Alam di Jawa Barat</h1>
        <div className="slideGambar">
          <Slider />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
