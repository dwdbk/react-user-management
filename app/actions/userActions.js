import * as types from './actionTypes';
import database from '../database';

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
        return database.ref('/').once('value', snap => {
            const invite = snap.val();
            dispatch(userFetchDataSuccess(invite))
        })
        .catch((error) => {
            console.log(error);
            dispatch(userFetchDataSuccess());
        });
    };
}
