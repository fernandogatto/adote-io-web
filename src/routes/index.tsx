import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    // Route,
} from 'react-router-dom';

import CustomRoute from './CustomRoute';

import * as Modules from './modules';

const Routes = (): JSX.Element => {
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

                <CustomRoute
                    path="/adoption/create"
                    component={Modules.CreateEditChild}
                    exact
                    isPrivate
                />

                <CustomRoute
                    path="/adoption/edit/child/:id"
                    component={Modules.CreateEditChild}
                    exact
                    isPrivate
                />

                <CustomRoute
                    path="/adoption/child/:id"
                    component={Modules.ViewChild}
                    exact
                    isPrivate
                />

                <CustomRoute
                    path="/adoption/request/child/:id"
                    component={Modules.AdoptionRequests}
                    exact
                    isPrivate
                />

                <CustomRoute
                    path="/depositions"
                    component={Modules.Depositions}
                    exact
                    isPrivate
                />

                <CustomRoute
                    path="/adoption-process"
                    component={Modules.AdoptionProcess}
                    exact
                    isPrivate
                />

                <CustomRoute
                    path="/adoption-consolidated"
                    component={Modules.AdoptionConsolidated}
                    exact
                    isPrivate
                />
            </Switch>
        </Router>
    );
}

export default Routes;
