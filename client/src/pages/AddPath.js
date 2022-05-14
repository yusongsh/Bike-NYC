import React, { useState } from "react";
import Nav1 from "../components/Nav1";
import Footer1 from "../components/Footer1";
import { useNavigate } from "react-router";
import axios from "axios";
import { API_URL } from "../constants";
import swal from "sweetalert";
import "../style/addpath.css";

function AddPath({ loadpaths }) {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [length, setLength] = useState("");
  const [start_point, setStartpoint] = useState("");
  const [end_point, setEndpoint] = useState("");
  const [route_type, setRoutetype] = useState("");
  const [elevation, setElevation] = useState("");
  const [photo_url, setImage] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let form = new FormData();

    form.append("name", name);
    form.append("length", length);
    form.append("start_point", start_point);
    form.append("end_point", end_point);
    form.append("elevation", elevation);
    form.append("route_type", route_type);
    form.append("photo_url", photo_url);
    form.append("description", description);

    await axios.post(`${API_URL}/paths/`, form);
    loadpaths();
    navigate(`/explore`);
  };

  return (
    <>
      <Nav1 />
      <div className="addpath-container">
        <div className="addpath-top">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5830e824c534a5539424a2ce/1616086254046-5UUCL5BCH27W7K80SUN7/IMG_2073.JPG?format=2500w"
            alt=""
          />
          <div className="centered">
            Give back to the community. Share your favorite bike path in NYC so
            others know what to expect
          </div>
        </div>

        <div className="addpath-bottom">
          <form onSubmit={handleSubmit} className="addpath-form">
            <div className="addpath-formfield">
              <label>
                Name of the path<span>*</span>
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                name="name"
                value={name}
                required
              ></input>
            </div>
            <div className="addpath-formfield">
              <label>
                Path Length<span>*</span>
              </label>
              <input
                onChange={(e) => setLength(e.target.value)}
                name="length"
                value={length}
                required
              ></input>
            </div>
            <div className="addpath-formfield">
              <label>
                Start Point<span>*</span>
              </label>
              <input
                onChange={(e) => setStartpoint(e.target.value)}
                name="start_point"
                value={start_point}
                required
              ></input>
            </div>
            <div className="addpath-formfield">
              <label>
                End Point<span>*</span>
              </label>
              <input
                onChange={(e) => setEndpoint(e.target.value)}
                name="end_point"
                value={end_point}
                required
              ></input>
            </div>
            <div className="addpath-formfield">
              <label>
                Route Type<span>*</span>
              </label>
              <input
                onChange={(e) => setRoutetype(e.target.value)}
                name="route_type"
                value={route_type}
                required
              ></input>
            </div>
            <div className="addpath-formfield">
              <label>
                Elevation<span>*</span>
              </label>
              <input
                onChange={(e) => setElevation(e.target.value)}
                name="elevation"
                value={elevation}
                required
              ></input>
            </div>
            <div className="addpath-formfield">
              <label>
                Photo_url<span>*</span>
              </label>
              <input
                onChange={(e) => setImage(e.target.value)}
                name="photo_url"
                value={photo_url}
                required
              ></input>
            </div>
            <div className="addpath-formfield">
              <label>
                Description<span>*</span>
              </label>
              <textarea
                onChange={(e) => setDescription(e.target.value)}
                name="description"
                value={description}
                required
              ></textarea>
            </div>
            <div className="addpath-formfield">
              <button onClick={(e) => handleSubmit(e)} className="postButton">
                Add a Path
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer1 />
    </>
  );
}

export default AddPath;
