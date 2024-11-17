import React from "react";
import Navbar from "./Navbar";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">EMI PREDICTOR</h1>
          <p className="primary-text">
            EMI Predictor, desarrollado por Tech-Law AI, es un sistema de
            predicción de delitos que transforma la seguridad pública y privada
            en Chile. Utilizando modelos de inteligencia artificial, EMI
            Predictor permite predecir dónde y cuándo es más probable que
            ocurran delitos, mejorando la eficiencia en la asignación de
            recursos de seguridad.
          </p>
          <button className="secondary-button">
            Conozca más... <FiArrowRight/>
          </button>
        </div>
        <div className="home-image-container">
            <img src = {BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
