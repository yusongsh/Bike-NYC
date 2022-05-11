import React from "react";
import Nav1 from "../components/Nav1";
import "../style/shop.css";

function Shop() {
  return (
    <>
      <Nav1 />

      <div className="Shop-Container">
        <div className="shop-wide">
          <div className="shop-wide-main">
            <div className="shop-wide-media"></div>
            <div className="shop-wide-text">
              <h3></h3>
              <p></p>
            </div>
          </div>
        </div>

        <div className="shop-thin">
          <div className="shop-thin-main">
            <div className="shop-thin-media"></div>
            <div className="shop-thin-text">
              <h3></h3>
              <p></p>
            </div>
          </div>

          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Shop;
