import React from "react";
import { Link } from "react-router-dom";
import { useCourses } from "../Context/CourseContext";

function StudentMyCourses() {

  const { enrolledCourses } = useCourses();

  return (
    <div style={styles.container}>

      <div style={styles.header}>
        <h1 style={styles.title}>My Courses</h1>

        <p style={styles.subtitle}>
          Here you can find all the courses you have enrolled in.
        </p>
      </div>


      {enrolledCourses.length === 0 ? (

        <div style={styles.emptyCard}>

          <h2>No Courses Enrolled</h2>

          <p>
            You have not enrolled in any courses yet.
          </p>

          <Link
            to="/student/courses"
            style={styles.button}
          >
            Browse Courses
          </Link>

        </div>

      ) : (

        <div style={styles.courseGrid}>

          {enrolledCourses.map((course) => (

            <div
              key={course.id}
              style={styles.courseCard}
            >

              <h2 style={styles.courseTitle}>
                {course.title}
              </h2>

              <p style={styles.description}>
                {course.description}
              </p>

              <div style={styles.info}>

                <p>
                  <strong>Instructor:</strong>{" "}
                  {course.instructor}
                </p>

                <p>
                  <strong>Duration:</strong>{" "}
                  {course.duration}
                </p>

                <p>
                  <strong>Lessons:</strong>{" "}
                  {course.lessons}
                </p>

              </div>


              <Link
                to={`/student/lessons/${course.id}`}
                style={styles.learningButton}
              >
                Start Learning
              </Link>

            </div>

          ))}

        </div>

      )}

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
    maxWidth: "1100px",
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

  courseGrid: {
    maxWidth: "1100px",
    margin: "auto",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
  },

  courseCard: {
    backgroundColor: "#FFFFFF",
    border: "1px solid #E5E7EB",
    borderRadius: "8px",
    padding: "22px",
    minHeight: "300px",
    display: "flex",
    flexDirection: "column",
  },

  courseTitle: {
    color: "#5B21B6",
    fontSize: "20px",
    marginBottom: "10px",
  },

  description: {
    color: "#6B7280",
    fontSize: "14px",
    lineHeight: "1.5",
  },

  info: {
    color: "#6B7280",
    fontSize: "13px",
    lineHeight: "1.4",
    marginTop: "10px",
  },

  learningButton: {
    marginTop: "auto",
    display: "block",
    textAlign: "center",
    backgroundColor: "#7C3AED",
    color: "#FFFFFF",
    textDecoration: "none",
    padding: "11px",
    borderRadius: "6px",
    fontSize: "14px",
  },

  emptyCard: {
    maxWidth: "600px",
    margin: "50px auto",
    padding: "40px",
    backgroundColor: "#FFFFFF",
    border: "1px solid #E5E7EB",
    borderRadius: "8px",
    textAlign: "center",
  },

  button: {
    display: "inline-block",
    marginTop: "15px",
    backgroundColor: "#7C3AED",
    color: "#FFFFFF",
    textDecoration: "none",
    padding: "10px 18px",
    borderRadius: "6px",
  },

};

export default StudentMyCourses;