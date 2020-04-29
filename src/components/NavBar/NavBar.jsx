import React from "react";
import {Route, Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = (props) => {
  let nav = props.user ? (
    <React.Fragment>
      <Link to="/" className="NavBar-link">
        HOME
      </Link>
      &nbsp;&nbsp;<span>|</span>&nbsp;&nbsp;&nbsp;
      <span className="NavBar-link">WELCOME - {props.user.name}</span>
      &nbsp;&nbsp;<span>|</span>&nbsp;&nbsp;&nbsp;
      <Link to="" onClick={props.handleLogout} className="NavBar-link">
        LOG OUT
      </Link>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <Link to="/signin" className="NavBar-link"> LOG IN </Link>
      &nbsp;&nbsp;<span>|</span>&nbsp;&nbsp;
      <Link to="/signup" className="NavBar-link"> SIGN UP </Link>
    </React.Fragment>
  );

  return <div className="NavBar">{nav}</div>;
};

export default NavBar;
