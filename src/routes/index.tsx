import React from 'react';
import { Route } from 'react-router-dom';

import Home from '../pages/Home';
// import Repository from '../pages/Repository';

const Routes: React.FC = () => (
  <Route path='/' exact component={Home} />
);

export default Routes;
