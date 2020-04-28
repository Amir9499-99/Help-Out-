import React, { Component } from "react";
import "./App.css";
import SignupForm from "./pages/SignupForm/SignupForm";
import LoginPage from "./pages/LoginPage/LoginPage";
import userService from "./utils/userService";

class App extends Component {
  state = {
    user: userService.getUser(),
  };  

  render() {
    return (
      <div className="App">
        <SignupForm />
        <LoginPage />
      </div>
    );
  }
}

export default App;
