import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Todo from '../pages/Todo';

const Routes: React.FC = () => (
  <Switch>
    <Route path='/' exact component={Home} />
    <Route path='/todogroup/:todogroup+' component={Todo} />
  </Switch>
);

export default Routes;
