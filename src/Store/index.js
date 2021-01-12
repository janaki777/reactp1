import { createStore, applyMiddleware } from 'redux';

import rootReducer from './../Reducer/index.js'

//Middleware
import promiseMiddleware from 'redux-promise';

let store=createStore(rootReducer, applyMiddleware(promiseMiddleware) );

export default store;
