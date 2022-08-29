import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "antd/dist/antd.min.css";
import "antd/dist/antd.variable.min.css";
import NavigationBar from "./components/Global/NavigationBar";
import Home from "./pages/Home";
ReactDOM.render(
  <div>
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} exact />
      </Routes>
    </Router>
  </div>,
  document.getElementById("root")
);
