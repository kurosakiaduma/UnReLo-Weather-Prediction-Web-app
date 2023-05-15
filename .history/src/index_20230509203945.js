import React from "react";
import ReactDOM from "react-dom";
import SensorOne from "./Sensorstats/sensorOne";
import SensorTwo from "./Sensorstats/sensorTwo";
import SensorThree from "./Sensorstats/sensorThree";
import SensorFour from "./Sensorstats/sensorFour";
import Login from "./auth/Login";
import { AuthProvider } from "./components/AuthProvider";
import WeatherDataGrid from "./pages/Weatherdata";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./auth/Register";
import Home from "./pages/Home";


const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />}></Route>
        <Route path="/weatherdata" element={<WeatherDataGrid />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/sensorOne" element={<SensorOne />}></Route>
        <Route path="/sensorTwo" element={<SensorTwo />}></Route>
        <Route path="/sensorThree" element={<SensorThree />}></Route>
        <Route path="/sensorFour" element={<SensorFour/>}></Route>
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
