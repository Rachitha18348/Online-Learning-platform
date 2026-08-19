import React from "react";
import { Link } from "react-router-dom";

function InstructorDashboard() {
  return (
    <div style={styles.container}>

      <div style={styles.header}>

        <h1 style={styles.title}>
          Instructor Dashboard
        </h1>

        <p style={styles.subtitle}>
          Create and manage your courses for students.
        </p>

      </div>


      <div style={styles.cards}>

        {/* Create Course */}

        <div style={styles.card}>

          <h2 style={styles.cardTitle}>
            Create Course
          </h2>

          <p style={styles.cardText}>
            Create a new course and add the course
            information and learning content.
          </p>

          <Link
            to="/instructor/create-course"
            style={styles.button}
          >
            Create Course
          </Link>

        </div>


        {/* Manage Courses */}

        <div style={styles.card}>

          <h2 style={styles.cardTitle}>
            Manage Courses
          </h2>

          <p style={styles.cardText}>
            View and manage the courses you have created.
          </p>

          <Link
            to="/instructor/manage-courses"
            style={styles.button}
          >
            Manage Courses
          </Link>

        </div>


        {/* Profile */}

        <div style={styles.card}>

          <h2 style={styles.cardTitle}>
            My Profile
          </h2>

          <p style={styles.cardText}>
            Add and update your instructor information.
          </p>

          <Link
            to="/instructor/profile"
            style={styles.button}
          >
            View Profile
          </Link>

        </div>

      </div>

    </div>
  );
}


const styles = {

  container: {
    minHeight: "70vh",
    backgroundColor: "#F9FAFB",
    padding: "40px 50px",
    fontFamily: "Arial, sans-serif",
    color: "#111827",
  },

  header: {
    maxWidth: "1000px",
    margin: "0 auto 30px",
  },

  title: {
    color: "#5B21B6",
    fontSize: "30px",
    marginBottom: "8px",
  },

  subtitle: {
    color: "#6B7280",
    fontSize: "15px",
  },

  cards: {
    maxWidth: "1000px",
    margin: "auto",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
  },

  card: {
    backgroundColor: "#FFFFFF",
    border: "1px solid #E5E7EB",
    borderRadius: "8px",
    padding: "25px",
    minHeight: "220px",
  },

  cardTitle: {
    color: "#5B21B6",
    fontSize: "20px",
    marginBottom: "10px",
  },

  cardText: {
    color: "#6B7280",
    fontSize: "14px",
    lineHeight: "1.5",
    minHeight: "65px",
  },

  button: {
    display: "inline-block",
    marginTop: "15px",
    backgroundColor: "#7C3AED",
    color: "#FFFFFF",
    textDecoration: "none",
    padding: "10px 16px",
    borderRadius: "6px",
    fontSize: "14px",
  },

};

export default InstructorDashboard;