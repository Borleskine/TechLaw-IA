import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className='"about-section-text-container'>
        <p className="primary-subheading">Sobre nosotros</p>
        <h1 className="primary-heading">Misión</h1>
        <p className="primary-text">
          Investigar, diseñar y desarrollar sistemas avanzados de Inteligencia
          Artificial y Ciencia de Datos que sean accesibles, robustos y
          confiables, para ayudar a las organizaciones a cubrir necesidades
          críticas.
        </p>
        <h1 className="primary-heading">Visión</h1>
        <p className="primary-text">
          Avanzar a una sociedad en la que la transformación esté enfocada en
          Inteligencia Artificial y Data Science, estableciendo nuevos
          estándares en la toma de decisiones apoyadas en datos Inteligentes
          para construir comunidades más seguras y confiables mediante la
          innovación continua.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Conozca más...</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Ver video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
