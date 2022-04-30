import React, { Component, ComponentType } from 'react';

import {
    Route,
    Redirect,
    RouteComponentProps,
} from 'react-router-dom';

import { useAuth } from '@contexts/Auth';

interface ICustomRouteProps {
    path?: string | string[];
    exact?: boolean;
    isPrivate?: boolean;
    component?: ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
}

const CustomRoute = ({
    isPrivate,
    component,
    ...rest
}: ICustomRouteProps): JSX.Element => {
    const { accessToken } = useAuth();

    let _isPrivate = isPrivate || false;

    return (
        <Route
            {...rest}
            render={(props: any) => {
                return _isPrivate === !!accessToken ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                        pathname: _isPrivate
                            ? '/'
                            : '/dashboard',
                        state: { from: props.location },
                        }}
                    />
                )
            }}
        />
    );
}

export default CustomRoute;
