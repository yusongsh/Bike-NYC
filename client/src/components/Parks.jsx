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
          <h4>{name}</h4>
          <p>Size: {size}</p>
        </div>
      </div>
    </>
  );
}

export default Parks;
