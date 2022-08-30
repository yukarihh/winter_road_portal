import React from "react";
import { Grid, Layout, Menu, Typography } from "antd";
import { Link } from "react-router-dom";

import { MenuOutlined } from "@ant-design/icons";
import "./styles.css";

const FeatureItem = ({ props }) => {
  const { image, title, content } = props;
  return (
    <div className="featureItemContainer">
      <div className="featureBannerImageContainer">
        <img className="featureBannerImage" src={image} alt="featureBanner" />
      </div>
      <div className="featureBannerTitle">
        <Typography style={{ color: "#0E2959" }}>{title}</Typography>
      </div>

      <div className="featureBannerText">
        <Typography style={{ color: "#0E2959" }}>{content}</Typography>
      </div>
    </div>
  );
};

export default FeatureItem;
