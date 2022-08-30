import React from "react";
import { Grid, Layout, Menu, Typography } from "antd";
import { Link } from "react-router-dom";
import CanadaMap from "../../../assets/canada_map.png";
import { MenuOutlined } from "@ant-design/icons";
import titleImage from "../../../assets/homebg_3.png";
import "./styles.css";

const FirstBanner = () => {
  return (
    <div className="firstBannerContainer">
        <div className="firstBannerImageContainer">
      <img className="firstBannerImage" src={titleImage}/>
      </div>
        <div className="firstBannerTitle">
            <Typography style={{ color: "#0E2959" }}>
            Climate Change Impacts on Winter Roads and Trails
            </Typography>
            </div>

      <div className="firstBannerText">
        <Typography style={{ color: "#0E2959" }}>
        Winter road networks are critical land transportation for remote
        Northern communities who rely on these networks for receiving essential
        goods and services during winter season. The public and private
        transportation sectors also rely on winter road networks for their
        operations. A warming climate has created a shorter winter road season,
        unreliable road conditions, and safety concerns.
        </Typography>
      </div>
    </div>
  );
};

export default FirstBanner;
