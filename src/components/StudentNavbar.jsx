import React from "react";
import { Link, useNavigate } from "react-router-dom";

function StudentNavbar() {

  const navigate = useNavigate();

  const loggedInUser = JSON.parse(
    localStorage.getItem("loggedInUser")
  );


  function handleLogout() {

    localStorage.removeItem("loggedInUser");

    navigate("/");

  }


  return (

    <nav style={styles.navbar}>

      {/* Logo */}

      <Link
        to="/student/dashboard"
        style={styles.logo}
      >
        LearnHub
      </Link>


      {/* Navigation */}

      <div style={styles.links}>

        <Link
          to="/student/dashboard"
          style={styles.link}
        >
          Dashboard
        </Link>

        <Link
          to="/student/courses"
          style={styles.link}
        >
          Courses
        </Link>

        <Link
          to="/student/my-courses"
          style={styles.link}
        >
          My Courses
        </Link>

        <Link
          to="/student/profile"
          style={styles.link}
        >
          Profile
        </Link>

      </div>


      {/* User */}

      <div style={styles.userSection}>

        <span style={styles.userName}>
          {loggedInUser?.name || "Student"}
        </span>


        <button
          onClick={handleLogout}
          style={styles.logoutButton}
        >
          Logout
        </button>

      </div>

    </nav>

  );
}


const styles = {

  navbar: {
    height: "70px",
    padding: "0 40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    borderBottom: "1px solid #E5E7EB",
    fontFamily: "Arial, sans-serif",
  },


  logo: {
    color: "#5B21B6",
    textDecoration: "none",
    fontSize: "20px",
    fontWeight: "700",
    whiteSpace: "nowrap",
  },


  links: {
    display: "flex",
    alignItems: "center",
    gap: "25px",
  },


  link: {
    color: "#374151",
    textDecoration: "none",
    fontSize: "14px",
  },


  userSection: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },


  userName: {
    color: "#111827",
    fontWeight: "600",
    fontSize: "14px",
  },


  logoutButton: {
    backgroundColor: "#7C3AED",
    color: "#FFFFFF",
    border: "none",
    padding: "9px 16px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "14px",
  },

};


export default StudentNavbar;