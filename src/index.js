import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "antd/dist/antd.less";
import "antd/dist/antd.variable.min.css";
import NavigationBar from "./components/Global/NavigationBar";
ReactDOM.render(
  <div>
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<App />} exact />
      </Routes>
    </Router>
  </div>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
