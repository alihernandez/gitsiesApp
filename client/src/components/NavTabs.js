import React from "react";
import { Link, useLocation } from "react-router-dom";
// import '../App.css';
import "./NavTabs.css";
function NavTabs() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (
    <ul id="tabs" className="nav nav-tabs" >
      <li className="nav-item">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/menu"
          className={location.pathname === "/menu" ? "nav-link active" : "nav-link"}
        >
          Menu
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/calendar"
          className={location.pathname === "/calendar" ? "nav-link active" : "nav-link"}
        >
          Calendar
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </Link>
      </li>
      {/* <li className="nav-item">
        <Link
          to="/contact/learn"
          className={location.pathname === "/contact/learn" ? "nav-link active" : "nav-link"}
        >
          Learn
        </Link>
      </li> */}
    </ul>
  );
}

export default NavTabs;
