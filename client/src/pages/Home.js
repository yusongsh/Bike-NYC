import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import "../style/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import img1 from "../assest/img-2.png";
import img2 from "../assest/img-3.png";
import { Link } from "react-router-dom";
import Nav1 from "../components/Nav1";

export default function Home() {
  return (
    <>
      <Nav1 />
      <div className="home-main">
        <div className="home-hero">
          <h1>BIKE NYC</h1>
        </div>
      </div>
      <Footer />
    </>
  );
}
