import React from "react";
import "../style/footer1.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer1() {
  return (
    <div className="footer1">
      <div className="footer-left">
        <div className="footer-left-col1">
          <Link to="/">
            <h2>BIKE NYC</h2>
          </Link>
          <p>
            © 2022 Bike NYC – All Rights Reserved. Design & Site By Yusong Shi
          </p>
        </div>

        <div className="footer-left-col2">
          <div className="footer-left-col2-title">
            <h3>MENU ITEMS</h3>
          </div>
          <div className="footer-links">
            <div className="footer-link1">
              <Link to="/shop">Shop</Link>
              <Link to="/explore">Explore</Link>
              <Link to="/learn">Learn</Link>
              <Link to="">Featured</Link>
              <a
                href="https://www.weatherapi.com/weather/q/new-york-new-york-united-states-of-america-2618724"
                rel="noreferrer"
                target="_blank"
              >
                Local Weather
              </a>
            </div>
            <div className="footer-link2">
              <Link to="/contact">Contact</Link>
              <Link to="/privacy">Privacy</Link>
              <Link to="/credit">Credit</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-right">
        <div className="footer-right-col1">
          <h3> Get the latest from us</h3>
          <form>
            <input type="text" placeholder="Enter your email"></input>
            <button className="signup-cta">Sign up</button>
          </form>
        </div>
        <div className="footer-right-col2">
          <h3> Be Social</h3>
          <a
            href="https://www.linkedin.com/in/yusongshi/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
          </a>
          <a
            href="https://github.com/yusongsh"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
          <a
            href="mailto:jackshi.sys@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} size="lg" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer1;
