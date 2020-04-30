import React, { Component } from "react";
import userService from "../../utils/userService";
import { TextField, Button } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import FacebookIcon from "@material-ui/icons/Facebook";
import NavBar from "../../components/NavBar/NavBar";
import "./SignupForm.css";

class SignupForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await userService.signup(this.state);
      this.props.handleSignupOrLogin();
      this.props.history.push("/services");
      // this.props.history.push("/signin");
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div>
        <NavBar user={this.props.user} handleLogout={this.props.handleLogout} />
        <div className="mt-5 mb-5 container-fluid">
          <p>Thank you for Helping Out!</p>
          <p className="we-just-need">
            We just need little information to get you started
          </p>
          <div className="facebook-google-container">
            <p className="sign-up-with">Sign up with </p>
            <div className="sign-in-with-f">
              <FacebookIcon
                className="facebook"
                style={{ fontSize: 40 }}
                color="primary"
              />
              <p className="sign-in-with-facebook">
                <strong>Sign In With Facebook!</strong>{" "}
              </p>
            </div>
            <div className="sign-in-with-g">
              <img
                className="google"
                style={{ width: 50, height: 30 }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
              />
              <p className="sign-in-with-facebook">
                <strong>Sign In With Google!</strong>{" "}
              </p>
            </div>
          </div>
          <form className="form-horizontal" onSubmit={this.handleSubmit}>
            <div className="SignupForm">
              <p>Sign Up</p>
              <div className="form-group">
                <div className="col-sm-12">
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    placeholder="name"
                    onChange={this.handleChange}
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-12">
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    placeholder="email"
                    onChange={this.handleChange}
                    id="outlined-basic"
                    label="email"
                    variant="outlined"
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-12">
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    placeholder="password"
                    onChange={this.handleChange}
                    id="outlined-basic"
                    label="password"
                    variant="outlined"
                  />
                </div>
              </div>
              <Button
                className="sumbit-button"
                type="submit"
                variant="contained"
                color="primary"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignupForm;
