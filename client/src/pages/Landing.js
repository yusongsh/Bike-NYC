import React from "react";
import Nav1 from "../components/Nav1";
import Footer from "../components/Footer";
import Footer1 from "../components/Footer1";
import Slider from "../components/Slider";
// import "../style/landing.css";
import "../style/landing1.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import img1 from "../assest/img-2.png";
import img2 from "../assest/img-3.png";
import img3 from "../assest/img-4.jpg";
import { Link } from "react-router-dom";
import Weather from "../components/Weather";

function Landing() {
  return (
    <>
      <Nav1 />
      <div className="landing-container">
        <div className="landing">
          <div className="landing-left">
            <div className="landing-left-top">
              <div className="left-top1">
                <h1 className="animated">Bike NYC</h1>
              </div>
              <div className="left-top2">
                <div className="left-top2-up">
                  <a
                    href="https://www.weatherapi.com/weather/q/new-york-new-york-united-states-of-america-2618724"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <h5>Weather</h5>
                  </a>
                </div>
                <div className="left-top2-down">
                  <Weather />
                </div>
              </div>
            </div>
            <div className="landing-left-bottom">
              <Slider />
            </div>
          </div>

          <div className="landing-right">
            <div className="landing-right-top">
              <div className="right-top1">
                <div className="right-top1-up" style={{ top: "0px" }}>
                  <Link to="">
                    <h5 style={{ marginTop: "0px", top: "8px" }}>
                      Featured Paths
                    </h5>
                  </Link>
                </div>

                <div className="right-top1-down">
                  <Link to="">
                    <div className="path-info">
                      <img src={img1} alt="central park" />
                      <h4>Central Park Loop</h4>
                    </div>
                  </Link>
                  <Link to="">
                    <div className="path-info">
                      <img src={img2} alt="hudson river greenway" />
                      <h4>Hudson River Greenway</h4>
                    </div>
                  </Link>
                  <Link to="">
                    <div className="path-info">
                      <img src={img3} alt="central park" />
                      <h4>Brooklyn Bridge</h4>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="right-top2">
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

            <div className="landing-right-bottom">
              <div className="right-bottom1">
                <div>
                  <Link to="">
                    <h5>Learn</h5>
                  </Link>
                </div>
                <div>
                  <h2>bike rules, resources in NYC</h2>
                </div>
              </div>
              <div class="spiralContainer">
                <div class="spiral"></div>
              </div>
              <div className="right-bottom2">
                <div className="bottom2-top">
                  <div>
                    <Link to="">
                      <h5>Shop</h5>
                    </Link>
                  </div>
                  <div>
                    <h2>bike shops</h2>
                  </div>
                </div>
                <div className="bottom2-bottom">
                  <h2>latest events</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Landing;
