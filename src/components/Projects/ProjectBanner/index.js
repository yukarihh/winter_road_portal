import React from "react";
import { Grid, Layout, Menu, Typography } from "antd";
import { Link } from "react-router-dom";
import CanadaMap from "../../../assets/canada_map.png";
import { MenuOutlined } from "@ant-design/icons";
import titleImage from "../../../assets/homebg_3.png";
import "./styles.css";

const ProjectBanner = ({ props }) => {
  const { image, title, content, bgColor } = props;
  return (
    <div
      className="projectBannerContainer"
      style={{ backgroundColor: bgColor }}
    >
      <div className="projectBannerImageContainer">
        <img className="projectBannerImage" src={image} alt="projectBanner" />
      </div>
      <div className="projectBannerTextContainer">
      <div className="projectBannerTitle">
        <Typography style={{ color: "#0E2959" }}>{title}</Typography>
      </div>

      <div className="projectBannerText">
        <Typography style={{ color: "#0E2959" }}>{content}</Typography>
      </div>
      </div>
    </div>
  );
};

export default ProjectBanner;
