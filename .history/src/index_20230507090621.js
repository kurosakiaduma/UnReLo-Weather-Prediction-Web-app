import React from 'react';
import ReactDOM from 'react-dom';
import Login from './auth/Login';
import WeatherDataGrid from './pages/Weatherdata';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './auth/Register';
import Home from './pages/Home';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={< Login />} />
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/weatherdata" element={<WeatherDataGrid />}></Route>
      <Route path="/home" element={<Home />}></Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
