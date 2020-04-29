import React, { Component } from "react";
import "./App.css";
import userService from "./utils/userService";
import { Switch, Route } from "react-router-dom";
import SignupForm from "./pages/SignupForm/SignupForm";
import LoginPage from "./pages/LoginPage/LoginPage";
import NavBar from "./components/NavBar/NavBar";

class App extends Component {
  state = {
    user: userService.getUser(),
  };

  handleLogout = () => {
    userService.logout();
    this.setState({
      user: null,
    });
  };

  render() {
    return (
      <div className="App">
        <NavBar />
      </div>
    );
  }
}

export default App;
