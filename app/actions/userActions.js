import * as types from './actionTypes';

const FIREBASE_API_ENDPOINT = 'https://react-user-management.firebaseio.com/';

export function userHasErrored(bool) {
    return {
        type: types.USER_HAS_ERRORED,
        hasErrored: bool
    };
}

export function userIsLoading(bool) {
    return {
        type: types.USER_IS_LOADING,
        isLoading: bool
    };
}

export function userFetchDataSuccess(users) {
    return {
        type: types.USER_FETCH_DATA_SUCCESS,
        users
    };
}

export function userFetchData() {
    return (dispatch) => {
        dispatch(userIsLoading(true));
        fetch(FIREBASE_API_ENDPOINT+'.json')
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(userIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((users) => dispatch(userFetchDataSuccess(users)))
            .catch(() => dispatch(userHasErrored(true)));
    };
}