import React    from 'react';
import {render} from 'react-dom' ;
import routes   from './imports/routes.jsx';

require('./imports/style/app.less');


render(routes, document.getElementById("app"));
