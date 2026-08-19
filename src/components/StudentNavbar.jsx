import React from "react";
import { Link } from "react-router-dom";

function StudentNavbar() {
  return (
    <nav style={styles.navbar}>

      {/* Logo */}
      <div style={styles.logo}>
        LearnHub
      </div>

      {/* Navigation Links */}
      <div style={styles.links}>
        <Link to="/student/dashboard" style={styles.link}>
          Dashboard
        </Link>

        <Link to="/student/courses" style={styles.link}>
          Courses
        </Link>

        <Link to="/student/my-courses" style={styles.link}>
          My Courses
        </Link>

        <Link to="/student/profile" style={styles.link}>
          Profile
        </Link>
      </div>

    </nav>
  );
}

const styles = {
  navbar: {
    backgroundColor: "#FFFFFF",
    height: "65px",
    padding: "0 50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "1px solid #E5E7EB",
  },

  logo: {
    color: "#7C3AED",
    fontSize: "22px",
    fontWeight: "bold",
  },

  links: {
    display: "flex",
    gap: "25px",
  },

  link: {
    textDecoration: "none",
    color: "#111827",
    fontSize: "15px",
  },
};

export default StudentNavbar;