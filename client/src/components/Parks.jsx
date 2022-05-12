import React from "react";
import "../style/explore.css";

function Parks({ id, name, size, image }) {
  return (
    <>
      <div className="park-content">
        <div className="park-img">
          <img src={image} alt="" />
        </div>
        <div className="park-info">
          <h3>{name}</h3>
          <h5>Size: {size}</h5>
        </div>
      </div>
    </>
  );
}

export default Parks;
