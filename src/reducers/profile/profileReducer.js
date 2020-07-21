const InitialState = require('./profileInitState').default;
const {
    FETCHING_PEOPLE_REQUEST,
    FETCHING_PEOPLE_SUCCESS,
    FETCHING_PEOPLE_FAILURE,
} = require('../../lib/constants').default;
const initialState = new InitialState;

export default function profileReducer(state = initialState, action) {
    if (!(state instanceof InitialState)) return initialState.mergeDeep(state);

    switch (action.type) {
        case FETCHING_PEOPLE_REQUEST: {
            let nextState = state.set('isFetching', true);
            return nextState;
        }
        case FETCHING_PEOPLE_SUCCESS: {
            let { data } = action.payload;
            // let data = action.payload;
            let nextState = state.set('isFetching', false)
                .set('people', data);
            return nextState;
        }
        case FETCHING_PEOPLE_FAILURE: {
            let nextState = state.set('isFetching', false)
                .set('errorMessage', action.payload)
            return nextState;
        }
        default:
            return state;
    }
}
