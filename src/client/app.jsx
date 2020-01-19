import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import Footer from './components/footer';

// Containers
import HeaderContainer from './containers/header';
import PlayerContainer from './containers/player';

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

    <PlayerContainer />
    <Footer />
  </Fragment>
);
