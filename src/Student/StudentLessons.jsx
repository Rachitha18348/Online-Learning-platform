import React from "react";
import {
  Link,
  useParams,
} from "react-router-dom";

import { useCourses } from "../Context/CourseContext";


function StudentLessons() {

  const { courseId } =
    useParams();


  const {
    getCourseById,
    isEnrolled,
  } = useCourses();


  // =====================================================
  // Get Course
  // =====================================================

  const course =
    getCourseById(courseId);


  // =====================================================
  // Course Not Found
  // =====================================================

  if (!course) {

    return (

      <div style={styles.container}>

        <div style={styles.card}>

          <h1>
            Course Not Found
          </h1>

          <p>
            The course you are looking for does not exist.
          </p>


          <Link
            to="/student/my-courses"
            style={styles.button}
          >
            Back to My Courses
          </Link>

        </div>

      </div>

    );

  }


  // =====================================================
  // Check Enrollment
  // =====================================================

  if (!isEnrolled(courseId)) {

    return (

      <div style={styles.container}>

        <div style={styles.card}>

          <h1>
            Access Denied
          </h1>

          <p>
            You are not enrolled in this course.
          </p>


          <Link
            to="/student/courses"
            style={styles.button}
          >
            Explore Courses
          </Link>

        </div>

      </div>

    );

  }


  // =====================================================
  // Lessons
  // =====================================================

  const lessons =
    Array.isArray(course.lessons)
      ? course.lessons
      : [];


  return (

    <div style={styles.container}>

      {/* Course Header */}

      <div style={styles.header}>

        <h1 style={styles.title}>
          {course.title}
        </h1>


        <p style={styles.description}>
          {course.description}
        </p>


        <p style={styles.instructor}>
          <strong>
            Instructor:
          </strong>{" "}
          {course.instructor}
        </p>


        <p style={styles.instructor}>
          <strong>
            Duration:
          </strong>{" "}
          {course.duration}
        </p>

      </div>


      {/* Learning Content */}

      <div style={styles.content}>

        <h2 style={styles.heading}>
          Learning Content
        </h2>


        {lessons.length === 0 ? (

          <div style={styles.emptyCard}>

            <h3>
              No Learning Content
            </h3>

            <p>
              The instructor has not added
              any lessons to this course yet.
            </p>

          </div>

        ) : (

          <div>

            {lessons.map(
              (lesson, index) => (

                <div
                  key={
                    lesson.id || index
                  }
                  style={styles.lessonCard}
                >

                  <h3 style={styles.lessonTitle}>

                    Lesson {index + 1}:{" "}

                    {lesson.title}

                  </h3>


                  <p style={styles.lessonDescription}>
                    {lesson.description}
                  </p>


                  {/* Video */}

                  {lesson.videoUrl && (

                    <div style={styles.videoContainer}>

                      <a
                        href={lesson.videoUrl}
                        target="_blank"
                        rel="noreferrer"
                        style={styles.videoButton}
                      >
                        ▶ Watch Lesson Video
                      </a>

                    </div>

                  )}

                </div>

              )
            )}

          </div>

        )}

      </div>


      <Link
        to="/student/my-courses"
        style={styles.backButton}
      >
        ← Back to My Courses
      </Link>

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

  header: {
    maxWidth: "900px",
    margin: "0 auto 30px",
    backgroundColor: "#FFFFFF",
    padding: "30px",
    borderRadius: "8px",
    border: "1px solid #E5E7EB",
  },

  title: {
    color: "#5B21B6",
    marginBottom: "10px",
  },

  description: {
    color: "#6B7280",
    lineHeight: "1.6",
  },

  instructor: {
    color: "#4B5563",
    fontSize: "14px",
  },

  content: {
    maxWidth: "900px",
    margin: "auto",
  },

  heading: {
    color: "#5B21B6",
    marginBottom: "20px",
  },

  lessonCard: {
    backgroundColor: "#FFFFFF",
    border: "1px solid #E5E7EB",
    borderRadius: "8px",
    padding: "25px",
    marginBottom: "20px",
  },

  lessonTitle: {
    color: "#5B21B6",
    marginBottom: "10px",
  },

  lessonDescription: {
    color: "#6B7280",
    lineHeight: "1.6",
    marginBottom: "20px",
  },

  videoContainer: {
    marginTop: "15px",
  },

  videoButton: {
    display: "inline-block",
    backgroundColor: "#7C3AED",
    color: "#FFFFFF",
    textDecoration: "none",
    padding: "10px 16px",
    borderRadius: "6px",
  },

  emptyCard: {
    backgroundColor: "#FFFFFF",
    border: "1px solid #E5E7EB",
    borderRadius: "8px",
    padding: "40px",
    textAlign: "center",
  },

  card: {
    maxWidth: "600px",
    margin: "60px auto",
    backgroundColor: "#FFFFFF",
    padding: "40px",
    borderRadius: "8px",
    textAlign: "center",
  },

  button: {
    display: "inline-block",
    backgroundColor: "#7C3AED",
    color: "#FFFFFF",
    textDecoration: "none",
    padding: "10px 18px",
    borderRadius: "6px",
    marginTop: "15px",
  },

  backButton: {
    display: "block",
    width: "fit-content",
    margin: "30px auto",
    backgroundColor: "#EDE9FE",
    color: "#5B21B6",
    textDecoration: "none",
    padding: "10px 18px",
    borderRadius: "6px",
  },

};

export default StudentLessons;