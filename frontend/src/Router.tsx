import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import AddPet from "./components/pages/AddPet";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import Hero from "./components/pages/Hero";
import Pet from "./components/pages/Pet";

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Hero}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/pet" component={Pet}/>
            <Route path="/add" component={AddPet}/>
            <Redirect from="*" to="/"/>
        </Switch>
    );
}

export default Router;