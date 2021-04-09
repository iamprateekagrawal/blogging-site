import React from "react";

function NavBar() {
  return (
    <nav>
        <a href='/home' className="no-text-decor"><h1 id="heading"><i className="fas fa-pen-alt"></i> Anonymous Blogs</h1></a>
        <a href="/add" className = "right-nav"><i className="far fa-plus-square fa-2x"></i></a>
    </nav>
  );
}

export default NavBar;