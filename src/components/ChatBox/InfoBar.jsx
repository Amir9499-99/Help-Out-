import React from "react";
import closeIcon from "../../Icons/closeIcon.png";
import onlineIcon from "../../Icons/onlineIcon.png";
import "./InfoBar.css";

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <img
        src="https://i.imgur.com/tBA33cf.png"
        alt="online image"
        className="onlineIcon"
      />
      <h1>{room}</h1>
    </div>
    <div className="rightInnerContainer">
      <a href="/">
        <img src="https://i.imgur.com/jvbjIzM.png" alt="close image" />
      </a>
    </div>
  </div>
);

export default InfoBar;
