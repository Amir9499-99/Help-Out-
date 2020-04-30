import React from "react";
import "./Footer.css";

const Footer = () => (
  <div className="container-fluid footer">
    <div className="row">
      <div className="col-2">
        <ul>
          <li>About Us</li>
          <li>How it Works</li>
          <li>FAQ</li>
        </ul>
      </div>
      <div className="col-2">
        <ul>
          <li>Legal</li>
          <li>Privacy Policy</li>
          <li>Terms of Use</li>
        </ul>
      </div>
      <div className="col-5"></div>
      <div className="col-3">
        <ul className="footer-icons">
          <li>
            <img src="https://i.imgur.com/zJQlqri.png" alt="" />
          </li>
          <li>
            <img src="https://i.imgur.com/kxO2I3o.png" alt="" />
          </li>
        </ul>
        <ul>
          <li>Copyright ©️ 2020 HelpOut. All rights reserved.</li>
        </ul>
      </div>
    </div>
  </div>
);

export default Footer;
