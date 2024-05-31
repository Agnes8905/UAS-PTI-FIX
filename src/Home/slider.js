import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '../home.css';

import bandung from '../asetHome/slide/bandung.png';
import bogor from '../asetHome/slide/bogor.png';
import cirebon from '../asetHome/slide/cirebon.png';
import sukabumi from '../asetHome/slide/sukabumi.png';
import tasikmalaya from '../asetHome/slide/tasikmalaya.png';

const Slider = () => {
  const items = [
    {
      image: bandung,
      title: 'KAWAH PUTIH',
      type: 'Bandung',
      description: 'Sebuah danau kawah vulkanik yang terletak di daerah Ciqidey, sekitar 50 km di selatan Kota Bandung. Kawah putih terbentuk akibat letusan Gunung Patuha abad ke-10 - 12.'
    },
    {
      image: bogor,
      title: 'ISTANA BOGOR',
      type: 'Bogor',
      description: 'Dulu dikenal sebagai "Buitenzorg", istana ini digunakan sebagai tempat peristirahatan oleh Gubernur Jenderal Belanda, dan kemudian menjadi tempat tinggal resmi bagi Presiden Indonesia setelah kemerdekaan. '
    },
    {
      image: cirebon,
      title: 'GUA SUNYARAGI',
      type: 'Cirebon',
      description: 'Bangunan dihiasi bebatuan karang yang dibangun pada masa Keratonan untuk tempat beristirahat bagi Sultan Cirebon beserta keluarga, meditasi, dan berlatih perang bagi prajurit Cirebon.'
    },
    {
      image: sukabumi,
      title: 'MASJID AGUNG TASIKMALAYA',
      type: 'Tasikmalaya',
      description: 'Salah satu masjid tertua di Indonesia, yaitu sejak tahun 1888. Dibangun dengan asitektur yang unik yakni bergaya neoklasik dengan perpaduan Sunda, Jawa, dan Eropa. '
    },
    {
      image: tasikmalaya,
      title: 'CURUG CIMARINJUNG',
      type: 'Sukabumi',
      description: 'Air terjun spektakuler yang terletak di daerah Puncak, Bogor, Jawa Barat. Faktanya, keunikan curug ini terletak pada tingginya yang mencapai sekitar 80 meter serta suasana sekitar yang masih sangat alami dan terjaga. Selain itu, curug ini juga dikelilingi oleh pepohonan rindang dan vegetasi yang subur.'
    }
  ];

  useEffect(() => {
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');
    const slider = document.querySelector('.slider');
    const sliderList = slider.querySelector('.list');
    const thumbnail = document.querySelector('.slider .thumbnail');
    const thumbnailItems = thumbnail.querySelectorAll('.item');

    thumbnail.appendChild(thumbnailItems[0]).classList.add('active');

    nextBtn.onclick = () => moveSlider('next');
    prevBtn.onclick = () => moveSlider('prev');

    function moveSlider(direction) {
      const sliderItems = sliderList.querySelectorAll('.item');
      const thumbnailItems = document.querySelectorAll('.thumbnail .item');
      
      if (direction === 'next') {
        sliderList.appendChild(sliderItems[0]);
        thumbnail.appendChild(thumbnailItems[0]);
        slider.classList.add('next');
      } else {
        sliderList.prepend(sliderItems[sliderItems.length - 1]);
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
        slider.classList.add('prev');
      }

      slider.addEventListener('animationend', () => {
        if (direction === 'next') {
          slider.classList.remove('next');
        } else {
          slider.classList.remove('prev');
        }
      }, { once: true });
    }
  }, []);

  return (
    <div className="container2">
      <div className="slider">
        <div className="list">
          {items.map((item, index) => (
            <div key={index} className="item">
              <img src={item.image} alt={item.title} />
              <div className="content">
                <div className="title">{item.title}</div>
                <div className="type">{item.type}</div>
                <div className="description">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="thumbnail">
          {items.map((item, index) => (
            <div key={index} className="item">
              <img src={item.image} alt={item.title} />
            </div>
          ))}
        </div>
        <div className="nextPrevArrows">
          <button className="prev">
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button className="next">
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
