import React, { useState } from "react";

function StudentCourses() {

  const [search, setSearch] = useState("");

  const courses = [
    {
      id: 1,
      title: "React JS",
      instructor: "John Smith",
      duration: "6 Weeks",
      level: "Beginner",
    },
    {
      id: 2,
      title: "Python Programming",
      instructor: "David Kumar",
      duration: "8 Weeks",
      level: "Beginner",
    },
    {
      id: 3,
      title: "JavaScript",
      instructor: "Sarah Wilson",
      duration: "5 Weeks",
      level: "Intermediate",
    },
    {
      id: 4,
      title: "HTML & CSS",
      instructor: "Michael Brown",
      duration: "4 Weeks",
      level: "Beginner",
    },
  ];

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={styles.container}>

      <h1 style={styles.heading}>Explore Courses</h1>

      <p style={styles.subText}>
        Find courses and start learning new skills.
      </p>

      {/* Search */}
      <input
        type="text"
        placeholder="Search courses..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={styles.search}
      />

      {/* Course List */}
      <div style={styles.courseGrid}>

        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <div key={course.id} style={styles.courseCard}>

              <h2 style={styles.courseTitle}>
                {course.title}
              </h2>

              <p style={styles.info}>
                Instructor: {course.instructor}
              </p>

              <p style={styles.info}>
                Duration: {course.duration}
              </p>

              <span style={styles.level}>
                {course.level}
              </span>

              <br />

              <button style={styles.button}>
                View Details
              </button>

            </div>
          ))
        ) : (
          <p style={styles.noCourse}>
            No courses found.
          </p>
        )}

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
  },

  heading: {
    color: "#111827",
    marginBottom: "5px",
  },

  subText: {
    color: "#6B7280",
    marginBottom: "25px",
  },

  search: {
    width: "100%",
    maxWidth: "500px",
    padding: "11px",
    border: "1px solid #D1D5DB",
    borderRadius: "6px",
    fontSize: "14px",
    marginBottom: "25px",
    outline: "none",
  },

  courseGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "20px",
  },

  courseCard: {
    backgroundColor: "#FFFFFF",
    border: "1px solid #E5E7EB",
    borderRadius: "8px",
    padding: "22px",
  },

  courseTitle: {
    color: "#111827",
    marginTop: 0,
  },

  info: {
    color: "#6B7280",
    fontSize: "14px",
    margin: "7px 0",
  },

  level: {
    display: "inline-block",
    marginTop: "8px",
    padding: "5px 10px",
    backgroundColor: "#F3E8FF",
    color: "#5B21B6",
    borderRadius: "5px",
    fontSize: "12px",
  },

  button: {
    marginTop: "18px",
    padding: "9px 16px",
    backgroundColor: "#7C3AED",
    color: "#FFFFFF",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },

  noCourse: {
    color: "#6B7280",
  },
};

export default StudentCourses;