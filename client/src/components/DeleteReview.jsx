import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "../constants";
import { useParams } from "react-router-dom";
import "../style/addReviews.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import swal from "sweetalert";

function DeleteReview({ id, getPath }) {
  // console.log(id);

  const handleDelete = async (e) => {
    e.preventDefault();
    await axios.delete(`${API_URL}/reviews/${id}`);
    swal("review deleted");
    getPath();
  };

  return (
    <div>
      <FontAwesomeIcon
        style={{ color: "red" }}
        onClick={handleDelete}
        icon={faTrashCan}
        size="lg"
      />
    </div>
  );
}

export default DeleteReview;
