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
        <NavBar user={this.state.user} handleLogout={this.handleLogout} />
        <Switch>
          <Route exact path={"/"} render={({ history }) => <SignupForm />} />
          <Route exact path={"/"} render={({ history }) => <LoginPage />} />
        </Switch>
      </div>
    );
  }
}

export default App;
