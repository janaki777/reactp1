import { combineReducers } from 'redux';

import UserReducer from './UserReducer';
import PostReducer from './PostReducer';

let rootReducer=combineReducers({ 
    UserReducer, PostReducer
});

export default rootReducer;