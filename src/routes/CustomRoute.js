import React from 'react';

import {
    Route,
    Redirect,
} from 'react-router-dom';

import { useAuth } from '../common/contexts/Auth';

const CustomRoute = ({ isPrivate, component: Component, ...rest }) => {
    const { accessToken } = useAuth();

    let _isPrivate = isPrivate || false;

    return (
        <Route
            {...rest}
            render={(props) => {
                return _isPrivate === !!accessToken ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: _isPrivate
                                ? '/'
                                : '/status-do-alistamento',
                            state: { from: props.location },
                        }}
                    />
                )
            }}
        />
    );
}

export default CustomRoute;
