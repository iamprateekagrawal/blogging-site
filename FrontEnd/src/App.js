import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import AddBlog from "./Components/AddBlog";
import ShowBlog from "./Components/ShowBlog";
import Home from "./Components/Home";
import EditBlog from "./Components/EditBlog";
import DeleteBlog from "./Components/DeleteBlog";

function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <NavBar />
        <Route path="/home" component={Home} />
        <Route exact path="/add" component={AddBlog} />
        <Route path="/blog" component={ShowBlog} />
        <Route path="/update" component={EditBlog} />
        <Route path="/delete" component={DeleteBlog} />
      </Router>
    </>
  );
}

export default App;
