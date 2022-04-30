import React from "react";
import "../index.css";

const LeftMenu = function () {
  return (
    <div className="leftmenu">
      <div className="flex--icon">
        <i className="home icon " style={{ fontSize: "20px" }}></i>
        <h2 className="icons--text" style={{ paddingLeft: "30px" }}>
          Home
        </h2>
      </div>
      <div className="flex--icon">
        <i className="home icon " style={{ fontSize: "20px" }}></i>
        <h2 className="icons--text" style={{ paddingLeft: "30px" }}>
          Navigator
        </h2>
      </div>
      <div className="flex--icon">
        <i className="home icon " style={{ fontSize: "20px" }}></i>
        <h2 className="icons--text" style={{ paddingLeft: "30px" }}>
          Shorts
        </h2>
      </div>
      <div className="flex--icon">
        <i className="home icon " style={{ fontSize: "20px" }}></i>
        <h2 className="icons--text" style={{ paddingLeft: "30px" }}>
          Following
        </h2>
      </div>
      <div className="flex--icon">
        <i className="home icon " style={{ fontSize: "20px" }}></i>
        <h2 className="icons--text" style={{ paddingLeft: "30px" }}>
          Library
        </h2>
      </div>
      <div className="flex--icon">
        <i className="home icon " style={{ fontSize: "20px" }}></i>
        <h2 className="icons--text" style={{ paddingLeft: "30px" }}>
          History
        </h2>
      </div>
      <div className="flex--icon">
        <i className="home icon " style={{ fontSize: "20px" }}></i>
        <h2 className="icons--text" style={{ paddingLeft: "30px" }}>
          My video
        </h2>
      </div>
      <div className="flex--icon">
        <i className="home icon " style={{ fontSize: "20px" }}></i>
        <h2 className="icons--text" style={{ paddingLeft: "30px" }}>
          List
        </h2>
      </div>
      <div className="flex--icon">
        <i className="home icon " style={{ fontSize: "20px" }}></i>
        <h2
          className="icons--text"
          style={{ paddingLeft: "30px", textAlign: "left" }}
        >
          Chanel
        </h2>
      </div>
    </div>
  );
};

export default LeftMenu;
