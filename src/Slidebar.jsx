import React from "react";
import { NavLink } from "react-router-dom";

import "./Slidebar.css";

function Slidebar() {

  return (
    <aside className="sidebar">

      <div className="menu">

        {/* Dashboard */}
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `menu-item ${isActive ? "active" : ""}`
          }
        >
          <i className="fa-solid fa-house"></i>
          <span>Dashboard</span>
        </NavLink>


        {/* My Courses */}
        <NavLink
          to="/mycourses"
          className={({ isActive }) =>
            `menu-item ${isActive ? "active" : ""}`
          }
        >
          <i className="fa-solid fa-book"></i>
          <span>My Courses</span>
        </NavLink>


        {/* Create Course */}
        <div className="menu-item">
          <i className="fa-solid fa-circle-plus"></i>
          <span>Create Course</span>
        </div>


        {/* Lessons */}
        <div className="menu-item">
          <i className="fa-solid fa-book-open"></i>
          <span>Lessons</span>
        </div>


        {/* Quizzes */}
        <div className="menu-item">
          <i className="fa-solid fa-circle-question"></i>
          <span>Quizzes</span>
        </div>


        {/* Students */}
        <div className="menu-item">
          <i className="fa-solid fa-users"></i>
          <span>Students</span>
        </div>


        {/* Student Progress */}
        <div className="menu-item">
          <i className="fa-solid fa-chart-column"></i>
          <span>Student Progress</span>
        </div>


        {/* Settings */}
        <div className="menu-item">
          <i className="fa-solid fa-gear"></i>
          <span>Settings</span>
        </div>

      </div>


      {/* Logout */}
      <div className="menu-item logout">

        <i className="fa-solid fa-right-from-bracket"></i>

        <span>
          Logout
        </span>

      </div>

    </aside>
  );
}

export default Slidebar;