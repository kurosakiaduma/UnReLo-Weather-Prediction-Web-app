import React from "react";
import ReactDOM from "react-dom";
import SensorOne from "./Sensorstats/sensorOne";
import SensorTwo from "./Sensorstats/sensorTwo";
import SensorThree from "./Sensorstats/sensorThree";
import SensorFour from "./Sensorstats/sensorFour";
import Login from "../src/Authentication/Login/Login";
import { AuthProvider } from "../src/Authentication/Provider/AuthProvider";
import WeatherDataGrid from "../src/Pages/Weatherdata";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "../src/Authentication/Register/Register";
import Home from "../src/Pages/Home";
import Data from "../src/Pages/Data";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Data />}></Route> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />}></Route>
          <Route path="/" element={<WeatherDataGrid />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/sensorOne" element={<SensorOne />}></Route>
          <Route path="/sensorTwo" element={<SensorTwo />}></Route>
          <Route path="/sensorThree" element={<SensorThree />}></Route>
          <Route path="/sensorFour" element={<SensorFour />}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
