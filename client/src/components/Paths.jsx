import React from "react";

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
  console.log(reviews);

  return (
    <>
      <div className="path-content">
        <div className="path-photo">
          <img src={photo} alt="" />
        </div>
        <div className="path-infomation">
          <h4>{name}</h4>
          <p>{elevation}</p>
          <p>{start_point}</p>
          <p>{end_point}</p>
          <p>{length}</p>
          <p>{route_type}</p>
          <div>
            Reviews:
            {reviews.map((review, index) => (
              <div key={index}>
                <h1>{review.name}</h1>
                <h1>{review.description}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Paths;
