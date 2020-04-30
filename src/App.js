import React, { Component } from "react";
import "./App.css";
import userService from "./utils/userService";
import { Switch, Route } from "react-router-dom";
import SignupForm from "./pages/SignupForm/SignupForm";
import LoginPage from "./pages/LoginPage/LoginPage";
import NavBar from "./components/NavBar/NavBar";
import Dashboard from "./pages/Dashboard/Dashboard";

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
    const isLoggedIn = this.state.user;
    return (
      <div className="App">
        {!isLoggedIn && <LoginPage />}
        { isLoggedIn && <Dashboard handleLogout={this.handleLogout} />}
      </div>
    );
  }
}

export default App;
