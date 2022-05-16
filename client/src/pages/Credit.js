import React from "react";
import Footer1 from "../components/Footer1";
import Nav1 from "../components/Nav1";
import "../style/credit.css";
import spinningCube from "../assest/spinnn.png";
import group from "../assest/group.png";

function Credit() {
  return (
    <>
      <Nav1 />
      <div className="credit-main">
        <div className="credit-main-1">
          <div className="credit-main-spin">
            <img id="spin" src={spinningCube} alt="spinning cube" />
          </div>
          <div className="credit-main-text">
            <h3>
              Thank you everyone. I am tremendously grateful to you all, and
              Congratulations:{" "}
              <span style={{ textTransform: "uppercase" }}>
                THE NEXT GENERATION OF software engineers.👨🏻‍💻👩🏻‍💻
              </span>
            </h3>
          </div>
        </div>
        <div className="credit-main-2"></div>
      </div>
      <div className="credit-row-1">
        <div className="credit-row-column1">
          <div className="social">
            <a
              style={{ color: "#fff" }}
              href="https://www.linkedin.com/in/yusongshi/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
          <div className="social-block"></div>
        </div>
        <div className="credit-row-column2">
          <div className="social">
            {" "}
            <a
              style={{ color: "#fff" }}
              href="https://github.com/yusongsh"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
          <div className="social-block"></div>
        </div>
        <div className="credit-row-column3">
          <div className="social">
            <a
              style={{ color: "#fff" }}
              href="mailto:jackshi.sys@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Email
            </a>
          </div>
          <div className="social-block"></div>
        </div>
        <div className="credit-row-column4">
          <div className="social">
            {" "}
            <a
              style={{ color: "#fff" }}
              href="https://yusong.space/"
              target="_blank"
              rel="noreferrer"
            >
              Website
            </a>
          </div>
          <div className="social-block"></div>
        </div>
      </div>
      <Footer1 />
    </>
  );
}

export default Credit;
