import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCourses } from "../Context/CourseContext";

function CreateCourse() {

  const { addCourse } = useCourses();
  const navigate = useNavigate();

  const [course, setCourse] = useState({
    title: "",
    description: "",
    instructor: "",
    email: "",
    duration: "",
    level: "",
    lessons: 0,
    topics: [],
  });

  const [topic, setTopic] = useState("");

  function handleChange(e) {
    setCourse({
      ...course,
      [e.target.name]: e.target.value,
    });
  }

  function addTopic() {

    if (topic.trim() === "") {
      return;
    }

    setCourse({
      ...course,
      topics: [...course.topics, topic],
    });

    setTopic("");
  }

  function handleSubmit(e) {
    e.preventDefault();

    addCourse(course);

    alert("Course created successfully!");

    navigate("/instructor/manage-courses");
  }

  return (
    <div style={styles.container}>

      <h1>Create Course</h1>

      <p style={styles.subtitle}>
        Create a new course for students.
      </p>

      <form
        onSubmit={handleSubmit}
        style={styles.form}
      >

        {/* Course Name */}

        <div style={styles.field}>
          <label>Course Name</label>

          <input
            type="text"
            name="title"
            value={course.title}
            onChange={handleChange}
            placeholder="Enter course name"
            style={styles.input}
            required
          />
        </div>

        {/* Description */}

        <div style={styles.field}>
          <label>Course Description</label>

          <textarea
            name="description"
            value={course.description}
            onChange={handleChange}
            placeholder="Enter course description"
            rows="4"
            style={styles.textarea}
            required
          />
        </div>

        {/* Instructor Details */}

        <div style={styles.row}>

          <div style={styles.field}>
            <label>Instructor Name</label>

            <input
              type="text"
              name="instructor"
              value={course.instructor}
              onChange={handleChange}
              placeholder="Instructor name"
              style={styles.input}
              required
            />
          </div>

          <div style={styles.field}>
            <label>Instructor Email</label>

            <input
              type="email"
              name="email"
              value={course.email}
              onChange={handleChange}
              placeholder="Instructor email"
              style={styles.input}
              required
            />
          </div>

        </div>

        {/* Duration and Level */}

        <div style={styles.row}>

          <div style={styles.field}>
            <label>Duration</label>

            <input
              type="text"
              name="duration"
              value={course.duration}
              onChange={handleChange}
              placeholder="Example: 6 Weeks"
              style={styles.input}
              required
            />
          </div>

          <div style={styles.field}>
            <label>Level</label>

            <select
              name="level"
              value={course.level}
              onChange={handleChange}
              style={styles.input}
              required
            >
              <option value="">Select Level</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">
                Intermediate
              </option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>

        </div>

        {/* Number of Lessons */}

        <div style={styles.field}>

          <label>Number of Lessons</label>

          <input
            type="number"
            name="lessons"
            value={course.lessons}
            onChange={handleChange}
            min="1"
            placeholder="Example: 10"
            style={styles.input}
            required
          />

        </div>

        {/* Course Topics */}

        <div style={styles.field}>

          <label>Course Topics</label>

          <div style={styles.topicRow}>

            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="Enter a topic"
              style={styles.input}
            />

            <button
              type="button"
              onClick={addTopic}
              style={styles.topicButton}
            >
              Add Topic
            </button>

          </div>

          <ul>

            {course.topics.map((item, index) => (
              <li key={index}>
                {item}
              </li>
            ))}

          </ul>

        </div>

        <button
          type="submit"
          style={styles.button}
        >
          Create Course
        </button>

      </form>

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

  subtitle: {
    color: "#6B7280",
    fontSize: "14px",
  },

  form: {
    maxWidth: "800px",
    backgroundColor: "#FFFFFF",
    border: "1px solid #E5E7EB",
    borderRadius: "8px",
    padding: "30px",
    marginTop: "25px",
  },

  field: {
    display: "flex",
    flexDirection: "column",
    gap: "7px",
    marginBottom: "18px",
    flex: 1,
  },

  row: {
    display: "flex",
    gap: "20px",
  },

  topicRow: {
    display: "flex",
    gap: "10px",
  },

  input: {
    padding: "10px",
    border: "1px solid #D1D5DB",
    borderRadius: "5px",
    fontSize: "14px",
    flex: 1,
  },

  textarea: {
    padding: "10px",
    border: "1px solid #D1D5DB",
    borderRadius: "5px",
    fontSize: "14px",
    resize: "vertical",
  },

  topicButton: {
    backgroundColor: "#5B21B6",
    color: "#FFFFFF",
    border: "none",
    padding: "10px 15px",
    borderRadius: "5px",
    cursor: "pointer",
  },

  button: {
    backgroundColor: "#7C3AED",
    color: "#FFFFFF",
    border: "none",
    padding: "11px 22px",
    borderRadius: "6px",
    cursor: "pointer",
    marginTop: "10px",
  },
};

export default CreateCourse;