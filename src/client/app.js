import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Components
import {
  About,
  Convida,
  Home,
  Services,
  Videos
} from './scenes';
import Menu from './components/menu';

export default (props) => ([
  <Menu />,
  <Switch>
    <Route path='/' component={Home} exact />
    <Route path='/about' component={About} exact />
    <Route path='/videos' component={Videos} exact />
    <Route path='/services' component={Services} exact />
    <Route path='/convida/:id' component={Convida} exact />
  </Switch>
])