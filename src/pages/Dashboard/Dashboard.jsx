import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import "./Dashboard.css";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <NavBar user={this.props.user} handleLogout={this.props.handleLogout} />
        <div>
          <img
            src="https://i.imgur.com/zUlVb3J.png"
            className="dashboardImage"
          />
        </div>
        <div className="dashboardSideDiv">
          <p> Help Out Your Community! </p>
          <span>
            Connect with your neighbors, friends and community to help each
            other out. Once you’ve created a login you can volunteer to help by
            offering services, support or goods and supplies. Or if you need
            help you can look for assistance or make a request. <br />
            <strong>Sign up now and start helping out!</strong>
          </span>
          <div className="get-started">
            <h2>Get started</h2>
            <h3> Enter your city and zip code </h3>
            <input
              type="text"
              value={this.props.input}
              onChange={this.props.handleLocation}
            />
            <Link to="/services" className="navColor">
              <input className="go" type="submit" value="GO" />
            </Link>
            <br />
            <h4>
              Already a member? <a href="/signin">Sign in here!</a>{" "}
            </h4>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Dashboard;
