import React from "react";

function StudentMyCourses() {
  const myCourses = [
    {
      id: 1,
      title: "React JS",
      instructor: "John Smith",
      progress: 70,
      status: "In Progress",
    },
    {
      id: 2,
      title: "Python Programming",
      instructor: "David Kumar",
      progress: 45,
      status: "In Progress",
    },
    {
      id: 3,
      title: "HTML & CSS",
      instructor: "Michael Brown",
      progress: 100,
      status: "Completed",
    },
  ];

  return (
    <div style={styles.container}>

      <h1 style={styles.heading}>My Courses</h1>

      <p style={styles.subText}>
        View your enrolled courses and track your learning progress.
      </p>

      <div style={styles.courseList}>

        {myCourses.map((course) => (
          <div key={course.id} style={styles.courseCard}>

            <div style={styles.courseInfo}>
              <h2 style={styles.courseTitle}>
                {course.title}
              </h2>

              <p style={styles.subText}>
                Instructor: {course.instructor}
              </p>

              <span
                style={{
                  ...styles.status,
                  backgroundColor:
                    course.status === "Completed"
                      ? "#DCFCE7"
                      : "#FEF3C7",
                  color:
                    course.status === "Completed"
                      ? "#15803D"
                      : "#B45309",
                }}
              >
                {course.status}
              </span>
            </div>

            <div style={styles.progressSection}>

              <div style={styles.progressHeader}>
                <span>Progress</span>
                <span>{course.progress}%</span>
              </div>

              <div style={styles.progressBackground}>
                <div
                  style={{
                    ...styles.progressBar,
                    width: `${course.progress}%`,
                    backgroundColor:
                      course.progress === 100
                        ? "#22C55E"
                        : "#7C3AED",
                  }}
                ></div>
              </div>

            </div>

            <button
              style={
                course.progress === 100
                  ? styles.completedButton
                  : styles.button
              }
            >
              {course.progress === 100
                ? "View Course"
                : "Continue Learning"}
            </button>

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

  heading: {
    marginBottom: "5px",
  },

  subText: {
    color: "#6B7280",
    fontSize: "14px",
    margin: "6px 0",
  },

  courseList: {
    marginTop: "25px",
  },

  courseCard: {
    backgroundColor: "#FFFFFF",
    border: "1px solid #E5E7EB",
    borderRadius: "8px",
    padding: "22px",
    marginBottom: "18px",
  },

  courseInfo: {
    marginBottom: "18px",
  },

  courseTitle: {
    margin: "0 0 6px",
    fontSize: "19px",
  },

  status: {
    display: "inline-block",
    padding: "5px 10px",
    borderRadius: "5px",
    fontSize: "12px",
    marginTop: "8px",
  },

  progressSection: {
    marginBottom: "18px",
  },

  progressHeader: {
    display: "flex",
    justifyContent: "space-between",
    color: "#6B7280",
    fontSize: "13px",
    marginBottom: "6px",
  },

  progressBackground: {
    height: "8px",
    backgroundColor: "#E5E7EB",
    borderRadius: "10px",
  },

  progressBar: {
    height: "8px",
    borderRadius: "10px",
  },

  button: {
    backgroundColor: "#7C3AED",
    color: "#FFFFFF",
    border: "none",
    padding: "9px 18px",
    borderRadius: "6px",
    cursor: "pointer",
  },

  completedButton: {
    backgroundColor: "#FFFFFF",
    color: "#5B21B6",
    border: "1px solid #7C3AED",
    padding: "9px 18px",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default StudentMyCourses;