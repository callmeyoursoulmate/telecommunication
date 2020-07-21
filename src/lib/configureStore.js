/**
 * # configureStore.js
 *
 * A Redux boilerplate setup
 *
 */
/**
 * ## Imports
 *
 * redux functions
 */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

/**
 * ## Reducer
 * The reducers contains the 4 reducers from
 * device, global, home, profile
 */
import reducer from '../reducers/index.js';

/**
 * ## creatStoreWithMiddleware
 * Like the name...
 */
const createStoreWithMiddleware = applyMiddleware(
    thunk
)(createStore);

/**
 * ## configureStore
 * @param {Object} the state with for keys:
 * device, global, home, profile
 *
 */
export default function configureStore(initialState) {
    return createStoreWithMiddleware(reducer, initialState);
};
