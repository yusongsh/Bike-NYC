import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { API_URL } from "../constants";
import { useParams } from "react-router-dom";
import Nav1 from "../components/Nav1";
import Footer1 from "../components/Footer1";
import "../style/pathdetails.css";
import photo from "../assest/Grogu.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import AddReview from "../components/AddReview";
import DeleteReview from "../components/DeleteReview";

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
            <Link to="/explore">
              <div className="backarrow">
                <FontAwesomeIcon icon={faArrowLeftLong} size="lg" />
                &nbsp;&nbsp;<span>Go Back</span>
              </div>
            </Link>
            <h1>{path.name}</h1>
            <img className="pathdetails-main" src={path.photo_url} alt=""></img>
            <div className="pathdetail-review">
              <h3>Reviews:</h3>
              <AddReview />
              {path.reviews.map((review, index) => {
                return (
                  <div className="detail-review" key={index}>
                    <div className="detail-user-info">
                      <img src={photo} alt=""></img>
                      <h4>{review.name}</h4>
                    </div>
                    <p>-{review.description}</p>
                    <DeleteReview id={review.id} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="pathdetail-right">
            <h5>{path.description}</h5>
            <p>
              Start: &nbsp;&nbsp;<strong>{path.start_point}</strong>
            </p>
            <p>
              End: &nbsp;&nbsp;<strong>{path.end_point}</strong>
            </p>
            <p>
              Path Type: &nbsp;&nbsp;<strong>{path.route_type}</strong>
            </p>
            <p>
              Length: &nbsp;&nbsp;<strong>{path.length}</strong>
            </p>
            <p>
              Elevation: &nbsp;&nbsp;<strong>{path.elevation}</strong>
            </p>
            <Link to={`/paths/${id}/update`}>
              <button>Update this Path</button>
            </Link>
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
