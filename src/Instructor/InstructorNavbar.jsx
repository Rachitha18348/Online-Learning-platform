import React from "react";
import { Link } from "react-router-dom";

function InstructorNavbar() {
  return (
    <nav style={styles.navbar}>

      <div style={styles.logo}>
        LearnHub
      </div>

      <div style={styles.links}>

        <Link to="/instructor/dashboard" style={styles.link}>
          Dashboard
        </Link>

        <Link to="/instructor/create-course" style={styles.link}>
          Create Course
        </Link>

        <Link to="/instructor/manage-courses" style={styles.link}>
          Manage Courses
        </Link>

        <Link to="/instructor/students" style={styles.link}>
          Students
        </Link>

      </div>

    </nav>
  );
}

const styles = {
  navbar: {
    height: "65px",
    backgroundColor: "#FFFFFF",
    borderBottom: "1px solid #E5E7EB",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 45px",
    fontFamily: "Arial, sans-serif",
  },

  logo: {
    color: "#5B21B6",
    fontSize: "22px",
    fontWeight: "bold",
  },

  links: {
    display: "flex",
    gap: "25px",
  },

  link: {
    textDecoration: "none",
    color: "#6B7280",
    fontSize: "14px",
  },
};

export default InstructorNavbar;