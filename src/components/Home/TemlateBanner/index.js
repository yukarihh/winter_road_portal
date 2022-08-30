import React from "react";
import { Grid, Layout, Menu, Typography } from "antd";
import { Link } from "react-router-dom";
import CanadaMap from "../../../assets/canada_map.png";
import { MenuOutlined } from "@ant-design/icons";
import titleImage from "../../../assets/homebg_3.png";
import "./styles.css";

const TemplateBanner = ({ props }) => {
  const { image, title, content, bgColor } = props;
  return (
    <div
      className="templateBannerContainer"
      style={{ backgroundColor: bgColor }}
    >
      <div className="templateBannerImageContainer">
        <img className="templateBannerImage" src={image} alt="templateBanner" />
      </div>
      <div className="templateBannerTitle">
        <Typography style={{ color: "#0E2959" }}>{title}</Typography>
      </div>

      <div className="templateBannerText">
        <Typography style={{ color: "#0E2959" }}>{content}</Typography>
      </div>
    </div>
  );
};

export default TemplateBanner;
