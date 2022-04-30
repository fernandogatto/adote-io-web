import React from 'react';

import { Provider as ReduxProvider } from 'react-redux';

import ReduxToastr from 'react-redux-toastr';

import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

import { ThemeProvider as MaterialThemeProvider } from '@mui/material/styles';

import store from './infrastructure/store';

import AppProvider from './contexts';

import Routes from './routes';

import GlobalStyle from './styles/global';

import theme from './styles/theme';

export default function App() {
    return (
        <ReduxProvider store={store}>
            <MaterialThemeProvider theme={theme}>
                <AppProvider>
                    <Routes />
                </AppProvider>
            </MaterialThemeProvider>

            <GlobalStyle />

            <ReduxToastr
                timeOut={4000}
                preventDuplicates
                position="top-right"
                closeOnToastrClick
                transitionIn="bounceIn"
                transitionOut="bounceOut"
            />
        </ReduxProvider>
    )
}
