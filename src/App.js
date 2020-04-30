import React, { Component } from "react";
import "./App.css";
import userService from "./utils/userService";
import { Switch, Route } from "react-router-dom";
import VolunteerPage from "./pages/VolunteerPage/VolunteerPage";
import NavBar from "./components/NavBar/NavBar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Join from "./components/ChatBox/Join";
import Chat from "./components/ChatBox/Chat";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Help from "./pages/Help/Help";
import LoginPage from "./pages/LoginPage/LoginPage";
import ChatPage from "./pages/ChatPage/ChatPage";
import SignupForm from "./pages/SignupForm/SignupForm";

class App extends Component {
  state = {
    location: "",
    user: userService.getUser(),
  };

  handleLogout = () => {
    console.log('hitting')
    userService.logout();
    this.setState({
      user: null,
    });
    console.log(this.state.user)
  };

  handleLocation = (e) => {
    this.setState({
      ...this.state.location,
      location: e.target.value,
    });
  };

  handleSignupOrLogin = () => {
    this.setState({
      user: userService.getUser(),
    })
  }

  render() {
    const isLoggedIn = this.state.user;
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path={"/volunteer"}
            input={this.state.location}
            render={({ history }) => <VolunteerPage />}
          />
          <Route exact path={"/join"} render={({ history }) => <ChatPage />} />
          <Route exact path={"/chat"} render={({ history }) => <Chat />} />
          <Route exact path="/about" render={({ history }) => <About />} />
          <Route
            exact
            path="/services"
            render={({ history }) =>
              this.state.user ? <Services /> : <LoginPage />
            }
          />
          <Route
            exact
            path="/help"
            exact
            path="/about"
            render={({ history }) => <Help />}
          />
          <Route exact path="/login" render={({ history }) => 
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin} 
            />
          } />
          <Route
            exact
            path="/signup"
            render={({ history }) => <SignupForm user={this.state.user}/>}
          />
          <Route
            exact
            path={"/"}
            render={({ history }) => (
              <Dashboard
                user={this.state.user}
                handleLogout={this.handleLogout}
                input={this.state.location}
                handleLocation={this.handleLocation}
              />
            )}
          />
          />
        </Switch>
      </div>
    );
  }
}

export default App;
