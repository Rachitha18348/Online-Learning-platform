import React from "react";
import { useParams } from "react-router-dom";
import { useCourses } from "../Context/CourseContext";

function StudentLessons() {
  const { id } = useParams();

  const { enrolledCourses } = useCourses();

  const course = enrolledCourses.find(
    (item) => item.id === Number(id)
  );

  if (!course) {
    return (
      <div style={styles.notFound}>
        <h2>Course Not Found</h2>

        <p>
          This course is not available in your enrolled courses.
        </p>
      </div>
    );
  }

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

        <div style={styles.courseInfo}>

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

        </div>

      </div>


      {/* Learning Content */}

      <div style={styles.content}>

        <h2 style={styles.sectionTitle}>
          Course Lessons
        </h2>


        {course.lessons && course.lessons.length > 0 ? (

          <div style={styles.lessonList}>

            {course.lessons.map((lesson, index) => (

              <div
                key={index}
                style={styles.lessonCard}
              >

                <div style={styles.lessonInfo}>

                  <h3 style={styles.lessonTitle}>
                    Lesson {index + 1}: {lesson.title}
                  </h3>

                  <p style={styles.lessonDescription}>
                    {lesson.description}
                  </p>

                </div>


                {lesson.videoUrl && (

                  <a
                    href={lesson.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.watchButton}
                  >
                    Watch Video
                  </a>

                )}

              </div>

            ))}

          </div>

        ) : (

          <div style={styles.emptyCard}>

            <h3>
              No Learning Content
            </h3>

            <p>
              The instructor has not added any lessons yet.
            </p>

          </div>

        )}

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
    backgroundColor: "#FFFFFF",
    padding: "30px",
    borderRadius: "8px",
    border: "1px solid #E5E7EB",
  },

  title: {
    color: "#5B21B6",
    fontSize: "30px",
    marginBottom: "10px",
  },

  description: {
    color: "#6B7280",
    lineHeight: "1.6",
  },

  courseInfo: {
    display: "flex",
    gap: "30px",
    flexWrap: "wrap",
    marginTop: "20px",
    fontSize: "14px",
  },

  content: {
    maxWidth: "1000px",
    margin: "auto",
  },

  sectionTitle: {
    color: "#111827",
    marginBottom: "20px",
  },

  lessonList: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },

  lessonCard: {
    backgroundColor: "#FFFFFF",
    border: "1px solid #E5E7EB",
    borderRadius: "8px",
    padding: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
  },

  lessonInfo: {
    flex: 1,
  },

  lessonTitle: {
    color: "#5B21B6",
    marginBottom: "8px",
  },

  lessonDescription: {
    color: "#6B7280",
    lineHeight: "1.5",
  },

  watchButton: {
    backgroundColor: "#7C3AED",
    color: "#FFFFFF",
    textDecoration: "none",
    padding: "10px 16px",
    borderRadius: "6px",
    whiteSpace: "nowrap",
  },

  emptyCard: {
    backgroundColor: "#FFFFFF",
    border: "1px solid #E5E7EB",
    borderRadius: "8px",
    padding: "40px",
    textAlign: "center",
    color: "#6B7280",
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

export default StudentLessons;