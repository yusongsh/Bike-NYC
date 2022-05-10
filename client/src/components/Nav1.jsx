import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../style/nav1.css";
import { useState } from "react";

function Nav1() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="nav1">
      <div className="nav-left" id={showLinks ? "hidden" : ""}>
        <Link to="/explore">Explore</Link>
        <NavLink to="/learn">Learn</NavLink>
        <Link to="/shop">Shop</Link>
      </div>
      <div className="nav-middle">
        <div className="bike"></div>
        <Link to="/">BIKE NYC</Link>
      </div>
      <div className="nav-right">
        <Link to="/contact">Contact</Link>
      </div>
      <div className="hidden-menu">
        <button onClick={() => setShowLinks(!showLinks)}></button>
      </div>
    </div>
  );
}

export default Nav1;
