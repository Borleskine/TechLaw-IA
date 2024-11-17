import React from "react";
import Accountability from "../Assets/accountability-image.png";
import Sentinel from "../Assets/sentinel-image.png";
import Monitoring from "../Assets/monitoring-image.png";
import Compliance from "../Assets/compliance-image.png";
import Oversight from "../Assets/oversight-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: Accountability,
      title: "Accountability",
      text: "Subrayamos la responsabilidad en la gestión responsable.",
    },
    {
      image: Sentinel,
      title: "EMI TechLaw",
      text: "Resaltamos el rol predictivo y analítico de nuestros sistemas.",
    },
    {
      image: Monitoring,
      title: "Monitoring",
      text: "Vinculamos la vigilancia activa de Sentinel.",
    },
    {
      image: Compliance,
      title: "Compliance",
      text: "Nos enfocamos en el cumplimiento normativo.",
    },
    {
      image: Oversight,
      title: "Oversight",
      text: "Entregamos supervisión integrada a nuestros clientes.",
    },
  ];

  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h2 className="primary-subheading">Dos herramientas, un propósito</h2>
        <h1 className="primary-heading">
        <center>“Prevención proactiva con cumplimiento y responsabilidad.”</center>
        </h1>
        <p className="primary-text">
          Ecosistema que conecta las capacidades de Sentinel y EMI Sentinel con
          un enfoque robusto en cumplimiento normativo y rendición de cuentas.
        </p>
      </div>
      <div className="work-section-bottom">
        {
          workInfoData.map((data) => (
            <div className="work-section-info">
              <div className="info-boxes-img-container">
                <img src={data.image} alt="" />
              </div>
              <h2>{data.title}</h2>
              <p>{data.text}</p>
            </div>
          ))
        }

      </div>
    </div>
  );
};

export default Work;
