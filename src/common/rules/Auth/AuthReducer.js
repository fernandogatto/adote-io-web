import AuthTypes from "./AuthTypes";

const INITIAL_STATE = {
    Data: {},
    IsLoading: true,
    HasError: false
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case AuthTypes.SET_AUTH_LOADING:
            return { ...state, IsLoading: true, HasError: false };
        case AuthTypes.SET_AUTH_SUCCESS:
            return { Data: action.payload, IsLoading: false, HasError: false };
        case AuthTypes.SET_AUTH_FAILURE:
            return { ...state, IsLoading: false, HasError: true };
        default:
            return state;
    }
}
