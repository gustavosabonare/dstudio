import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';

// Styles
import './index.scss';

export default class Menu extends Component {
  state = {
    isOpen: false,
  }

  onBarsClick() {
    const newIsOpen = !this.state.isOpen
    const rootEl = document.getElementById('root');

    if (newIsOpen)
      rootEl.style.right = '50%';
    else
      rootEl.style.right = '0';

    this.setState({ isOpen: !this.state.isOpen });
  }

  renderNav(linkCb) {
    const { pages } = this.props;

    return (
      <nav className="menu__nav">
        {pages.map(page => (
          <li key={page.id} onClick={linkCb}><Link to={page.url}>{page.title}</Link></li>
        ))}
      </nav>
    )
  }

  renderSocial() {
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

  render() {
    const menuContentClass = this.state.isOpen ? 'menu__content menu__content--open' : 'menu__content';

    return (
      <div>
        <MediaQuery maxDeviceWidth={900}>
          <div className="menu menu--responsive">
            <div className="menu__bars" onClick={this.onBarsClick.bind(this)}>
              <i className="fas fa-bars"></i>
            </div>
            <div className={menuContentClass}>
              <img className="menu__logo" alt='logo' src="http://diademastudio.com.br/wp-content/uploads/2018/02/logo.png" />
              {this.renderNav(this.onBarsClick.bind(this))}
              {this.renderSocial()}
            </div>
          </div>
        </MediaQuery>
        <MediaQuery minDeviceWidth={901}>
          <div className="menu">
            {this.renderNav()}
            {this.renderSocial()}
          </div>
        </MediaQuery>
      </div>
    );
  }
}
