import React from "react";

function Box(props) {
  return (
      <a className="box-link" href={props.link}>
      <div className="blog-box">
        <div className="left-side">
          <img src={props.img} alt="Failed to Load" />
        </div>
        <div className="right-side">
          <h3 className="blog-title">{props.title}</h3>
          <h5 className="blog-desc">{props.desc}</h5>
        </div>
      </div>
      </a>
  );
}

export default Box;
