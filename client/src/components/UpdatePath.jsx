import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import axios from "axios";
import { API_URL } from "../constants";

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
    setStartpoint(res.data.name);
    setEndpoint(res.data.name);
    setRoutetype(res.data.name);
    setElevation(res.data.name);
    setImage(res.data.name);
    setDescription(res.data.description);
  };

  useEffect(() => {
    loadPath();
  }, [id]);

  return <div>UpdatePath</div>;
}

export default UpdatePath;
