import React, {useState, useEffect} from 'react';
import axios from "axios";
import Box from "./Box";

function Home () {
const [blog, setBlog] = useState([]);

  let newBlog = {
    title: "",
    description: "",
    body: "",
    imgLink: "",
  };
  
  useEffect(() => {
    axios
      .get("http://localhost:4000/")
      .then((response) => {
        response.data.map((packet) => {
          // console.log("This is a packet", packet);
          newBlog = packet;
          setBlog((blog) => [...blog, newBlog]);
          // console.log("This is a newBlog", newBlog);
        });
        // console.log("This is final output", blog);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

return(
  blog.map((obj, idx) => {
    return (
      <Box
        link={`/blog/${obj._id}`}
        img={obj.imgLink}
        title={obj.title}
        desc={obj.description}
      />
    );
  })
);
}

export default Home;