import React from "react";
import { Link } from "react-router-dom";
// import {Link} from "react-router-dom"

function Navbar() {
  const styles = {
    color: "black",
    textDecoration: "none"
  };
  return (
    <nav>
      <Link style={styles} to="/">
        <h3>Logo</h3>
      </Link>
      <ul className="nav-links">
        <Link style={styles} to="/about">
          <li>About</li>
        </Link>
        <Link style={styles} to="/show">
          <li>Show</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
