import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Containers
import HeaderContainer from './containers/header';
import PlayerContainer from './containers/player';

// Scenes
import {
  Details,
  Page,
} from './scenes';

export default (props) => ([
  <HeaderContainer />,
  <PlayerContainer />,
  <Switch>
    <Route path='/details/:id' component={Details} exact />
    <Route path='/' component={Page} />
  </Switch>
])