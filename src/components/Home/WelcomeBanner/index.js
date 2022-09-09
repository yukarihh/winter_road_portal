import React from "react";
import { Grid, Layout, Menu, Typography } from "antd";
import { Link } from "react-router-dom";
import CanadaMap from "../../../assets/canada_map.png";
import { MenuOutlined } from "@ant-design/icons";
import homebg_3 from "../../../assets/homebg_3.png";
import "./styles.css";

const WelcomeBanner = () => {
  const mobile = !Grid.useBreakpoint()["lg"];

  return (
    <div
      className="welcomeBannerContainer"
      style={{ backgroundImage: `url(${CanadaMap})` }}
    >
      <div className="welcomeBannerTitle">
        <Typography style={{ color: "#0E2959" }}>
          Welcome to the <br /> Winter Road and Trail Data Information Portal
          (WRTDIP)
        </Typography>
      </div>
      <div className="welcomeBannerText">
        <Typography style={{ color: "#0E2959" }}>
          The Winter Road and Trail Data Information Portal (WRTDIP) provides an
          interactive map with northern climate data, transportation networks,
          and social aspects of the winter road and trail networks in Canada's
          Territorial North. The aim of this portal is to support
          decision-making and policy prioritization on the management of winter
          roads and trails that are impacted by climate change.
        </Typography>
      </div>
    </div>
  );
};

export default WelcomeBanner;
