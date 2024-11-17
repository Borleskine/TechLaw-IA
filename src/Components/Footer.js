import React from 'react';
import Logo from "../Assets/Logo.png";
import { BsTwitter } from 'react-icons/bs';
import { SiLinkedin } from 'react-icons/si';

const Footer = () => {
  return (
    <div className='footer-wrapper'>
        <div className='footer-icons'>
            <BsTwitter />
            <SiLinkedin />
        </div>
        <div className='footer-section-two'>
            <div className='footer-section-columns'>
                <span>Contacto</span>
                <span>Testimonios</span>
                <span>Comparte</span>
                <span>Herramientas</span>
            </div>
            <div className='footer-section-columns'>
                <span>+56 9 8464 7165</span>
                <span>Correo@correo.cl</span>
            </div>
            <div className='footer-section-columns'>
                <span>Términos y condiciones</span>
                <span>Política de privacidad</span>
                <span>© Tech-law IA 2024. Todos los derechos reservados</span>
            </div>
        </div>
    </div>
  )
}

export default Footer