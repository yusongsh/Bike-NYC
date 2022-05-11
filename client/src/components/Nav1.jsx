import React from "react";
import { NavLink } from "react-router-dom";
import "../style/nav1.css";
import { useState } from "react";

function Nav1() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="nav1">
      <div className="nav-left" id={showLinks ? "hidden" : ""}>
        <NavLink to="/explore">Explore</NavLink>
        <NavLink to="/learn">Learn</NavLink>
        <NavLink to="/shop">Shop</NavLink>
      </div>
      <div className="nav-middle">
        <div className="bike"></div>
        <NavLink to="/">BIKE NYC</NavLink>
      </div>
      <div className="nav-right">
        <NavLink to="/contact">Contact</NavLink>
      </div>
      <div className="hidden-menu">
        <button onClick={() => setShowLinks(!showLinks)}></button>
      </div>
    </div>
  );
}

export default Nav1;
