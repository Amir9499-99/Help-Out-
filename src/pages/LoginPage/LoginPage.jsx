import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";
import userService from "../../utils/userService";
import NavBar from "../../components/NavBar/NavBar";
import "./LoginPage.css";

class LoginPage extends Component {
  state = {
    email: "",
    pw: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.login(this.state);
      this.props.handleSignupOrLogin();
      this.props.history.push("/services");
    } catch (err) {
      console.log(err);
      console.log(this.state);
      
    }
  };

  render() {
    return (
      <div>
        <NavBar />
        <div className="LoginPage">
          <form className="form-horizontal" onSubmit={this.handleSubmit}>
            <header className="header-footer">Log In</header>
            <div className="form-group">
              <div className="col-sm-12">
                <TextField
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={this.state.email}
                  name="email"
                  onChange={this.handleChange}
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                <TextField
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={this.state.pw}
                  name="pw"
                  onChange={this.handleChange}
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12 text-center">
                <Button
                  className="sumbit"
                  type="submit"
                  variant="contained"
                  color="primary"
                  onClick={this.handleSubmit}
                >
                  Log in
                </Button>
                &nbsp;&nbsp;&nbsp;
              </div>
            </div>
          </form>
          <Link to="/signup" className="signup">
            Click here to, <span>Sign Up</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default LoginPage;
