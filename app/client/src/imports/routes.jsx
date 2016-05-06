import React from 'react';
import { Router,IndexRoute, Route, Link, hashHistory } from 'react-router' ;
import VoidLayout from './ui/layouts/VoidLayout.jsx';

import App from './ui/containers/App/App.jsx';

export default (
  <Router history={hashHistory}>
    <Route path="/" component={VoidLayout}>
      <IndexRoute component={App}/>
    </Route>
  </Router>
);
