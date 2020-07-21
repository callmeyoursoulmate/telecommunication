import {Record} from 'immutable';

const InitialState = Record({
    isFetching: false,
    errorMessage: '',
    people: [],
});
export default InitialState;