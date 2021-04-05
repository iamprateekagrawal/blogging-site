import React, { useState, useEffect } from "react";
import axios from "axios";

function ShowBlog() {
  const [blog, setBlog] = useState({});
  const _id = window.location.href.substring(
    window.location.href.lastIndexOf("/") + 1
  );
  useEffect(() => {
    axios.get(`http://localhost:4000/blog/${_id}`).then((response) => {
      setBlog(response.data);
      // console.log(response.data);
    });
  }, []);
  return (
    <>
      <h2 className="sub-heading">{blog.title}</h2>
      <div id="edit-del">
        <a href={`/update/${_id}`}>
          <i className="fas fa-pen-square">Edit</i>
        </a>
        <a href={`/delete/${_id}`}>
          <i className="fas fa-trash">Delete</i>
        </a>
      </div>
      <p className="show-content">{blog.body}</p>
    </>
  );
}

export default ShowBlog;
