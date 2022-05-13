import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "../constants";
import { useParams } from "react-router-dom";
import "../style/addReviews.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

function DeleteReview({ id }) {
  console.log(id);

  const handleDelete = async (e) => {
    e.preventDefault();

    await axios.delete(`${API_URL}/reviews/${id}`).then((result) => {
      console.log(result.text);
      console.log("review deleted");
      alert("Review deleted");
      window.location.reload();
    });
  };
  return (
    <div className="addreview">
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default DeleteReview;
