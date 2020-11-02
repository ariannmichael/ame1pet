import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import AddPet from "./components/pages/AddPet";
import DashboardComponent from "./components/pages/Dashboard";
import Pet from "./components/pages/Pet";

const Router = () => {
    return (
        <Switch>
            <Route exatc path="/dashboard" component={DashboardComponent}/>
            <Route path="/pet" component={Pet}/>
            <Route path="/add" component={AddPet}/>
            <Redirect from="*" to="/dashboard"/>
        </Switch>
    );
}

export default Router;