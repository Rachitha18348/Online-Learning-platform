import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCourses } from "../Context/CourseContext";

function EditCourse() {

  const { id } = useParams();

  const navigate = useNavigate();

  const {
    courses,
    updateCourse,
  } = useCourses();


  const course = courses.find(
    (item) => item.id === Number(id)
  );


  const [formData, setFormData] = useState(
    course || {
      title: "",
      description: "",
      duration: "",
      instructor: "",
      email: "",
      level: "",
      topics: "",
      lessons: [],
    }
  );


  if (!course) {

    return (
      <div style={styles.notFound}>

        <h2>Course Not Found</h2>

        <button
          onClick={() =>
            navigate("/instructor/manage-courses")
          }
          style={styles.backButton}
        >
          Back to Manage Courses
        </button>

      </div>
    );

  }


  function handleChange(event) {

    const {
      name,
      value,
    } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });

  }


  function handleSubmit(event) {

    event.preventDefault();

    updateCourse(formData);

    alert("Course updated successfully!");

    navigate("/instructor/manage-courses");

  }


  return (

    <div style={styles.container}>

      <div style={styles.header}>

        <h1 style={styles.title}>
          Edit Course
        </h1>

        <p style={styles.subtitle}>
          Update your course information.
        </p>

      </div>


      <form
        onSubmit={handleSubmit}
        style={styles.form}
      >

        {/* Course Name */}

        <div style={styles.formGroup}>

          <label style={styles.label}>
            Course Name
          </label>

          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            style={styles.input}
            required
          />

        </div>


        {/* Description */}

        <div style={styles.formGroup}>

          <label style={styles.label}>
            Course Description
          </label>

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="5"
            style={styles.textarea}
            required
          />

        </div>


        {/* Duration */}

        <div style={styles.formGroup}>

          <label style={styles.label}>
            Duration
          </label>

          <input
            type="text"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            style={styles.input}
            required
          />

        </div>


        {/* Instructor */}

        <div style={styles.formGroup}>

          <label style={styles.label}>
            Instructor Name
          </label>

          <input
            type="text"
            name="instructor"
            value={formData.instructor}
            onChange={handleChange}
            style={styles.input}
            required
          />

        </div>


        {/* Email */}

        <div style={styles.formGroup}>

          <label style={styles.label}>
            Instructor Email
          </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />

        </div>


        {/* Level */}

        <div style={styles.formGroup}>

          <label style={styles.label}>
            Course Level
          </label>

          <select
            name="level"
            value={formData.level}
            onChange={handleChange}
            style={styles.input}
            required
          >

            <option value="">
              Select Level
            </option>

            <option value="Beginner">
              Beginner
            </option>

            <option value="Intermediate">
              Intermediate
            </option>

            <option value="Advanced">
              Advanced
            </option>

          </select>

        </div>


        {/* Topics */}

        <div style={styles.formGroup}>

          <label style={styles.label}>
            Topics
          </label>

          <textarea
            name="topics"
            value={formData.topics}
            onChange={handleChange}
            rows="3"
            style={styles.textarea}
            required
          />

        </div>


        {/* Lessons */}

        <div style={styles.lessonSection}>

          <h2>
            Course Lessons
          </h2>

          {formData.lessons &&
          formData.lessons.length > 0 ? (

            formData.lessons.map(
              (lesson, index) => (

                <div
                  key={index}
                  style={styles.lessonCard}
                >

                  <strong>
                    Lesson {index + 1}
                  </strong>

                  <p>
                    {lesson.title}
                  </p>

                  <p style={styles.lessonDescription}>
                    {lesson.description}
                  </p>

                </div>

              )

            )

          ) : (

            <p>
              No lessons added.
            </p>

          )}

        </div>


        {/* Buttons */}

        <div style={styles.buttons}>

          <button
            type="button"
            onClick={() =>
              navigate("/instructor/manage-courses")
            }
            style={styles.cancelButton}
          >
            Cancel
          </button>


          <button
            type="submit"
            style={styles.saveButton}
          >
            Save Changes
          </button>

        </div>

      </form>

    </div>

  );

}


const styles = {

  container: {
    minHeight: "70vh",
    backgroundColor: "#F9FAFB",
    padding: "40px 50px",
    fontFamily: "Arial, sans-serif",
  },

  header: {
    maxWidth: "800px",
    margin: "0 auto 25px",
  },

  title: {
    color: "#5B21B6",
    fontSize: "30px",
    marginBottom: "8px",
  },

  subtitle: {
    color: "#6B7280",
  },

  form: {
    maxWidth: "800px",
    margin: "auto",
    backgroundColor: "#FFFFFF",
    padding: "30px",
    borderRadius: "8px",
    border: "1px solid #E5E7EB",
  },

  formGroup: {
    marginBottom: "20px",
  },

  label: {
    display: "block",
    marginBottom: "7px",
    fontWeight: "600",
    fontSize: "14px",
  },

  input: {
    width: "100%",
    boxSizing: "border-box",
    padding: "11px",
    border: "1px solid #D1D5DB",
    borderRadius: "6px",
    fontSize: "14px",
  },

  textarea: {
    width: "100%",
    boxSizing: "border-box",
    padding: "11px",
    border: "1px solid #D1D5DB",
    borderRadius: "6px",
    fontSize: "14px",
    resize: "vertical",
    fontFamily: "Arial, sans-serif",
  },

  lessonSection: {
    marginTop: "30px",
    padding: "20px",
    backgroundColor: "#F9FAFB",
    borderRadius: "8px",
    border: "1px solid #E5E7EB",
  },

  lessonCard: {
    backgroundColor: "#FFFFFF",
    padding: "15px",
    marginTop: "10px",
    borderRadius: "6px",
    border: "1px solid #E5E7EB",
  },

  lessonDescription: {
    color: "#6B7280",
    fontSize: "14px",
  },

  buttons: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "10px",
    marginTop: "30px",
  },

  cancelButton: {
    backgroundColor: "#E5E7EB",
    color: "#111827",
    border: "none",
    padding: "11px 20px",
    borderRadius: "6px",
    cursor: "pointer",
  },

  saveButton: {
    backgroundColor: "#7C3AED",
    color: "#FFFFFF",
    border: "none",
    padding: "11px 20px",
    borderRadius: "6px",
    cursor: "pointer",
  },

  backButton: {
    backgroundColor: "#7C3AED",
    color: "#FFFFFF",
    border: "none",
    padding: "10px 18px",
    borderRadius: "6px",
    cursor: "pointer",
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

export default EditCourse;