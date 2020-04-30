import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
import NavBar from "../../components/NavBar/NavBar";
import "./Services.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(26),
      height: theme.spacing(16),
    },
  },
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className="services">
      <NavBar />
      <div>
        <div className="heading1 mt-5">What Do You Want To Do Next?</div>
        <div className="subHeading">
          Choose between volunteering or need assistence below
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">I Want To Volunteer</h4>
                  <img
                    className="card-img"
                    src="https://i.imgur.com/ilvSIG4.png"
                    alt=""
                  />
                   <Link to="/volunteer"><a class="btn btn-success btn-block buttonLink" href="#">
                    Go
                  </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">I Need Assistance</h4>
                  <img
                    className="card-img2"
                    src="https://i.imgur.com/WLzAkM3.png"
                    alt=""
                  />
                  <a class="btn btn-success btn-block buttonLink" href="#">
                    Go
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
