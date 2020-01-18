/* globals process */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Components
import Menu from '../menu';

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
        <Link to='/'>
          <img className="header__logo" alt='logo' src={`${process.env.EXTERNAL_CMS_URL}/uploads/d1063e568dba4c29bb2a71f4578ba648.png`} />
        </Link>
        <Menu pages={this.props.pages} />
      </header>
    )
  }
}