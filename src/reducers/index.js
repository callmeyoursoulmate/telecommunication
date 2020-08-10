import profile from './profile/profileReducer';
import theme from './theme/themeReducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    profile,
    theme
});

export default rootReducer;