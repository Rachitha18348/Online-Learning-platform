import React from "react";
import { Link } from "react-router-dom";
import { useCourses } from "../Context/CourseContext";

function ManageCourses() {

  const { courses } = useCourses();

  return (
    <div style={styles.container}>

      <div style={styles.header}>

        <div>
          <h1>Manage Courses</h1>

          <p style={styles.subtitle}>
            View and manage the courses created by you.
          </p>
        </div>

        <Link
          to="/instructor/create-course"
          style={styles.createButton}
        >
          + Create Course
        </Link>

      </div>

      {courses.length === 0 ? (

        <div style={styles.emptyCard}>
          <h3>No courses available</h3>

          <p>
            Create your first course to start teaching students.
          </p>
        </div>

      ) : (

        <div style={styles.courseList}>

          {courses.map((course) => (

            <div
              key={course.id}
              style={styles.courseCard}
            >

              <div style={styles.courseInfo}>

                <h2 style={styles.title}>
                  {course.title}
                </h2>

                <p style={styles.description}>
                  {course.description}
                </p>

                <div style={styles.details}>

                  <span>
                    <strong>Instructor:</strong>{" "}
                    {course.instructor}
                  </span>

                  <span>
                    <strong>Duration:</strong>{" "}
                    {course.duration}
                  </span>

                  <span>
                    <strong>Level:</strong>{" "}
                    {course.level}
                  </span>

                  <span>
                    <strong>Students:</strong>{" "}
                    {course.students}
                  </span>

                </div>

              </div>

              <div style={styles.actions}>

                <span
                  style={{
                    ...styles.status,
                    backgroundColor:
                      course.status === "Published"
                        ? "#DCFCE7"
                        : "#FEF3C7",
                    color:
                      course.status === "Published"
                        ? "#15803D"
                        : "#B45309",
                  }}
                >
                  {course.status}
                </span>

                <button style={styles.manageButton}>
                  Manage
                </button>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

const styles = {

  container: {
    minHeight: "100vh",
    backgroundColor: "#F9FAFB",
    padding: "35px 50px",
    fontFamily: "Arial, sans-serif",
    color: "#111827",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  subtitle: {
    color: "#6B7280",
    fontSize: "14px",
  },

  createButton: {
    backgroundColor: "#7C3AED",
    color: "#FFFFFF",
    textDecoration: "none",
    padding: "10px 18px",
    borderRadius: "6px",
    fontSize: "14px",
  },

  courseList: {
    marginTop: "25px",
  },

  courseCard: {
    backgroundColor: "#FFFFFF",
    border: "1px solid #E5E7EB",
    borderRadius: "8px",
    padding: "22px",
    marginBottom: "15px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  courseInfo: {
    maxWidth: "75%",
  },

  title: {
    color: "#5B21B6",
    margin: "0 0 8px",
    fontSize: "20px",
  },

  description: {
    color: "#6B7280",
    fontSize: "14px",
    lineHeight: "1.5",
  },

  details: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    marginTop: "15px",
    fontSize: "13px",
    color: "#6B7280",
  },

  actions: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: "12px",
  },

  status: {
    padding: "5px 10px",
    borderRadius: "5px",
    fontSize: "12px",
  },

  manageButton: {
    backgroundColor: "#FFFFFF",
    color: "#5B21B6",
    border: "1px solid #7C3AED",
    padding: "8px 15px",
    borderRadius: "5px",
    cursor: "pointer",
  },

  emptyCard: {
    backgroundColor: "#FFFFFF",
    border: "1px solid #E5E7EB",
    borderRadius: "8px",
    padding: "40px",
    textAlign: "center",
    marginTop: "25px",
    color: "#6B7280",
  },
};

export default ManageCourses;