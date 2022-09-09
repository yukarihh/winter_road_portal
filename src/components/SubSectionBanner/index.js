import React from "react";
import { Grid, Layout, Menu, Typography } from "antd";
import { Link } from "react-router-dom";
import CanadaMap from "../../assets/canada_map.png";
import { MenuOutlined } from "@ant-design/icons";
import titleImage from "../../assets/homebg_3.png";
import "./styles.css";

const SubSectionBanner = ({ props }) => {
  const { image, title, content, bgColor } = props;
  return (
    <div
      className="subSectionBannerContainer"
      style={{ backgroundColor: bgColor }}
    >
      <div className="subSectionBannerImageContainer">
        <img className="subSectionBannerImage" src={image} alt="subSectionBanner" />
      </div>
      <div className="subSectionBannerTextContainer">
      <div className="subSectionBannerTitle">
        <Typography style={{ color: "#0E2959" }}>{title}</Typography>
      </div>


      </div>
    </div>
  );
};

export default SubSectionBanner;
