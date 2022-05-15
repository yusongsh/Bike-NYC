import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "../constants";
import { useParams } from "react-router-dom";
import "../style/addReviews.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import swal from "sweetalert";
import { useNavigate } from "react-router";

function AddPath({ getPath }) {
  let navigate = useNavigate();

  let { id } = useParams();
  const [review, setReview] = useState([]);
  const [update, setUpdate] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [path_id, setPathid] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let form = new FormData();
    form.append("path_id", id);
    form.append("description", description);
    form.append("name", name);

    await axios.post(`${API_URL}/reviews/`, form);
    swal("Great!", "You just left a review!", "success");
    getPath();
    ClearForm();
  };

  function ClearForm() {
    setName();
    setDescription();
    setPathid();
    setUpdate(false);
  }

  return (
    <>
      <div className="addreview">
        {update ? (
          <form className="addreview-container" onSubmit={handleSubmit}>
            <div className="addreview-field">
              <label>Your Name</label>
              <input
                style={{ textTransform: "none" }}
                onChange={(e) => setName(e.target.value)}
                name="name"
                value={name}
                required
              ></input>
            </div>
            <div className="addreview-field">
              <label>Your Review</label>
              <input
                style={{ textTransform: "none" }}
                onChange={(e) => setDescription(e.target.value)}
                name="description"
                value={description}
                rows="3"
                required
              ></input>
            </div>
            <button
              onClick={() => navigate(`/paths/${id}`, { replace: true })}
              className="reviewAddBtn"
            >
              Post My Review
            </button>
            <FontAwesomeIcon
              onClick={() => ClearForm()}
              icon={faCircleXmark}
              size="lg"
            />
          </form>
        ) : (
          <button onClick={() => setUpdate(true)} className="reviewAddBtn">
            Add Review
          </button>
        )}
      </div>
    </>
  );
}

export default AddPath;
