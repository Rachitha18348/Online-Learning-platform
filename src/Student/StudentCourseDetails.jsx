import React from "react";

function StudentCourseDetails() {
  const course = {
    title: "React JS",
    instructor: "John Smith",
    duration: "6 Weeks",
    level: "Beginner",
    description:
      "Learn the basics of React and build interactive web applications using components, props, state and hooks.",
  };

  const lessons = [
    "Introduction to React",
    "React Components",
    "Props and State",
    "useState Hook",
    "useEffect Hook",
    "React Router",
  ];

  return (
    <div style={styles.container}>

      {/* Course Header */}
      <div style={styles.header}>
        <h1 style={styles.title}>{course.title}</h1>

        <p style={styles.description}>
          {course.description}
        </p>

        <div style={styles.details}>
          <span>Instructor: {course.instructor}</span>
          <span>Duration: {course.duration}</span>
          <span>Level: {course.level}</span>
        </div>

        <button style={styles.button}>
          Enroll Now
        </button>
      </div>

      {/* Course Content */}
      <div style={styles.content}>

        <h2 style={styles.heading}>
          Course Content
        </h2>

        <p style={styles.subText}>
          This course contains {lessons.length} lessons.
        </p>

        {lessons.map((lesson, index) => (
          <div key={index} style={styles.lesson}>

            <span style={styles.lessonNumber}>
              {index + 1}
            </span>

            <span style={styles.lessonName}>
              {lesson}
            </span>

          </div>
        ))}

      </div>

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
    backgroundColor: "#FFFFFF",
    padding: "30px",
    borderRadius: "8px",
    border: "1px solid #E5E7EB",
    marginBottom: "25px",
  },

  title: {
    marginTop: 0,
    color: "#5B21B6",
  },

  description: {
    color: "#6B7280",
    lineHeight: "1.6",
    maxWidth: "700px",
  },

  details: {
    display: "flex",
    gap: "30px",
    margin: "20px 0",
    color: "#6B7280",
    fontSize: "14px",
  },

  button: {
    backgroundColor: "#7C3AED",
    color: "#FFFFFF",
    border: "none",
    padding: "10px 20px",
    borderRadius: "6px",
    cursor: "pointer",
  },

  content: {
    backgroundColor: "#FFFFFF",
    padding: "25px",
    borderRadius: "8px",
    border: "1px solid #E5E7EB",
  },

  heading: {
    marginTop: 0,
  },

  subText: {
    color: "#6B7280",
    fontSize: "14px",
    marginBottom: "20px",
  },

  lesson: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    padding: "13px 0",
    borderBottom: "1px solid #E5E7EB",
  },

  lessonNumber: {
    width: "28px",
    height: "28px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F3E8FF",
    color: "#5B21B6",
    borderRadius: "50%",
    fontSize: "13px",
    fontWeight: "bold",
  },

  lessonName: {
    fontSize: "15px",
  },
};

export default StudentCourseDetails;