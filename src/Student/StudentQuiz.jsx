import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useCourses } from "../Context/CourseContext";

function StudentQuiz() {
  const { id } = useParams();
  const { enrolledCourses } = useCourses();

  const course = enrolledCourses.find(
    (item) => item.id.toString() === id
  );

  const questions = [
    {
      question: "What is React mainly used for?",
      options: [
        "Building user interfaces",
        "Managing databases",
        "Creating operating systems",
        "Sending emails",
      ],
      answer: "Building user interfaces",
    },

    {
      question: "Which language is commonly used with React?",
      options: [
        "JavaScript",
        "SQL",
        "Python",
        "C",
      ],
      answer: "JavaScript",
    },

    {
      question: "Which hook is used to manage state in a React component?",
      options: [
        "useState",
        "useRoute",
        "usePage",
        "useStyle",
      ],
      answer: "useState",
    },

    {
      question: "What is JSX?",
      options: [
        "A JavaScript syntax extension",
        "A database",
        "A programming language",
        "A CSS framework",
      ],
      answer: "A JavaScript syntax extension",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(null);

  if (!course) {
    return (
      <div style={styles.container}>
        <h2>Course not found</h2>

        <Link to="/student/my-courses">
          Back to My Courses
        </Link>
      </div>
    );
  }

  function handleNext() {
    if (!selectedAnswer) {
      return;
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
    } else {
      calculateScore();
    }
  }

  function calculateScore() {
    let finalScore = 0;

    if (
      selectedAnswer ===
      questions[currentQuestion].answer
    ) {
      finalScore++;
    }

    setScore(finalScore);
  }

  if (score !== null) {
    return (
      <div style={styles.container}>

        <div style={styles.resultCard}>

          <h1>Quiz Completed!</h1>

          <p style={styles.courseName}>
            {course.title}
          </p>

          <div style={styles.score}>
            {score} / {questions.length}
          </div>

          <p style={styles.message}>
            You have completed the quiz.
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

  const question = questions[currentQuestion];

  return (
    <div style={styles.container}>

      <div style={styles.quizCard}>

        <h1>{course.title} Quiz</h1>

        <p style={styles.progress}>
          Question {currentQuestion + 1} of{" "}
          {questions.length}
        </p>

        <div style={styles.questionBox}>

          <h2>
            {question.question}
          </h2>

          <div style={styles.options}>

            {question.options.map((option) => (

              <label
                key={option}
                style={{
                  ...styles.option,
                  backgroundColor:
                    selectedAnswer === option
                      ? "#F3E8FF"
                      : "#FFFFFF",
                  borderColor:
                    selectedAnswer === option
                      ? "#7C3AED"
                      : "#E5E7EB",
                }}
              >

                <input
                  type="radio"
                  name="answer"
                  value={option}
                  checked={
                    selectedAnswer === option
                  }
                  onChange={(e) =>
                    setSelectedAnswer(e.target.value)
                  }
                />

                <span>{option}</span>

              </label>

            ))}

          </div>

        </div>

        <button
          onClick={handleNext}
          style={{
            ...styles.button,
            opacity: selectedAnswer ? 1 : 0.5,
          }}
        >
          {currentQuestion === questions.length - 1
            ? "Submit Quiz"
            : "Next Question"}
        </button>

      </div>

    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#F9FAFB",
    padding: "40px 50px",
    fontFamily: "Arial, sans-serif",
    color: "#111827",
  },

  quizCard: {
    maxWidth: "750px",
    margin: "auto",
    backgroundColor: "#FFFFFF",
    border: "1px solid #E5E7EB",
    borderRadius: "8px",
    padding: "30px",
  },

  progress: {
    color: "#6B7280",
    fontSize: "14px",
  },

  questionBox: {
    marginTop: "25px",
  },

  options: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    marginTop: "20px",
  },

  option: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "14px",
    border: "1px solid #E5E7EB",
    borderRadius: "6px",
    cursor: "pointer",
  },

  button: {
    display: "inline-block",
    backgroundColor: "#7C3AED",
    color: "#FFFFFF",
    border: "none",
    padding: "11px 20px",
    borderRadius: "6px",
    cursor: "pointer",
    marginTop: "25px",
    textDecoration: "none",
  },

  resultCard: {
    maxWidth: "500px",
    margin: "80px auto",
    backgroundColor: "#FFFFFF",
    border: "1px solid #E5E7EB",
    borderRadius: "8px",
    padding: "40px",
    textAlign: "center",
  },

  courseName: {
    color: "#6B7280",
  },

  score: {
    fontSize: "45px",
    fontWeight: "bold",
    color: "#5B21B6",
    margin: "25px 0",
  },

  message: {
    color: "#6B7280",
    marginBottom: "20px",
  },
};

export default StudentQuiz;