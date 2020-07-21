const {
    FETCHING_PEOPLE_REQUEST,
    FETCHING_PEOPLE_SUCCESS,
    FETCHING_PEOPLE_FAILURE,
} = require('../../lib/constants').default;
export function fetchingPeopleRequest(){
    return {
        type: FETCHING_PEOPLE_REQUEST,
        payload: null
    }
}
export function fetchingPeopleSuccess(payload){
    return {
        type: FETCHING_PEOPLE_SUCCESS,
        payload
    }
}
export function fetchingPeopleFailure(error){
    return {
        type: FETCHING_PEOPLE_FAILURE,
        payload: error
    }
}
export function fetchingPeopleAction(){
    return async dispatch => {
        dispatch(fetchingPeopleRequest());
        try {
            let response = await fetch("https://randomuser.me/api?results=15");
            let json = await response.json();
            dispatch(fetchingPeopleSuccess(json.results));
        } catch (error){
            dispatch(fetchingPeopleFailure(error))
        }
    };
};