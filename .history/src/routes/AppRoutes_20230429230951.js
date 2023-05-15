import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import WeatherData from "../pages/Weatherdata";
import Login from "../auth/Login";
import Register from "../auth/Register";



const AppRoutes = () => {
    return (
        <Switch>
            <Route exact path="/" component={<Login />} />
            <Route path="/weatherdata" component={<WeatherData />} />
            <Route path="/home" component={<Home />} />
            <Route path="/register" component={<Register />} />
        </Switch>
    );
};

export default AppRoutes;