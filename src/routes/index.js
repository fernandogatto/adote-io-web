import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    // Route,
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

                <CustomRoute
                    path="/sign-up"
                    component={Modules.SignUp}
                    exact
                />

                <CustomRoute
                    path="/dashboard"
                    component={Modules.Dashboard}
                    exact
                    isPrivate
                />

                <CustomRoute
                    path="/adoption"
                    component={Modules.Adoption}
                    exact
                    isPrivate
                />
            </Switch>
        </Router>
    )
}

export default Routes;
