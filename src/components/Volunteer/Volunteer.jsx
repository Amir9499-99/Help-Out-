import React, { Component, useState } from "react";
import "./Volunteer.css";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

class Volunteer extends Component {
  constructor() {
    super();
    this.state = {
      category: "",
      errands: "",
      value: null,
    };
  }

  // handleChange = (event) => {
  //   this.setValue(event.target.value);
  // };

  handleCategory = (e) => {
    console.log(e.target.value);
    this.setState({ category: e.target.value });
  };

  handleErrands = (e) => {
    this.setState({ errands: e.target.value });
  };

  render() {
    return (
      <div className="container mt-5 mb-5">
        <p className="thank-you">Thank You For Volunteering</p>
        <span className="text-muted">
          Follow these easy steps to make a post
        </span>
        <div className="one mt-3">
          <span className="buttonNumber">1</span>
          <span className="title">Tell us how you’d like to help. </span>
        </div>
        <br />
        <FormControl className="form-control" component="fieldset">
          <RadioGroup
            aria-label="gender"
            name="category"
            value={this.state.value}
            onChange={this.handleCategory}
          >
            <FormControlLabel
              className="radio-button"
              value="Errands"
              control={<Radio />}
              label="Errands & Services"
            />
            <FormControlLabel
              className="radio-button"
              value="Support"
              control={<Radio />}
              label="Support & Advice"
            />
            <FormControlLabel
              className="radio-button"
              value="Goods"
              control={<Radio />}
              label="Goods & Supplies"
            />
          </RadioGroup>
        </FormControl>
        <br />
        <div className="two">
          <span className="buttonNumber">2</span>
          <span className="title">
            Tell us what type of _____ you are offering.{" "}
          </span>
        </div>
        <br />
        {this.state.category === "Errands" && (
          <div className="errands-services">
            <FormControl className="form-control-errands" component="fieldset">
              <span className="title-errands">Errands & Services. </span>
              <br />
              <RadioGroup
                aria-label="gender"
                name="Errands"
                value={this.state.value}
                onChange={this.handleErrands}
              >
                <FormControlLabel
                  className="radio-button"
                  value="Pick up and Delivery "
                  control={<Radio />}
                  name="PickUp"
                  label="Pick up and Delivery "
                />
                <FormControlLabel
                  className="radio-button"
                  value="Gardening & yard work"
                  control={<Radio />}
                  name="Gardening"
                  label="Gardening & yard work"
                />
                <FormControlLabel
                  className="radio-button"
                  value="Postal delivery and pick up"
                  control={<Radio />}
                  name="Postal"
                  label="Postal delivery and pick up"
                />
                <FormControlLabel
                  className="radio-button"
                  value="House Cleaning"
                  control={<Radio />}
                  name="HouseCleaning"
                  label="House Cleaning"
                />
                <FormControlLabel
                  className="radio-button"
                  value="Transportation Services"
                  control={<Radio />}
                  name="Transportation"
                  label="Transportation Services"
                />
                <FormControlLabel
                  className="radio-button"
                  value="Dog Walking"
                  control={<Radio />}
                  name="DogWalking"
                  label="Dog Walking"
                />
                <FormControlLabel
                  className="radio-button"
                  value="Home Repairs "
                  control={<Radio />}
                  name="HomeRepairs"
                  label="Home Repairs "
                />
              </RadioGroup>
            </FormControl>
          </div>
        )}
        {this.state.category === "Support" && (
          <div className="support-advice">
            <FormControl className="form-control-errands" component="fieldset">
              <span className="title-support">Support & Advice. </span>
              <br />
              <RadioGroup
                aria-label="gender"
                name="gender1"
                value={this.state.value}
                onChange={this.handleChange}
              >
                <FormControlLabel
                  className="radio-button"
                  value="Emotional Support "
                  control={<Radio />}
                  label="Emotional Support "
                />
                <FormControlLabel
                  className="radio-button"
                  value="IT/Tech Help"
                  control={<Radio />}
                  label="IT/Tech Help"
                />
                <FormControlLabel
                  className="radio-button"
                  value="Tips and Tricks"
                  control={<Radio />}
                  label="Tips and Tricks"
                />
                <FormControlLabel
                  className="radio-button"
                  value="Activities for Kids"
                  control={<Radio />}
                  label="Activities for Kids"
                />
                <FormControlLabel
                  className="radio-button"
                  value="Recipes & Cooking Advice"
                  control={<Radio />}
                  label="Recipes & Cooking Advice"
                />
                <FormControlLabel
                  className="radio-button"
                  value="Medical Advice"
                  control={<Radio />}
                  label="Medical Advice"
                />
              </RadioGroup>
            </FormControl>
          </div>
        )}
        {this.state.category === "Goods" && (
          <div className="support-advice">
            <FormControl className="form-control-errands" component="fieldset">
              <span className="title-support">Goods & Supplies. </span>
              <br />
              <RadioGroup
                aria-label="gender"
                name="gender1"
                value={this.state.value}
                onChange={this.handleChange}
              >
                <FormControlLabel
                  className="radio-button"
                  value="Food & Beverages "
                  control={<Radio />}
                  label="Food & Beverages "
                />
                <FormControlLabel
                  className="radio-button"
                  value="Face Masks"
                  control={<Radio />}
                  label="Face Masks"
                />
                <FormControlLabel
                  className="radio-button"
                  value="Toilet Paper & Paper Goods"
                  control={<Radio />}
                  label="Toilet Paper & Paper Goods"
                />
                <FormControlLabel
                  className="radio-button"
                  value="Clothes"
                  control={<Radio />}
                  label="Clothes"
                />
                <FormControlLabel
                  className="radio-button"
                  value="Baby Supplies"
                  control={<Radio />}
                  label="Baby Supplies"
                />
                <FormControlLabel
                  className="radio-button"
                  value="Pet Supplies"
                  control={<Radio />}
                  label="Pet Supplies"
                />
              </RadioGroup>
            </FormControl>
          </div>
        )}
        <div className="one mt-3">
          <span className="buttonNumber">3</span>
          <span className="title">
            Create Your Post. Fill in the information you want your community to
            see.
          </span>
        </div>
      </div>
    );
  }
}
export default Volunteer;
