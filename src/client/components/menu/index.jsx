import React from 'react';
import { Link } from 'react-router-dom'

import './index.scss';

export default () => (
  <header className="menu">
    <img className="menu__logo" alt='logo' src="http://diademastudio.com.br/wp-content/uploads/2018/02/logo.png" />
    <nav className="menu__nav">
      <li><Link to='/'>INÍCIO</Link></li>
      <li><Link to='/about'>SOBRE</Link></li>
      <li><Link to='/services'>SERVIÇOS</Link></li>
      <li><Link to='/videos'>VIDEOS</Link></li>
    </nav>
    <div className="menu__social">
      <i className="fab fa-instagram"></i>
      <i className="fab fa-facebook-f facebook"></i>
      <i className="fab fa-youtube-square"></i>
    </div>
  </header>
);