import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { API_URL } from "../constants";
import { useParams } from "react-router-dom";
import Nav1 from "../components/Nav1";
import Footer1 from "../components/Footer1";

function PathDetails(props) {
  const [path, setPath] = useState("");
  let { id } = useParams();

  //   console.log(id);

  useEffect(() => {
    //   let path = props.
  });
  useEffect(() => {
    const getPath = async () => {
      const res = await axios.get(`${API_URL}/paths/${id}`);
      console.log(res.data);
      setPath(res.data);
    };
    getPath();
  }, [id]);
  console.log(path);
  return (
    <>
      <Nav1 />
      <div>
        <h1>Path Details</h1>
        {/* <p>{path.name}</p> */}
      </div>
      <Footer1 />
    </>
  );
}

export default PathDetails;
