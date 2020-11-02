import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import AddPet from "./components/pages/AddPet";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import Pet from "./components/pages/Pet";

const Router = () => {
    return (
        <Switch>
            <Route exatc path="/dashboard" component={Dashboard}/>
            <Route path="/pet" component={Pet}/>
            <Route path="/add" component={AddPet}/>
            <Redirect from="*" to="/dashboard"/>
        </Switch>
    );
}

export default Router;