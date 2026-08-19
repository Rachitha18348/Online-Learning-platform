import React from "react";
import { Link, useParams } from "react-router-dom";
import { useCourses } from "../Context/CourseContext";

function StudentLessons() {

  const { id } = useParams();

  const { courses, enrolledCourses } = useCourses();

  const course = courses.find(
    (item) => item.id.toString() === id
  );

  const enrolledCourse = enrolledCourses.find(
    (item) => item.id.toString() === id
  );

  if (!course) {
    return (
      <div style={styles.container}>
        <div style={styles.messageCard}>
          <h2>Course Not Found</h2>

          <Link to="/student/courses">
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  if (!enrolledCourse) {
    return (
      <div style={styles.container}>
        <div style={styles.messageCard}>

          <h2>Course Not Enrolled</h2>

          <p>
            Please enroll in this course before
            starting the lessons.
          </p>

          <Link
            to={`/student/course-details/${course.id}`}
            style={styles.button}
          >
            View Course
          </Link>

        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>

      {/* Header */}

      <div style={styles.header}>

        <h1 style={styles.title}>
          {course.title}
        </h1>

        <p style={styles.subtitle}>
          Start learning through the lessons and
          learning materials provided for this course.
        </p>

      </div>


      {/* Course Content */}

      <div style={styles.content}>

        {/* Lessons List */}

        <div style={styles.lessonSection}>

          <h2 style={styles.sectionTitle}>
            Course Lessons
          </h2>


          <div style={styles.lessonList}>

            <div style={styles.lessonCard}>

              <div>

                <h3>
                  Lesson 1: Introduction
                </h3>

                <p style={styles.lessonText}>
                  Introduction to the course and
                  the basic concepts you need to know.
                </p>

              </div>

              <button style={styles.lessonButton}>
                Watch Video
              </button>

            </div>


            <div style={styles.lessonCard}>

              <div>

                <h3>
                  Lesson 2: Basic Concepts
                </h3>

                <p style={styles.lessonText}>
                  Learn the fundamental concepts and
                  important topics covered in the course.
                </p>

              </div>

              <button style={styles.lessonButton}>
                Watch Video
              </button>

            </div>


            <div style={styles.lessonCard}>

              <div>

                <h3>
                  Lesson 3: Practical Learning
                </h3>

                <p style={styles.lessonText}>
                  Apply the concepts through practical
                  examples and exercises.
                </p>

              </div>

              <button style={styles.lessonButton}>
                Watch Video
              </button>

            </div>

          </div>

        </div>


        {/* Course Information */}

        <div style={styles.infoCard}>

          <h2 style={styles.sectionTitle}>
            Course Information
          </h2>

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
            <strong>Total Lessons:</strong>{" "}
            {course.lessons}
          </p>

        </div>

      </div>


      {/* Back */}

      <div style={styles.backContainer}>

        <Link
          to="/student/my-courses"
          style={styles.backLink}
        >
          ← Back to My Courses
        </Link>

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
    lineHeight: "1.5",
  },

  content: {
    maxWidth: "1100px",
    margin: "auto",
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: "25px",
    alignItems: "start",
  },

  lessonSection: {
    backgroundColor: "#FFFFFF",
    border: "1px solid #E5E7EB",
    borderRadius: "8px",
    padding: "25px",
  },

  sectionTitle: {
    color: "#111827",
    fontSize: "21px",
    marginBottom: "20px",
  },

  lessonList: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },

  lessonCard: {
    border: "1px solid #E5E7EB",
    borderRadius: "7px",
    padding: "18px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
  },

  lessonText: {
    color: "#6B7280",
    fontSize: "14px",
    lineHeight: "1.5",
  },

  lessonButton: {
    backgroundColor: "#7C3AED",
    color: "#FFFFFF",
    border: "none",
    borderRadius: "5px",
    padding: "9px 14px",
    cursor: "pointer",
    whiteSpace: "nowrap",
  },

  infoCard: {
    backgroundColor: "#FFFFFF",
    border: "1px solid #E5E7EB",
    borderRadius: "8px",
    padding: "25px",
    color: "#6B7280",
    lineHeight: "1.6",
  },

  button: {
    display: "inline-block",
    marginTop: "15px",
    backgroundColor: "#7C3AED",
    color: "#FFFFFF",
    textDecoration: "none",
    padding: "10px 16px",
    borderRadius: "6px",
  },

  backContainer: {
    maxWidth: "1100px",
    margin: "25px auto",
  },

  backLink: {
    color: "#7C3AED",
    textDecoration: "none",
    fontSize: "14px",
  },

  messageCard: {
    maxWidth: "600px",
    margin: "50px auto",
    padding: "40px",
    backgroundColor: "#FFFFFF",
    border: "1px solid #E5E7EB",
    borderRadius: "8px",
    textAlign: "center",
  },

};

export default StudentLessons;