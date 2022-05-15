import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import axios from "axios";
import { API_URL } from "../constants";
import "../style/updatepath.css";
import swal from "sweetalert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

function UpdatePath() {
  let navigate = useNavigate();
  const { id } = useParams();
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState("");
  const [length, setLength] = useState("");
  const [start_point, setStartpoint] = useState("");
  const [end_point, setEndpoint] = useState("");
  const [route_type, setRoutetype] = useState("");
  const [elevation, setElevation] = useState("");
  const [photo_url, setImage] = useState("");
  const [description, setDescription] = useState("");

  const loadPath = async (e) => {
    const res = await axios.get(`${API_URL}/paths/${id}`);
    console.log(res.data);
    setName(res.data.name);
    setLength(res.data.length);
    setStartpoint(res.data.start_point);
    setEndpoint(res.data.end_point);
    setRoutetype(res.data.route_type);
    setElevation(res.data.elevation);
    setImage(res.data.photo_url);
    setDescription(res.data.description);
  };

  useEffect(() => {
    loadPath();
  }, [id]);

  const UpdatePath = async (e) => {
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

    await axios.put(`${API_URL}/paths/${id}`, form);
    swal("Good job!", "You just update the path!", "success");
    navigate(`/paths/${id}`);
  };

  function ClearForm() {
    setEdit(false);
  }
  return (
    <div>
      {edit ? (
        <div className="updatepath-container">
          <div className="updateform-area">
            <form className="updateform-form">
              <div className="updateform-row1">
                <div className="updatepath-formfield">
                  <label>Name of the path</label>
                  <input
                    onChange={(e) => setName(e.target.value)}
                    name="name"
                    value={name}
                    required
                  ></input>
                </div>

                <div className="updatepath-formfield">
                  <label>Path Length</label>
                  <input
                    onChange={(e) => setLength(e.target.value)}
                    name="length"
                    value={length}
                    required
                  ></input>
                </div>
              </div>

              <div className="updateform-row2">
                <div className="updatepath-formfield">
                  <label>Start Point</label>
                  <input
                    onChange={(e) => setStartpoint(e.target.value)}
                    name="start_point"
                    value={start_point}
                    required
                  ></input>
                </div>

                <div className="updatepath-formfield">
                  <label>End Point</label>
                  <input
                    onChange={(e) => setEndpoint(e.target.value)}
                    name="end_point"
                    value={end_point}
                    required
                  ></input>
                </div>
              </div>

              <div className="updateform-row3">
                <div className="updatepath-formfield">
                  <label>Route Type</label>
                  <input
                    onChange={(e) => setRoutetype(e.target.value)}
                    name="route_type"
                    value={route_type}
                    required
                  ></input>
                </div>

                <div className="updatepath-formfield">
                  <label>Elevation</label>
                  <input
                    onChange={(e) => setElevation(e.target.value)}
                    name="elevation"
                    value={elevation}
                    required
                  ></input>
                </div>
              </div>

              <div className="updatepath-formfield update-url">
                <label>Photo_url</label>
                <input
                  onChange={(e) => setImage(e.target.value)}
                  name="photo_url"
                  value={photo_url}
                  required
                ></input>
              </div>

              <div className="updatepath-formfield update-textarea">
                <label>Description</label>
                <textarea
                  onChange={(e) => setDescription(e.target.value)}
                  name="description"
                  value={description}
                  required
                ></textarea>
              </div>

              <div className="updatepath-btn">
                <button
                  onClick={(e) => UpdatePath(e)}
                  // className="updatepath-btn"
                >
                  Update this Path
                </button>
              </div>

              <div className="updatepath-close">
                <FontAwesomeIcon
                  onClick={() => ClearForm()}
                  icon={faCircleXmark}
                  size="2xl"
                  style={{ color: "#f9bc60" }}
                />
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div onClick={() => setEdit(true)} style={{ cursor: "pointer" }}>
          <FontAwesomeIcon
            style={{ color: "#f9bc60" }}
            icon={faPenToSquare}
            size="lg"
          />
          &nbsp;&nbsp;
          <span style={{ color: "#f9bc60", fontWeight: "600" }}>
            Edit this Path
          </span>
        </div>
      )}
    </div>
  );
}

export default UpdatePath;
