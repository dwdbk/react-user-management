import * as types from '../actions/actionTypes';  

const initialState = {
  hasErrored: false,
  isLoading: false,
  users: [],
  userById: []
};

export function userHasErrored(state = initialState, action = {}) {
    switch (action.type) {
        case types.USER_HAS_ERRORED:
            return {
                ...state,
                hasErrored: action.hasErrored
            };
        default:
            return state;
    }
}

export function userIsLoading(state = initialState, action = {}) {
    switch (action.type) {
        case types.USER_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            };
        default:
            return state;
    }
}

export function users(state = initialState, action = {}) {
    switch (action.type) {
        case types.USER_FETCH_DATA_SUCCESS:
            return {
                ...state,
                users: action.users
            };
        case types.USER_FETCH_DATA_BYID_SUCCESS:
            return {
                ...state,
                userById: action.userById
            };
        default:
            return state;
    }
}