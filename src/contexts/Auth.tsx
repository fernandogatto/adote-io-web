import React, { createContext, useEffect, useState, useContext, ReactNode } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Api from '@common/helpers/Api';

import Toast from '@common/helpers/Toast';

import Storage from '@common/constants/Storage';

import AuthOperations from '@infrastructure/Auth/AuthOperations';

import { IAuthData, ILoggedUser } from '@common/interfaces/Auth';

interface IAuthContextData {
    accessToken: Promise<string | null> | undefined;
    isLoadingUser: boolean;
    hasErrorUser: boolean;
    user: ILoggedUser;
    getUser: () => void;
    signIn: (data: IAuthData) => Promise<void>;
    signOut: () => void;
}

interface IAuthProviderProps {
    children: ReactNode;
}

// Context
const AuthContext = createContext({} as IAuthContextData);

// Component
const AuthProvider = ({ children }: IAuthProviderProps) => {
    const {
        IsLoading: IsLoadingUser,
        HasError: HasErrorUser,
        Data: User
    } = useSelector(({ Auth }: any) => Auth);

    const dispatch = useDispatch();

    const [authData, setAuthData] = useState(() => {
        const accessToken = localStorage.getItem(`@${Storage.project}:accessToken`);

        if (accessToken) {
            Api.defaults.headers.authorization = `Bearer ${accessToken}`;

            return { accessToken };
        }

        return {};
    });

    useEffect(() => {
        getUser();
    }, [authData]);

    const getUser = async () => {
        try {
            await dispatch<any>(AuthOperations.getUserAuth());
        } catch (err) {
            console.log('getUser', err);
        }
    }

    const signIn = async (data: IAuthData) => {
        try {
            const response = await dispatch<any>(AuthOperations.createAuth(data));

            setAuthData(response);
        } catch (error) {
            console.log('AuthProvider signIn', error);
        }
    };

    const signOut = () => {
        try {
            const response = dispatch<any>(AuthOperations.removeAuth());

            setAuthData(response);
        } catch (error) {
            console.log('AuthProvider signOut', error);
        }
    };

    return (
        <AuthContext.Provider
            value={{
                accessToken: authData.accessToken,
                isLoadingUser: IsLoadingUser,
                hasErrorUser: HasErrorUser,
                user: User,
                getUser,
                signIn,
                signOut,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

// Hook
const useAuth = () => {
    const context = useContext(AuthContext);

    if(!context) {
        Toast.showError('Erro de autenticação');
    }

    return context;
}

export { AuthProvider, useAuth };
