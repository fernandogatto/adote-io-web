import jwt from 'jwt-decode';

import Api from '@common/helpers/Api';

import AuthActions from './AuthActions';

import AuthService from '@common/services/AuthService';

import Toast from '@common/helpers/Toast';

import Storage from '@common/constants/Storage';

import { getErrorMessage } from '@common/handlers/ErrorHandler';

const AuthOperations = {
    getUserAuth: () => async (dispatch: any) => {
        dispatch(AuthActions.SetLoading());

        try {
            const accessToken = localStorage.getItem(`@${Storage.project}:accessToken`);

            if (accessToken) {
                const user = jwt(accessToken);

                dispatch(AuthActions.SetSuccess(user));
            }
        } catch (error) {
            Toast.showError(getErrorMessage(error));

            dispatch(AuthActions.SetFailure());
        }
    },
    createAuth: (data: any) => async () => {
        try {
            const response = await AuthService.createAuth(data);

            const { accessToken } = response.data;

            localStorage.setItem(`@${Storage.project}:accessToken`, accessToken);

            Api.defaults.headers.authorization = `Bearer ${accessToken}`;

            Toast.showSuccess('Login feito com sucesso');

            return response.data;
        } catch (error) {
            Toast.showError(getErrorMessage(error));

            throw error;
        }
    },
    removeAuth: () => () => {
        try {
            localStorage.removeItem(`@${Storage.project}:accessToken`);

            localStorage.removeItem(`@${Storage.project}:lastChildren`);

            Toast.showSuccess('Logout feito com sucesso');

            return {};
        } catch (error) {
            Toast.showError(getErrorMessage(error));

            throw error;
        }
    },
}

export default AuthOperations;
