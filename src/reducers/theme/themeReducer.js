const {SWITCH_THEME} = require('../../lib/constants').default;
import initialState from './themeInitState';

const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SWITCH_THEME:
            return { theme: action.payload }
            
        default:
            return state;
    }
};

export default themeReducer;