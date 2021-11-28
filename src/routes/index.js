import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

// import CustomRoute from './CustomRoute';

import * as Modules from './modules';

const Routes = () => {
    return (
        // <Router basename={process.env.PUBLIC_URL}>
        <Router>
            <Switch>
                <Route
                    path="/"
                    component={Modules.SignIn}
                    exact
                />

                <Route
                    path="/sign-up"
                    component={Modules.SignUp}
                    exact
                />

                <Route
                    path="/dashboard"
                    component={Modules.Dashboard}
                    exact
                />
            </Switch>
        </Router>
    )
}

export default Routes;
