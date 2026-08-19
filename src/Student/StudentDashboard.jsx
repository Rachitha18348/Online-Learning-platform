import React from "react";

function StudentDashboard() {

  const courses = [
    {
      id: 1,
      title: "React JS",
      instructor: "John Smith",
      progress: 70,
    },
    {
      id: 2,
      title: "Python Programming",
      instructor: "David Kumar",
      progress: 45,
    },
    {
      id: 3,
      title: "JavaScript",
      instructor: "Sarah Wilson",
      progress: 80,
    },
  ];

  return (
    <div style={styles.container}>

      {/* Welcome */}
      <div style={styles.welcome}>
        <div>
          <h1 style={styles.heading}>Welcome back, Rachitha!</h1>
          <p style={styles.subText}>
            Continue your learning journey and improve your skills.
          </p>
        </div>

        <span style={styles.badge}>Student</span>
      </div>

      {/* Summary */}
      <div style={styles.summary}>

        <div style={styles.card}>
          <h3>Enrolled Courses</h3>
          <p style={styles.number}>3</p>
          <p style={styles.subText}>Active courses</p>
        </div>

        <div style={styles.card}>
          <h3>Completed Courses</h3>
          <p style={styles.number}>1</p>
          <p style={styles.subText}>Courses completed</p>
        </div>

        <div style={styles.card}>
          <h3>Overall Progress</h3>
          <p style={styles.number}>65%</p>
          <p style={styles.subText}>Learning progress</p>
        </div>

      </div>

      {/* Courses */}
      <div style={styles.courseContainer}>

        <h2 style={styles.sectionTitle}>My Courses</h2>

        {courses.map((course) => (
          <div key={course.id} style={styles.courseCard}>

            <div>
              <h3 style={styles.courseTitle}>
                {course.title}
              </h3>

              <p style={styles.subText}>
                Instructor: {course.instructor}
              </p>
            </div>

            <div style={styles.progressArea}>

              <div style={styles.progressText}>
                <span>Progress</span>
                <span>{course.progress}%</span>
              </div>

              <div style={styles.progressBackground}>
                <div
                  style={{
                    ...styles.progress,
                    width: `${course.progress}%`,
                  }}
                ></div>
              </div>

            </div>

            <button style={styles.button}>
              Continue
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

  welcome: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "30px",
  },

  heading: {
    margin: "0 0 8px",
    fontSize: "28px",
  },

  subText: {
    color: "#6B7280",
    fontSize: "14px",
    margin: "5px 0",
  },

  badge: {
    backgroundColor: "#7C3AED",
    color: "#FFFFFF",
    padding: "8px 18px",
    borderRadius: "20px",
    fontSize: "14px",
  },

  summary: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    marginBottom: "30px",
  },

  card: {
    backgroundColor: "#FFFFFF",
    padding: "20px",
    borderRadius: "8px",
    border: "1px solid #E5E7EB",
  },

  number: {
    color: "#5B21B6",
    fontSize: "26px",
    fontWeight: "bold",
    margin: "8px 0",
  },

  courseContainer: {
    backgroundColor: "#FFFFFF",
    padding: "25px",
    borderRadius: "8px",
    border: "1px solid #E5E7EB",
  },

  sectionTitle: {
    marginTop: 0,
    marginBottom: "20px",
  },

  courseCard: {
    border: "1px solid #E5E7EB",
    borderRadius: "8px",
    padding: "18px",
    marginBottom: "15px",
  },

  courseTitle: {
    margin: "0 0 5px",
    fontSize: "17px",
  },

  progressArea: {
    marginTop: "15px",
  },

  progressText: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "13px",
    color: "#6B7280",
    marginBottom: "6px",
  },

  progressBackground: {
    height: "7px",
    backgroundColor: "#E5E7EB",
    borderRadius: "10px",
  },

  progress: {
    height: "7px",
    backgroundColor: "#7C3AED",
    borderRadius: "10px",
  },

  button: {
    marginTop: "15px",
    backgroundColor: "#7C3AED",
    color: "#FFFFFF",
    border: "none",
    padding: "8px 18px",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default StudentDashboard;