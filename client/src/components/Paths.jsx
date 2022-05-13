import React from "react";
import { Link } from "react-router-dom";
import "../style/explore.css";

function Paths({
  elevation,
  end_point,
  id,
  name,
  length,
  start_point,
  route_type,
  reviews,
  photo,
  path_url,
}) {
  return (
    <>
      <div className="path-content">
        <div className="path-photo">
          <Link to="/paths/:id/">
            <img src={photo} alt="" />
          </Link>
        </div>
        <div className="path-infomation">
          <h4>{name}</h4>
          <p>Path Length: {length}</p>
          {/* <p>{elevation}</p>
          <p>{start_point}</p>
          <p>{end_point}</p>
          <p>{route_type}</p> 
          <div>
            Reviews:
            {reviews.map((review, index) => {
              return (
                <div key={index}>
                  <p>{review.name}</p>
                  <p>{review.description}</p>
                </div>
              );
            })}
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Paths;
