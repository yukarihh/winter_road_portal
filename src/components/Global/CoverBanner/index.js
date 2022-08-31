import React from "react";
import { Grid, Typography } from "antd";
import coverBannerBg from "../../../assets/coverBanner.png";
import "./styles.css";

const CoverBanner = ({title}) => {
  const mobile = !Grid.useBreakpoint()["lg"];

  return (
    <div
      className="coverBannerContainer"
      style={{ backgroundImage: `url(${coverBannerBg})` }}
    >
      <div className="coverBannerTitle">
        <Typography style={{ color: "white" }}>{title}</Typography>
      </div>
    </div>
  );
};

export default CoverBanner;
