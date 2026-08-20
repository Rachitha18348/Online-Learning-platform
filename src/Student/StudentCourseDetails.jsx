import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCourses } from "../Context/CourseContext";

function StudentCourseDetails() {

  const { id } = useParams();

  const navigate = useNavigate();

  const {
    courses,
    enrolledCourses,
    enrollCourse,
  } = useCourses();


  const course = courses.find(
    (item) => item.id === Number(id)
  );


  if (!course) {

    return (
      <div style={styles.notFound}>

        <h2>Course Not Found</h2>

        <p>
          The course you are looking for does not exist.
        </p>

      </div>
    );

  }


  const alreadyEnrolled = enrolledCourses.some(
    (item) => item.id === course.id
  );


  function handleEnroll() {

    if (!alreadyEnrolled) {

      enrollCourse(course);

      alert("Course enrolled successfully!");

    }

    navigate("/student/my-courses");
  }


  return (
    <div style={styles.container}>

      <div style={styles.card}>

        {/* Course Title */}

        <h1 style={styles.title}>
          {course.title}
        </h1>


        {/* Description */}

        <h2 style={styles.heading}>
          About This Course
        </h2>

        <p style={styles.description}>
          {course.description}
        </p>


        {/* Course Information */}

        <h2 style={styles.heading}>
          Course Information
        </h2>

        <div style={styles.infoGrid}>

          <div style={styles.infoBox}>

            <span style={styles.label}>
              Instructor
            </span>

            <span style={styles.value}>
              {course.instructor}
            </span>

          </div>


          <div style={styles.infoBox}>

            <span style={styles.label}>
              Instructor Email
            </span>

            <span style={styles.value}>
              {course.email}
            </span>

          </div>


          <div style={styles.infoBox}>

            <span style={styles.label}>
              Duration
            </span>

            <span style={styles.value}>
              {course.duration}
            </span>

          </div>


          <div style={styles.infoBox}>

            <span style={styles.label}>
              Level
            </span>

            <span style={styles.value}>
              {course.level}
            </span>

          </div>


          <div style={styles.infoBox}>

            <span style={styles.label}>
              Number of Lessons
            </span>

            <span style={styles.value}>
              {course.lessons?.length || 0}
            </span>

          </div>

        </div>


        {/* Topics */}

        <h2 style={styles.heading}>
          What You Will Learn
        </h2>

        <div style={styles.topics}>

          {course.topics
            ? course.topics
                .split(",")
                .map((topic, index) => (

                  <span
                    key={index}
                    style={styles.topic}
                  >
                    {topic.trim()}
                  </span>

                ))
            : (
              <p>
                Course topics will be provided by the instructor.
              </p>
            )}

        </div>


        {/* Lessons Preview */}

        <h2 style={styles.heading}>
          Course Content
        </h2>

        {course.lessons?.length > 0 ? (

          <div style={styles.lessonList}>

            {course.lessons.map((lesson, index) => (

              <div
                key={index}
                style={styles.lesson}
              >

                <span>
                  Lesson {index + 1}
                </span>

                <strong>
                  {lesson.title}
                </strong>

              </div>

            ))}

          </div>

        ) : (

          <p style={styles.noLessons}>
            Course content will be added by the instructor.
          </p>

        )}


        {/* Enroll */}

        <div style={styles.actionArea}>

          {alreadyEnrolled ? (

            <button
              onClick={() =>
                navigate("/student/my-courses")
              }
              style={styles.enrolledButton}
            >
              Go to My Courses
            </button>

          ) : (

            <button
              onClick={handleEnroll}
              style={styles.enrollButton}
            >
              Enroll in Course
            </button>

          )}

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
  },

  card: {
    maxWidth: "950px",
    margin: "auto",
    backgroundColor: "#FFFFFF",
    border: "1px solid #E5E7EB",
    borderRadius: "10px",
    padding: "35px",
  },

  title: {
    color: "#5B21B6",
    fontSize: "32px",
    marginBottom: "30px",
  },

  heading: {
    color: "#111827",
    fontSize: "20px",
    marginTop: "30px",
    marginBottom: "15px",
  },

  description: {
    color: "#6B7280",
    lineHeight: "1.7",
    fontSize: "15px",
  },

  infoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "15px",
  },

  infoBox: {
    padding: "15px",
    backgroundColor: "#F9FAFB",
    borderRadius: "6px",
    border: "1px solid #E5E7EB",
  },

  label: {
    display: "block",
    color: "#6B7280",
    fontSize: "13px",
    marginBottom: "6px",
  },

  value: {
    color: "#111827",
    fontSize: "15px",
    fontWeight: "600",
  },

  topics: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  },

  topic: {
    backgroundColor: "#EDE9FE",
    color: "#5B21B6",
    padding: "8px 12px",
    borderRadius: "5px",
    fontSize: "13px",
  },

  lessonList: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  lesson: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px",
    backgroundColor: "#F9FAFB",
    border: "1px solid #E5E7EB",
    borderRadius: "6px",
  },

  noLessons: {
    color: "#6B7280",
  },

  actionArea: {
    marginTop: "35px",
    textAlign: "center",
  },

  enrollButton: {
    backgroundColor: "#7C3AED",
    color: "#FFFFFF",
    border: "none",
    padding: "13px 25px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "15px",
  },

  enrolledButton: {
    backgroundColor: "#EDE9FE",
    color: "#5B21B6",
    border: "none",
    padding: "13px 25px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "15px",
  },

  notFound: {
    minHeight: "70vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
  },

};

export default StudentCourseDetails;