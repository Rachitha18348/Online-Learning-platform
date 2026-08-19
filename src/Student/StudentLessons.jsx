import React, { useState } from "react";

function StudentLessons() {
  const [selectedLesson, setSelectedLesson] = useState(0);
  const [completedLessons, setCompletedLessons] = useState([]);

  const lessons = [
    {
      id: 1,
      title: "Introduction to React",
      content:
        "React is a JavaScript library used to build interactive user interfaces.",
    },
    {
      id: 2,
      title: "React Components",
      content:
        "Components are reusable parts of a React application. They help us divide the UI into smaller sections.",
    },
    {
      id: 3,
      title: "Props and State",
      content:
        "Props are used to pass data to components, while state is used to manage data that can change.",
    },
    {
      id: 4,
      title: "useState Hook",
      content:
        "The useState hook allows functional components to store and update values.",
    },
  ];

  function markAsCompleted() {
    if (!completedLessons.includes(lessons[selectedLesson].id)) {
      setCompletedLessons([
        ...completedLessons,
        lessons[selectedLesson].id,
      ]);
    }
  }

  const currentLesson = lessons[selectedLesson];

  return (
    <div style={styles.container}>

      <h1 style={styles.heading}>React JS Lessons</h1>

      <p style={styles.subText}>
        Complete each lesson to track your learning progress.
      </p>

      <div style={styles.lessonContainer}>

        {/* Lesson List */}
        <div style={styles.lessonList}>

          <h3 style={styles.listTitle}>Lessons</h3>

          {lessons.map((lesson, index) => (
            <div
              key={lesson.id}
              onClick={() => setSelectedLesson(index)}
              style={{
                ...styles.lessonItem,
                backgroundColor:
                  selectedLesson === index
                    ? "#F3E8FF"
                    : "#FFFFFF",
              }}
            >
              <span>
                {index + 1}. {lesson.title}
              </span>

              {completedLessons.includes(lesson.id) && (
                <span style={styles.completed}>
                  ✓
                </span>
              )}
            </div>
          ))}

        </div>

        {/* Lesson Content */}
        <div style={styles.content}>

          <h2>{currentLesson.title}</h2>

          <p style={styles.contentText}>
            {currentLesson.content}
          </p>

          {completedLessons.includes(currentLesson.id) ? (
            <p style={styles.success}>
              ✓ Lesson Completed
            </p>
          ) : (
            <button
              onClick={markAsCompleted}
              style={styles.button}
            >
              Mark as Complete
            </button>
          )}

        </div>

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
  },

  lessonContainer: {
    display: "grid",
    gridTemplateColumns: "300px 1fr",
    gap: "25px",
    marginTop: "25px",
  },

  lessonList: {
    backgroundColor: "#FFFFFF",
    border: "1px solid #E5E7EB",
    borderRadius: "8px",
    padding: "15px",
  },

  listTitle: {
    margin: "5px 0 15px",
  },

  lessonItem: {
    padding: "13px 10px",
    borderBottom: "1px solid #E5E7EB",
    cursor: "pointer",
    fontSize: "14px",
    display: "flex",
    justifyContent: "space-between",
  },

  completed: {
    color: "#22C55E",
    fontWeight: "bold",
  },

  content: {
    backgroundColor: "#FFFFFF",
    border: "1px solid #E5E7EB",
    borderRadius: "8px",
    padding: "30px",
    minHeight: "250px",
  },

  contentText: {
    color: "#6B7280",
    lineHeight: "1.7",
    margin: "20px 0",
  },

  button: {
    backgroundColor: "#7C3AED",
    color: "#FFFFFF",
    border: "none",
    padding: "10px 18px",
    borderRadius: "6px",
    cursor: "pointer",
  },

  success: {
    color: "#22C55E",
    fontWeight: "bold",
  },
};

export default StudentLessons;