import React, { useState } from "react";
import Nav1 from "../components/Nav1";
import Footer1 from "../components/Footer1";
import { useNavigate } from "react-router";
import axios from "axios";
import { API_URL } from "../constants";
import { useParams } from "react-router-dom";
import swal from "sweetalert";

function AddPath() {
  let navigate = useNavigate();
  const { id } = useParams();
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

    // form.append("path_id", path_id);
    // form.append("description", description);
    form.append("name", name);
    form.append("length", length);
    form.append("start_point", start_point);
    form.append("end_point", end_point);
    form.append("elevation", elevation);
    form.append("route_type", route_type);
    form.append("photo_url", photo_url);
    form.append("description", description);

    await axios.post(`${API_URL}/paths/`, form);
    swal("Good job!", "You just update the path!", "success");
    navigate(`/explore`);
    window.location.reload();
  };
  return (
    <>
      <Nav1 />

      <div>
        <form onSubmit={handleSubmit}>
          <label>Name of the path</label>
          <input
            onChange={(e) => setName(e.target.value)}
            name="name"
            value={name}
            required
          ></input>
          <label>Path Length</label>
          <input
            onChange={(e) => setLength(e.target.value)}
            name="length"
            value={length}
            required
          ></input>
          <label>Start Point</label>
          <input
            onChange={(e) => setStartpoint(e.target.value)}
            name="start_point"
            value={start_point}
            required
          ></input>
          <label>End Point</label>
          <input
            onChange={(e) => setEndpoint(e.target.value)}
            name="end_point"
            value={end_point}
            required
          ></input>
          <label>Route Type</label>
          <input
            onChange={(e) => setRoutetype(e.target.value)}
            name="route_type"
            value={route_type}
            required
          ></input>
          <label>Elevation</label>
          <input
            onChange={(e) => setElevation(e.target.value)}
            name="elevation"
            value={elevation}
            required
          ></input>
          <label>Photo_url</label>
          <input
            onChange={(e) => setImage(e.target.value)}
            name="photo_url"
            value={photo_url}
            required
          ></input>
          <label>Description</label>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            name="description"
            value={description}
            required
          ></textarea>
          <button onClick={(e) => handleSubmit(e)} className="postButton">
            Add a Path
          </button>
        </form>
      </div>
      <Footer1 />
    </>
  );
}

export default AddPath;
