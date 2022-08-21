import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "antd/dist/antd.min.css";
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
