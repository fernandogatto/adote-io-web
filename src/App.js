import React from 'react';

import { Provider } from 'react-redux';

import ReduxToastr from 'react-redux-toastr';

import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

import { ThemeProvider as MaterialThemeProvider } from '@material-ui/styles';

import store from './common/rules/store';

import AppProvider from './common/contexts';

import Routes from './routes';

import GlobalStyle from './styles/global';

import theme from './styles/theme';

const App = () => {
    return (
        <Provider store={store}>
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
        </Provider>
    )
}

export default App;
