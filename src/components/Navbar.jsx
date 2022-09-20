import React from "react";
// stylesheet
import "../css/Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar__container">
      <h1>JAITOUR</h1>
      <div className="navbar__links">
        <ul>
          <li>Service</li>
          <li>Places</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <button>Book Tour</button>
      </div>
    </div>
  );
};
