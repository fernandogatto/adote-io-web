import AuthTypes from "./AuthTypes";

import { IAuthState } from '@common/interfaces';

const INITIAL_STATE: IAuthState = {
    Data: {},
    IsLoading: true,
    HasError: false
}

export default function (state = INITIAL_STATE, action: any) {
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
