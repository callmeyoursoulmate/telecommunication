import profile from './profile/profileReducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    profile,
});

export default rootReducer;