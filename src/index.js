import React from 'react';
import ReactDOM from 'react-dom';

//import bootstrap setup
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Routings from './components/Routings.js';

import { Provider } from 'react-redux';

import store from './Store/index.js';


ReactDOM.render(<Provider store={store}>
                        <Routings />
                </Provider>, document.getElementById('root'));

