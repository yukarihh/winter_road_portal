import React from "react";
import { Grid, Layout, Menu, Typography } from "antd";
import { Link } from "react-router-dom";
import CanadaMap from "../../../assets/canada_map.png";
import { MenuOutlined } from "@ant-design/icons";
import titleImage from "../../../assets/homebg_3.png";
import emailIcon from "../../../assets/email.png";
import "./styles.css";

const TeamMember = ({ props }) => {
  const { image, name, title, email } = props;
  return (
    <div
      className="teamMemberContainer"
    >
      <div className="teamMemberImageContainer">
        <img className="teamMemberImage" src={image} alt="teamMember" />
      </div>
      <div className="teamMemberTextContainer">
      <div className="teamMemberTitle">
        <Typography style={{ color: "#0E2959" }}>{name}</Typography>
      </div>

      <div className="teamMemberText">
        <Typography style={{ color: "#0E2959" }}>{title}</Typography>
      </div>

      <div className="teamMemberEmailImageContainer">
       <a href={"mailto:" + email} target="_blank" rel="noreferrer"><img className="teamMemberEmailImage" src={emailIcon} alt="teamMember" /></a> 
      </div>
      </div>
    </div>
  );
};

export default TeamMember;
