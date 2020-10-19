import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import DashboardComponent from "./components/pages/Dashboard";

const Router = () => {
    return (
        <Switch>
            <Route exatc path="/dashboard" component={DashboardComponent}/>
            <Redirect from="*" to="/dashboard"/>
        </Switch>
    );
}

export default Router;