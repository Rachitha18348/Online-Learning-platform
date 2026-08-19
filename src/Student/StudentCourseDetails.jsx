import React from "react";
import { Link, useParams } from "react-router-dom";
import { useCourses } from "../Context/CourseContext";

function StudentCourseDetails() {

  const { id } = useParams();

  const {
    courses,
    enrolledCourses,
    enrollCourse,
  } = useCourses();

  const course = courses.find(
    (item) => item.id.toString() === id
  );

  // Course not found
  if (!course) {
    return (
      <div style={styles.container}>
        <div style={styles.notFound}>

          <h2>Course Not Found</h2>

          <p>
            The course you are looking for does not exist.
          </p>

          <Link
            to="/student/courses"
            style={styles.backLink}
          >
            Back to Courses
          </Link>

        </div>
      </div>
    );
  }


  // Check whether student already enrolled
  const isEnrolled = enrolledCourses.some(
    (item) => item.id === course.id
  );


  // Enroll student
  function handleEnroll() {

    const enrolled = enrollCourse(course);

    if (enrolled) {
      alert("Course enrolled successfully!");
    } else {
      alert("You are already enrolled in this course.");
    }
  }


  return (
    <div style={styles.container}>

      {/* Course Header */}

      <div style={styles.courseHeader}>

        <span style={styles.level}>
          {course.level}
        </span>

        <h1 style={styles.title}>
          {course.title}
        </h1>

        <p style={styles.description}>
          {course.description}
        </p>

      </div>


      {/* Main Content */}

      <div style={styles.content}>

        {/* Course Information */}

        <div style={styles.mainCard}>

          <h2 style={styles.heading}>
            Course Information
          </h2>


          <div style={styles.infoGrid}>

            <div style={styles.infoItem}>
              <strong>Instructor</strong>
              <p style={styles.infoText}>
                {course.instructor}
              </p>
            </div>


            <div style={styles.infoItem}>
              <strong>Instructor Email</strong>
              <p style={styles.infoText}>
                {course.email}
              </p>
            </div>


            <div style={styles.infoItem}>
              <strong>Duration</strong>
              <p style={styles.infoText}>
                {course.duration}
              </p>
            </div>


            <div style={styles.infoItem}>
              <strong>Lessons</strong>
              <p style={styles.infoText}>
                {course.lessons}
              </p>
            </div>


            <div style={styles.infoItem}>
              <strong>Level</strong>
              <p style={styles.infoText}>
                {course.level}
              </p>
            </div>


            <div style={styles.infoItem}>
              <strong>Students</strong>
              <p style={styles.infoText}>
                {course.students}
              </p>
            </div>

          </div>


          {/* What Student Will Learn */}

          <h2 style={styles.heading}>
            What You Will Learn
          </h2>

          <ul style={styles.topicList}>

            {course.topics && course.topics.length > 0 ? (

              course.topics.map((topic, index) => (

                <li key={index}>
                  {topic}
                </li>

              ))

            ) : (

              <li>
                Course topics will be provided by the instructor.
              </li>

            )}

          </ul>

        </div>


        {/* Enrollment Card */}

        <div style={styles.enrollCard}>

          <h2 style={styles.enrollTitle}>
            {course.title}
          </h2>

          <p style={styles.enrollText}>
            Enroll in this course to access the
            lessons and learning materials.
          </p>


          {isEnrolled ? (

            <Link
              to={`/student/lessons/${course.id}`}
              style={styles.startButton}
            >
              Start Learning
            </Link>

          ) : (

            <button
              onClick={handleEnroll}
              style={styles.enrollButton}
            >
              Enroll Now
            </button>

          )}


          <Link
            to="/student/courses"
            style={styles.backLink}
          >
            ← Back to Courses
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


  courseHeader: {
    maxWidth: "1100px",
    margin: "0 auto 30px",
  },


  level: {
    display: "inline-block",
    backgroundColor: "#F3E8FF",
    color: "#5B21B6",
    padding: "5px 10px",
    borderRadius: "5px",
    fontSize: "13px",
  },


  title: {
    fontSize: "32px",
    color: "#5B21B6",
    margin: "12px 0",
  },


  description: {
    maxWidth: "800px",
    color: "#6B7280",
    lineHeight: "1.6",
    fontSize: "15px",
  },


  content: {
    maxWidth: "1100px",
    margin: "auto",
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: "25px",
    alignItems: "start",
  },


  mainCard: {
    backgroundColor: "#FFFFFF",
    border: "1px solid #E5E7EB",
    borderRadius: "8px",
    padding: "25px",
  },


  heading: {
    color: "#111827",
    fontSize: "21px",
    marginBottom: "20px",
  },


  infoGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
    marginBottom: "30px",
  },


  infoItem: {
    padding: "12px",
    backgroundColor: "#F9FAFB",
    borderRadius: "6px",
  },


  infoText: {
    color: "#6B7280",
    marginTop: "6px",
    marginBottom: "0",
  },


  topicList: {
    lineHeight: "2",
    color: "#6B7280",
    paddingLeft: "20px",
  },


  enrollCard: {
    backgroundColor: "#FFFFFF",
    border: "1px solid #E5E7EB",
    borderRadius: "8px",
    padding: "25px",
  },


  enrollTitle: {
    color: "#5B21B6",
    fontSize: "20px",
  },


  enrollText: {
    color: "#6B7280",
    lineHeight: "1.5",
    fontSize: "14px",
  },


  enrollButton: {
    width: "100%",
    backgroundColor: "#7C3AED",
    color: "#FFFFFF",
    border: "none",
    padding: "12px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "15px",
    marginTop: "15px",
  },


  startButton: {
    display: "block",
    textAlign: "center",
    backgroundColor: "#22C55E",
    color: "#FFFFFF",
    textDecoration: "none",
    padding: "12px",
    borderRadius: "6px",
    marginTop: "15px",
  },


  backLink: {
    display: "block",
    marginTop: "20px",
    color: "#7C3AED",
    textDecoration: "none",
    fontSize: "14px",
  },


  notFound: {
    maxWidth: "600px",
    margin: "50px auto",
    backgroundColor: "#FFFFFF",
    padding: "40px",
    textAlign: "center",
    borderRadius: "8px",
    border: "1px solid #E5E7EB",
  },

};


export default StudentCourseDetails;