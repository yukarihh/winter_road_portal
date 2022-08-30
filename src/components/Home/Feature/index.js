import React from "react";
import { Grid, Layout, Menu, Typography } from "antd";
import { Link } from "react-router-dom";
import CanadaMap from "../../../assets/canada_map.png";
import titleImage from "../../../assets/homebg_3.png";

import FeatureItem from "./FeatureItem";
import "./styles.css";

const Feature = ({ props }) => {
  return (
    <div className="featurePage">
      <Typography className="feturePageTitleText">Feature</Typography>
      <div className="featureOverallContainer">
        <FeatureItem props={props} />
        <FeatureItem props={props} />
        <FeatureItem props={props} />
        <FeatureItem props={props} />
      </div>
    </div>
  );
};

export default Feature;
