import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './index.scss';

const smallHeaderClass = 'header--small';

export default class Header extends Component {
  state = { headerClass: '' };

  componentDidMount() {
    window.addEventListener('scroll', this.getWindowHeight.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.getWindowHeight.bind(this));
  }

  getWindowHeight() {
    if (document.documentElement.scrollTop > 50 && this.state.headerClass !== smallHeaderClass)
      this.setState({ headerClass: smallHeaderClass });
    else if (document.documentElement.scrollTop === 0 && this.state.headerClass === smallHeaderClass)
      this.setState({ headerClass: '' });
  }

  render() {
    return (
      <header className={`header ${this.state.headerClass}`}>
        <img className="header__logo" alt='logo' src="http://diademastudio.com.br/wp-content/uploads/2018/02/logo.png" />
        <nav className="header__nav">
          <li><Link to='/'>INÍCIO</Link></li>
          <li><Link to='/about'>SOBRE</Link></li>
          <li><Link to='/services'>SERVIÇOS</Link></li>
          <li><Link to='/videos'>VIDEOS</Link></li>
        </nav>
        <div className="header__social">
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
      </header>
    )
  }
}