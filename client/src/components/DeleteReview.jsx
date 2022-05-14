import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "../constants";
import { useParams } from "react-router-dom";
import "../style/addReviews.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import swal from "sweetalert";

function DeleteReview({ id }) {
  console.log(id);

  const handleDelete = async (e) => {
    e.preventDefault();

    await axios.delete(`${API_URL}/reviews/${id}`);
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
    // window.location.reload();
  };
  return (
    <div className="addreview">
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default DeleteReview;
