import React, { useState, useEffect } from "react";
import axios from "axios";

function EditBlog(props) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [body, setBody] = useState("");
  const [img, setImg] = useState("");
  const _id = window.location.href.substring(
    window.location.href.lastIndexOf("/") + 1
  );

  useEffect(() => {
    axios.get(`http://localhost:4000/blog/${_id}`).then((response) => {
    //   console.log(response.data);
      setTitle(response.data.title);
      setDesc(response.data.description);
      setBody(response.data.body);
      setImg(response.data.imgLink);
    });
  }, []);

  if(img==="https://picsum.photos/200/100"){
      setImg("")
  }

  function onSubmit(event) {
    event.preventDefault();
    const newBlog = {
        title: title,
        description: desc,
        body: body,
        imgLink: img
    };

    if(img===""){
        newBlog.imgLink="https://picsum.photos/200/100";
    }

    axios.patch(`http://localhost:4000/update/${_id}`, newBlog)
        .then(res => console.log(res.data));

    props.history.push(`/blog/${_id}`);
  }

  return (
    <>
      <h2 className="sub-heading">Edit this Blog</h2>
      <form onSubmit={onSubmit}>
        <div className="form">
          <label>
            Title: <br />
            <input
              required
              type="text"
              placeholder="Enter here..."
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </label>
          <label>
            Short Description: <br />
            <textarea
              required
              rows={2}
              cols={100}
              type="text"
              placeholder="Enter here..."
              value={desc}
              onChange={(event) => setDesc(event.target.value)}
            />
          </label>
          <label>
            The Content: <br />
            <textarea
              required
              rows={13}
              cols={100}
              placeholder="Enter here..."
              value={body}
              onChange={(event) => setBody(event.target.value)}
            />
          </label>
          <label>
            Image for the Blog: <br />
            <input
              type="text"
              placeholder="Image Link (Optional)"
              value={img}
              onChange={(event) => setImg(event.target.value)}
            />
          </label>
          <button>Publish</button>
        </div>
      </form>
    </>
  );
}

export default EditBlog;
