import React from 'react';

import './index.scss';

export default () => (
  <header className="menu">
    <img className="menu__logo" alt='logo' src="http://diademastudio.com.br/wp-content/uploads/2018/02/logo.png" />
    <nav className="menu__nav">
      <li>Página Inicial</li>
      <li>Sobre</li>
      <li>Videos</li>
      <li>Serviços</li>
    </nav>
    <div className="menu__social">
      <i className="fab fa-instagram"></i>
      <i className="fab fa-facebook-f facebook"></i>
      <i className="fab fa-youtube-square"></i>
    </div>
  </header>
);