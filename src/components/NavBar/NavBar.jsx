import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import userService from "../../utils/userService";
import "./NavBar.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  let loginOrLogout = props.user ? (
    <div>
      <Link to="/">
        <MenuItem className="proIcon" onClick={props.handleLogout}>
          Log Out
        </MenuItem>
      </Link>
    </div>
  ) : (
    <div>
      <Link to="/login">
        <MenuItem className="proIcon">Log In</MenuItem>
      </Link>
      <Link to="/signup">
        <MenuItem className="proIcon">Sign Up</MenuItem>
      </Link>
    </div>
  );
  return (
    <AppBar position="static">
      <Toolbar>
        <div className="helpOutDiv">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <Link to="/" className="helpOut">
              <img
                src="https://i.imgur.com/TIbHAje.png"
                className="helpOutLogo"
              />
              HELP OUT
            </Link>
          </IconButton>
        </div>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <Link to="/about" className="navColor">
            About
          </Link>
        </IconButton>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <Link to="/services" className="navColor">
            Get Started
          </Link>
        </IconButton>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <Link to="/help" className="navColor">
            Help
          </Link>
        </IconButton>
        <Typography variant="h6" className={classes.title}></Typography>
        <div>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <Link to="/join" className="navColor">
                Chat
            </Link>
          </IconButton>
          <IconButton
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle className="profile-icon" />
          </IconButton>

          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={open}
            onClose={handleClose}
          >
            {loginOrLogout}
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
}
