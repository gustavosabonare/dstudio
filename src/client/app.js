import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Components
import {
    // About,
    // Convida,
    Home,
    // Services,
    // Videos
} from './scenes';

export default (props) => (
    <Switch>
        <Route path='/' component={Home} />
        {/* <Route path='/about' component={About} />
        <Route path='/videos' component={Videos} />
        <Route path='/services' component={Services} />
        <Route path='/convida:id' component={Convida} /> */}
    </Switch>
)