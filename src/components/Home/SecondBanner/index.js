import React from "react";
import { Grid, Layout, Menu, Typography } from "antd";
import { Link } from "react-router-dom";
import CanadaMap from "../../../assets/canada_map.png";
import { MenuOutlined } from "@ant-design/icons";
import titleImage from "../../../assets/homebg_3.png";
import "./styles.css";

const SecondBanner = () => {
  return (
    <div className="secondBannerContainer">
      <div className="secondBannerImageContainer">
        <img className="secondBannerImage" src={titleImage} alt="secondBannerImage" />
      </div>
      <div className="secondBannerTitle">
        <Typography style={{ color: "#0E2959" }}>
          Climate Change Impacts on Northern Transportation Networks
        </Typography>
      </div>

      <div className="secondBannerText">
        <Typography style={{ color: "#0E2959" }}>
          In the North, winter roads provide relatively inexpensive overland
          connection to the all-season road network, which in turn connects from
          remote to larger communities and the rest of Canada, much passenger
          and freight movements for remote Northern communities and resource
          sites occur during the winter road season. Climate change is impacting
          the surface quality of the winter roads, seasonal lengths, and freight
          schedule such as the movements of goods and services.
        </Typography>
      </div>
    </div>
  );
};

export default SecondBanner;
