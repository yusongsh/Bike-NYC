import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "../constants";
import { useParams } from "react-router-dom";
import "../style/addReviews.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

function AddPath() {
  let { id } = useParams();
  const [update, setUpdate] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [path_id, setPathid] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let form = new FormData();
    setPathid(id);
    form.append("path_id", path_id);
    form.append("description", description);
    form.append("name", name);

    await axios.post(`${API_URL}/reviews/`, form).then((result) => {
      console.log(result.text);
      console.log("review added");
      alert("Review Added");
      window.location.reload();
    });

    e.target.reset();
  };
  return (
    <>
      <div className="addreview">
        {update ? (
          <form className="addreview-container" onSubmit={handleSubmit}>
            <div className="addreview-field">
              <label>Your Name</label>
              <input
                onChange={(e) => setName(e.target.value)}
                name="name"
                value={name}
                required
              ></input>
            </div>
            <div className="addreview-field">
              <label>Your Review</label>
              <input
                // className="review-textarea"
                onChange={(e) => setDescription(e.target.value)}
                name="description"
                value={description}
                rows="3"
                required
              ></input>
            </div>
            <div className="addreview-field">
              <label>
                Path ID:
                <span style={{ fontSize: "0.75rem" }}>
                  (enter the ID shown)
                </span>
              </label>
              <input
                onChange={(e) => setPathid(e.target.value)}
                name="path_id"
                type="number"
                placeholder={`${id}`}
                value={path_id}
                required
              ></input>
            </div>
            <button onClick={handleSubmit} className="reviewAddBtn">
              Post My Review
            </button>
            <FontAwesomeIcon
              onClick={() => setUpdate(false)}
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
