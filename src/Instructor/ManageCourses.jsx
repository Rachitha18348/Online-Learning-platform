import React from "react";
import { Link } from "react-router-dom";
import { useCourses } from "../Context/CourseContext";

function ManageCourses() {

  const {
    courses,
    deleteCourse,
  } = useCourses();


  function handleDelete(courseId) {

    const confirmDelete =
      window.confirm(
        "Are you sure you want to delete this course?"
      );


    if (confirmDelete) {

      deleteCourse(courseId);

      alert("Course deleted successfully.");

    }

  }


  return (
    <div style={styles.container}>

      <div style={styles.header}>

        <div>

          <h1 style={styles.title}>
            Manage Courses
          </h1>

          <p style={styles.subtitle}>
            Create, edit, and manage your courses.
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

          <h2>
            No Courses Created
          </h2>

          <p>
            You have not created any courses yet.
          </p>

          <Link
            to="/instructor/create-course"
            style={styles.emptyButton}
          >
            Create Course
          </Link>

        </div>

      ) : (

        <div style={styles.grid}>

          {courses.map((course) => (

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


              <div style={styles.actions}>

                {/* EDIT */}

                <Link
                  to={`/instructor/edit-course/${course.id}`}
                  style={styles.editButton}
                >
                  Edit
                </Link>


                {/* DELETE */}

                <button
                  onClick={() =>
                    handleDelete(course.id)
                  }
                  style={styles.deleteButton}
                >
                  Delete
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
    minHeight: "70vh",
    padding: "40px 50px",
    backgroundColor: "#F9FAFB",
    fontFamily: "Arial, sans-serif",
  },

  header: {
    maxWidth: "1100px",
    margin: "0 auto 30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    color: "#5B21B6",
    fontSize: "30px",
    marginBottom: "8px",
  },

  subtitle: {
    color: "#6B7280",
  },

  createButton: {
    backgroundColor: "#7C3AED",
    color: "#FFFFFF",
    textDecoration: "none",
    padding: "11px 18px",
    borderRadius: "6px",
  },

  grid: {
    maxWidth: "1100px",
    margin: "auto",
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
  },

  description: {
    color: "#6B7280",
    lineHeight: "1.5",
  },

  info: {
    color: "#4B5563",
    fontSize: "14px",
    marginTop: "15px",
  },

  actions: {
    display: "flex",
    gap: "10px",
    marginTop: "20px",
  },

  editButton: {
    backgroundColor: "#EDE9FE",
    color: "#5B21B6",
    textDecoration: "none",
    padding: "9px 18px",
    borderRadius: "6px",
  },

  deleteButton: {
    backgroundColor: "#DC2626",
    color: "#FFFFFF",
    border: "none",
    padding: "9px 18px",
    borderRadius: "6px",
    cursor: "pointer",
  },

  emptyCard: {
    maxWidth: "600px",
    margin: "60px auto",
    padding: "40px",
    backgroundColor: "#FFFFFF",
    textAlign: "center",
    borderRadius: "8px",
  },

  emptyButton: {
    display: "inline-block",
    marginTop: "15px",
    backgroundColor: "#7C3AED",
    color: "#FFFFFF",
    textDecoration: "none",
    padding: "10px 18px",
    borderRadius: "6px",
  },

};

export default ManageCourses;