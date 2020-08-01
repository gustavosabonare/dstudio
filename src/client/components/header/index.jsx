/* globals process */

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Components
import Menu from '../menu';

import './index.scss';

const smallHeaderClass = 'header--small';

const Header = ({ pages }) => {
  const [headerClass, setHeaderClass] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', getWindowHeight);

    return () => window.removeEventListener('scroll', getWindowHeight);
  }, [])

  const getWindowHeight = () => {
    if (document.documentElement.scrollTop > 50 && headerClass !== smallHeaderClass)
      setHeaderClass(smallHeaderClass);
    else if (document.documentElement.scrollTop === 0 && headerClass === smallHeaderClass)
      setHeaderClass('');
  }

  return (
    <header className={`header ${headerClass}`}>
      <Link to='/'>
        <img className="header__logo" alt='logo' src={`${process.env.STORAGE_URL}/logo.png`} />
      </Link>
      <Menu pages={pages} />
    </header>
  )
}

export default Header;
