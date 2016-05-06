import React    from 'react';
import {render} from 'react-dom' ;
import routes   from './imports/routes.jsx';

require('./imports/style/app.less');

// meteor startup function here
// import {Meteor} from 'meteor/meteor'
render(routes, document.getElementById("app"));
