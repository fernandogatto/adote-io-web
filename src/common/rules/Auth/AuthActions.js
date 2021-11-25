import AuthTypes from "./AuthTypes";

const AuthActions = {
    SetLoading: () => ({
        type: AuthTypes.SET_AUTH_LOADING
    }),
    SetFailure: () => ({
        type: AuthTypes.SET_AUTH_FAILURE
    }),
    SetSuccess: (payload) => ({
        type: AuthTypes.SET_AUTH_SUCCESS,
        payload
    })
}

export default AuthActions;
