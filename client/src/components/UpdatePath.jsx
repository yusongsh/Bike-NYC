import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import axios from "axios";
import { API_URL } from "../constants";
import { Link } from "react-router-dom";
import swal from "sweetalert";

function UpdatePath() {
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
  return (
    <div>
      <form>
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
        <button onClick={(e) => UpdatePath(e)} className="postButton">
          Update this Path
        </button>
      </form>
    </div>
  );
}

export default UpdatePath;
