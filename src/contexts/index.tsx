import React, { ReactNode } from 'react';

import { AuthProvider } from './Auth';

interface IAppProviderProps {
    children: ReactNode;
}

const AppProvider = ({ children }: IAppProviderProps) => {
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    );
}

export default AppProvider;
