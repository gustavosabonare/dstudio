/* globals process */

import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';

import useOnClickOutside from '../../hooks/onClickOutside';

// Styles
import './index.scss';

const Menu = ({ pages }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menu = useRef();

  useOnClickOutside(menu, () => setIsOpen(false));

  const onBarsClick = () => {
    const newIsOpen = !isOpen
    const rootEl = document.getElementById('root');

    if (newIsOpen)
      rootEl.style.right = '50%';
    else
      rootEl.style.right = '0';

    setIsOpen(!isOpen);
  }

  const renderNav = (linkCb) => {
    return (
      <nav className="menu__nav">
        {pages.map(page => (
          <li key={page.id} onClick={linkCb}><Link to={page.url}>{page.title}</Link></li>
        ))}
      </nav>
    )
  }

  const renderSocial = () => {
    return (
      <div className="menu__social">
        <a href='https://www.instagram.com/dstudiomusic/' target="_blank">
          <i className="fab fa-instagram" />
        </a>
        <a href='https://www.facebook.com/dstudiooficial/' target="_blank">
          <i className="fab fa-facebook-f facebook" />
        </a>
        <a href='https://www.youtube.com/channel/UCQBPThbxTlgow5c-Mqdinmg' target="_blank">
          <i className="fab fa-youtube-square" />
        </a>
      </div>
    )
  }

  const menuContentClass = isOpen ? 'menu__content menu__content--open' : 'menu__content';

  return (
    <div ref={menu}>
      <MediaQuery maxDeviceWidth={900}>
        <div className="menu menu--responsive">
          <div className="menu__bars" onClick={onBarsClick}>
            <i className="fas fa-bars"></i>
          </div>
          <div className={menuContentClass}>
            <img className="menu__logo" alt='logo' src={`${process.env.STORAGE_URL}/logo.png`} />
            {renderNav(onBarsClick)}
            {renderSocial()}
          </div>
        </div>
      </MediaQuery>
      <MediaQuery minDeviceWidth={901}>
        <div className="menu">
          {renderNav()}
          {renderSocial()}
        </div>
      </MediaQuery>
    </div>
  );
}

export default Menu;

