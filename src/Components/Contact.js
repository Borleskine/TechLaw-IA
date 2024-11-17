import React from 'react'

const Contact = () => {
  return (
    <div className='contact-page-wrapper'>
        <p className='primary-subheading'>¿Tienes Dudas? </p>
        <h1 className='primary-heading'>Contáctanos</h1>
        <div class="contact-form-container">
            <input type="text" placeholder='tucorreo@gmail.com' />
            <button className='secondary-button'>Enviar</button>
        </div>
    </div>
  )
}

export default Contact