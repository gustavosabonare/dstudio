import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import Footer from './components/footer';
import Tagging from './components/tagging';

// Containers
import HeaderContainer from './containers/header';
import MusicPlayerContainer from './containers/musicPlayer';

// Scenes
import { Event, Page } from './scenes';

import "./app.scss";

export default () => (
  <Fragment>
    <HeaderContainer />

    <Switch>
      <Route path='/details/:id' component={Event} exact />
      <Route path='/:page?' component={Page} />
    </Switch>

    <MusicPlayerContainer />
    <Footer />

    <Tagging />
  </Fragment>
);
