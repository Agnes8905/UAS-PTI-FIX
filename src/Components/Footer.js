import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../asetHome/logo.png';

const Footer = () => {
  return (
    <footer className="w-full relative mt-auto bg-gradient-to-r from-orange-950 to-yellow-800 text-white py-10 rounded-tl-[125px] text-lg leading-5 z-10">
      <div className="w-5/6 mx-auto flex flex-wrap items-start justify-between">
        <div className="w-full md:w-1/4 p-2">
          <img src={logo} className="w-20 mb-8" alt="Logo" />
          <p>
          © 2024 Welcome to Jawa Barat
          Authorized by Class A, Group 2, Class of 2023
          </p>
        </div>
        <div className="w-full md:w-1/4 p-2">
          <h3 className="w-max mb-10 relative">Universitas Multimedia Nusantara</h3>
          <p>Jl Scientia Boulevard</p>
          <p>Gading Serpong</p>
          <p>Tangerang, Banten</p>
          <p>15810</p>
          <p><a href="http://www.umn.ac.id" target="_blank" rel="noopener noreferrer" className="text-white">www.umn.ac.id</a></p>
        </div>
        <div className="w-full md:w-1/4 p-2">
          <h3 className="w-max ml-8 mb-10 relative">Links</h3>
          <ul>
            <li className="mb-3">
              <Link to="/" className="text-white">Home</Link>
            </li>
            <li className="mb-3">
              <Link to="/show" className="text-white">Show</Link>
            </li>
            <li className="mb-3">
              <Link to="/maps" className="text-white">Maps</Link>
            </li>
            <li className="mb-3">
              <Link to="/translate" className="text-white">Translate</Link>
            </li>
            <li className="mb-3">
              <Link to="/about" className="text-white">About Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
