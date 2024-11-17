import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonials = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-text">
          Los resultados obtenidos con EMI Predictor destacan su capacidad para
          reducir delitos en zonas de alto riesgo. Con una precisión de
          predicción entre el 85% y el 94%, el modelo permite reducir entre un
          25% y un 35% los incidentes delictivos prioritarios, optimizando la
          distribución de recursos y fortaleciendo la respuesta de las
          autoridades y equipos de seguridad.
        </p>
      </div>
      <div>
        <div className="testimonial-section-bottom">
            <img src={ProfilePic} alt="" />
            <p>
                <div className="testimonials-stars-container">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </div>
                <h2>John Doe</h2>
            </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
