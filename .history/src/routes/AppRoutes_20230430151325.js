import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import WeatherData from "../pages/Weatherdata";
import Login from "../auth/Login";
import Register from "../auth/Register";



const AppRoutes = () => {
    return (
        <Router>
        <Switch>
            <Route exact path="/" component={<Login />} />
            <Route path="/weatherdata" component={<WeatherData />} />
            <Route path="/home" component={<Home />} />
            <Route path="/register" component={<Register />} />
        </Switch>
        </Router>
    );
};

export default AppRoutes;