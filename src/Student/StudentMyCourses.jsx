import React from "react";
import { Link } from "react-router-dom";
import { useCourses } from "../Context/CourseContext";

function StudentMyCourses() {

  const {
    courses,
    enrolledCourses,
  } = useCourses();


  // Get the latest course information
  // for every enrolled course

  const myCourses = enrolledCourses
    .map((enrolledCourse) => {

      return courses.find(
        (course) =>
          course.id === enrolledCourse.id
      );

    })
    .filter(Boolean);


  return (
    <div style={styles.container}>

      <h1 style={styles.title}>
        My Courses
      </h1>

      <p style={styles.subtitle}>
        Courses you have enrolled in are displayed here.
      </p>


      {myCourses.length === 0 ? (

        <div style={styles.emptyCard}>

          <h2 style={styles.emptyTitle}>
            No Courses Yet
          </h2>

          <p style={styles.emptyText}>
            Explore the available courses and enroll
            in a course to start learning.
          </p>

          <Link
            to="/student/courses"
            style={styles.exploreButton}
          >
            Explore Courses
          </Link>

        </div>

      ) : (

        <div style={styles.grid}>

          {myCourses.map((course) => (

            <div
              key={course.id}
              style={styles.card}
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
                  <strong>Level:</strong>{" "}
                  {course.level}
                </p>

                <p>
                  <strong>Lessons:</strong>{" "}
                  {course.lessons?.length || 0}
                </p>

              </div>


              <Link
                to={`/student/lessons/${course.id}`}
                style={styles.startButton}
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
    padding: "40px 50px",
    backgroundColor: "#F9FAFB",
    fontFamily: "Arial, sans-serif",
    color: "#111827",
  },

  title: {
    color: "#5B21B6",
    fontSize: "30px",
    marginBottom: "8px",
  },

  subtitle: {
    color: "#6B7280",
    marginBottom: "30px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(3, 1fr)",
    gap: "20px",
  },

  card: {
    backgroundColor: "#FFFFFF",
    border: "1px solid #E5E7EB",
    borderRadius: "8px",
    padding: "22px",
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
    color: "#4B5563",
    fontSize: "14px",
    lineHeight: "1.4",
    marginTop: "15px",
    marginBottom: "20px",
  },

  startButton: {
    display: "inline-block",
    backgroundColor: "#7C3AED",
    color: "#FFFFFF",
    textDecoration: "none",
    padding: "10px 16px",
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

  emptyTitle: {
    marginBottom: "10px",
  },

  emptyText: {
    color: "#6B7280",
    lineHeight: "1.5",
    marginBottom: "20px",
  },

  exploreButton: {
    display: "inline-block",
    backgroundColor: "#7C3AED",
    color: "#FFFFFF",
    textDecoration: "none",
    padding: "10px 18px",
    borderRadius: "6px",
  },

};

export default StudentMyCourses;