import React from "react";
import {Link} from "react-router-dom"

function NavBar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <span className="navbar-brand mb-0 h6">DC Comic Super Heros</span>
      <ul className="navbar-nav">
        <li className="navbar-nav mb-0 h6 buttonColors">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="navbar-nav mb-0 h6">
          <Link className="nav-link" to="/aboutus">
            About Us
          </Link>
        </li>
        <li className="navbar-nav mb-0 h6">
          <Link className="nav-link" to="/namelist">
            Name List
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
