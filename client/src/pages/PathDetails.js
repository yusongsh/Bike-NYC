import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { API_URL } from "../constants";
import { useParams } from "react-router-dom";
import Nav1 from "../components/Nav1";
import Footer1 from "../components/Footer1";
import "../style/pathdetails.css";

function PathDetails() {
  const [path, setPath] = useState("");
  let { id } = useParams();

  useEffect(() => {
    console.log("working");
    const getPath = async () => {
      const res = await axios.get(`${API_URL}/paths/${id}`);
      console.log(res.data);
      setPath(res.data);
    };
    getPath();
  }, [id]);
  // console.log(path);

  if (path) {
    return (
      <>
        <Nav1 />
        <div className="pathdetail-container">
          <div className="pathdetail-left">
            <h1>{path.name}</h1>
            <img src={path.photo_url} alt=""></img>
            <div>
              Reviews:
              {path.reviews.map((review, index) => {
                return (
                  <div key={index}>
                    <h4>{review.name}</h4>
                    <p>-{review.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="pathdetail-right">
            <p>Description{path.description}</p>
            <p>Start: {path.start_point}</p>
            <p>End: {path.end_point}</p>
            <p>Path Type: {path.route_type}</p>
            <p>Elevation: {path.elevation}</p>
          </div>
        </div>
        <Footer1 />
      </>
    );
  } else {
    return <h6>Loading realling hard, please wait</h6>;
  }
}

export default PathDetails;
