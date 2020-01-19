import React from 'react';

import './index.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__contact'>
        <a href='tel:+5511981891524'>Telefone: (11) 98189-1524</a>
        <a href='mailto:diademastudio@gmail.com.br'>Email: diademastudio@gmail.com.br</a>
        <a href='https://www.google.com/maps/place/D+Studio/@-23.6308811,-46.6663301,13z/data=!4m8!1m2!2m1!1sD+Studio!3m4!1s0x94ce44fee2e678ed:0x806fdc85278e8654!8m2!3d-23.690592!4d-46.6275413'>Onde estamos: Av. Alda, 464 - Centro, Diadema - SP, 09910-170</a>
      </div>
    </footer>
  )
}

export default Footer;