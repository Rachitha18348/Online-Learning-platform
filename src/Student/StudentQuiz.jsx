import React, { useState } from "react";

function StudentQuiz() {
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
      question: "Which hook is used to manage state in React?",
      options: [
        "useEffect",
        "useState",
        "useContext",
        "useRef",
      ],
      answer: "useState",
    },
    {
      question: "Which language is mainly used with React?",
      options: [
        "Python",
        "Java",
        "JavaScript",
        "C",
      ],
      answer: "JavaScript",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  function handleAnswer(option) {
    setSelectedAnswer(option);
  }

  function handleNext() {
    if (selectedAnswer === "") {
      alert("Please select an answer.");
      return;
    }

    if (
      selectedAnswer ===
      questions[currentQuestion].answer
    ) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
    } else {
      setQuizCompleted(true);
    }
  }

  function restartQuiz() {
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setScore(0);
    setQuizCompleted(false);
  }

  if (quizCompleted) {
    return (
      <div style={styles.container}>
        <div style={styles.resultCard}>
          <h1>Quiz Completed!</h1>

          <p style={styles.score}>
            Your Score: {score} / {questions.length}
          </p>

          <p style={styles.message}>
            {score === questions.length
              ? "Excellent! You answered all questions correctly."
              : "Good effort! Keep learning and try again."}
          </p>

          <button
            onClick={restartQuiz}
            style={styles.button}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div style={styles.container}>

      <div style={styles.quizCard}>

        <div style={styles.header}>
          <h1>React JS Quiz</h1>

          <span>
            Question {currentQuestion + 1} of{" "}
            {questions.length}
          </span>
        </div>

        <h2 style={styles.question}>
          {question.question}
        </h2>

        <div>
          {question.options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleAnswer(option)}
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
              {option}
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          style={styles.button}
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
  },

  quizCard: {
    maxWidth: "700px",
    margin: "0 auto",
    backgroundColor: "#FFFFFF",
    border: "1px solid #E5E7EB",
    borderRadius: "8px",
    padding: "30px",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#111827",
  },

  question: {
    fontSize: "20px",
    margin: "30px 0 20px",
  },

  option: {
    padding: "14px",
    border: "1px solid #E5E7EB",
    borderRadius: "6px",
    marginBottom: "12px",
    cursor: "pointer",
    fontSize: "14px",
  },

  button: {
    marginTop: "20px",
    backgroundColor: "#7C3AED",
    color: "#FFFFFF",
    border: "none",
    padding: "10px 20px",
    borderRadius: "6px",
    cursor: "pointer",
  },

  resultCard: {
    maxWidth: "500px",
    margin: "80px auto",
    padding: "35px",
    textAlign: "center",
    backgroundColor: "#FFFFFF",
    border: "1px solid #E5E7EB",
    borderRadius: "8px",
  },

  score: {
    color: "#5B21B6",
    fontSize: "24px",
    fontWeight: "bold",
  },

  message: {
    color: "#6B7280",
    lineHeight: "1.6",
  },
};

export default StudentQuiz;