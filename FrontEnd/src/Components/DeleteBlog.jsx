import React from "react";
import axios from "axios";

function DeleteBlog(props) {
  const _id = window.location.href.substring(
    window.location.href.lastIndexOf("/") + 1
  );

  function Confirm() {
    axios.delete(`http://localhost:4000/delete/${_id}`);
    alert("The blog is deleted successfully");
    props.history.push("/home");
  }
  function Deny() {
    props.history.push(`/blog/${_id}`);
  }
  return (
    <>
      <h2 className="sub-heading">Are you sure to delete this blog?</h2>
      <div className="yes-no">
        <button onClick={Confirm}>Yes</button>
        <button onClick={Deny}>No</button>
      </div>
    </>
  );
}

export default DeleteBlog;
