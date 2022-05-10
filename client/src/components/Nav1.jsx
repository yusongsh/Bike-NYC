import React from "react";
import { Link } from "react-router-dom";
import "../style/nav1.css";
import { useState } from "react";

function Nav1() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="nav1">
      <div className="nav-left" id={showLinks ? "hidden" : ""}>
        <Link to="">Explore</Link>
        <Link to="">Learn</Link>
        <Link to="">Shop</Link>
      </div>
      <div className="nav-middle">
        <div className="bike"></div>
        <Link to="">BIKE NYC</Link>
      </div>
      <div className="nav-right">
        <Link to="">Contact</Link>
      </div>
      <div className="hidden-menu">
        <button onClick={() => setShowLinks(!showLinks)}></button>
      </div>
    </div>
  );
}

export default Nav1;
