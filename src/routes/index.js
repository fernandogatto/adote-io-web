import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import CustomRoute from './CustomRoute';

import * as Modules from './modules';

const Routes = () => {
    return (
        // <Router basename={process.env.PUBLIC_URL}>
        <Router>
            <Switch>
                <CustomRoute
                    path="/"
                    component={Modules.SignIn}
                    exact
                />
            </Switch>
        </Router>
    )
}

export default Routes;
