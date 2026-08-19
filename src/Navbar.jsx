import React from "react";
import "./Navbar.css";
import logo from "./Logo.jpeg";

function Navbar({ search, setSearch }) {

  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="logo">

        <img
          src={logo}
          alt="LearnHub"
        />

      </div>


      {/* Search */}
      <div className="search-box">

        <span>🔍</span>

        <input
          type="text"
          placeholder="Search courses, students..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>


      {/* Profile */}
      <div className="profile">

        <div className="profile-circle">
          I
        </div>

        <div className="profile-text">

          <h4>
            Instructor
          </h4>

          <p>
            Instructor
          </p>

        </div>

        <span>
          ⌄
        </span>

      </div>

    </nav>
  );
}

export default Navbar;