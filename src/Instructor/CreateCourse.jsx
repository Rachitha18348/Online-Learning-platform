import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCourses } from "../Context/CourseContext";


function CreateCourse() {

  const { createCourse } =
    useCourses();

  const navigate =
    useNavigate();


  // =====================================================
  // Course State
  // =====================================================

  const [course, setCourse] =
    useState({

      title: "",
      description: "",
      duration: "",
      level: "",
      topics: "",
      lessons: [],

    });


  // =====================================================
  // Lesson State
  // =====================================================

  const [lesson, setLesson] =
    useState({

      title: "",
      description: "",
      videoUrl: "",

    });


  // =====================================================
  // Course Change
  // =====================================================

  function handleCourseChange(event) {

    const {
      name,
      value,
    } = event.target;


    setCourse(
      (previousCourse) => ({

        ...previousCourse,

        [name]: value,

      })
    );

  }


  // =====================================================
  // Lesson Change
  // =====================================================

  function handleLessonChange(event) {

    const {
      name,
      value,
    } = event.target;


    setLesson(
      (previousLesson) => ({

        ...previousLesson,

        [name]: value,

      })
    );

  }


  // =====================================================
  // Add Lesson
  // =====================================================

  function addLesson() {

    if (
      lesson.title.trim() === "" ||
      lesson.description.trim() === "" ||
      lesson.videoUrl.trim() === ""
    ) {

      alert(
        "Please fill all lesson details."
      );

      return;
    }


    const newLesson = {

      id: Date.now(),

      title:
        lesson.title.trim(),

      description:
        lesson.description.trim(),

      videoUrl:
        lesson.videoUrl.trim(),

    };


    setCourse(
      (previousCourse) => ({

        ...previousCourse,

        lessons: [

          ...previousCourse.lessons,

          newLesson,

        ],

      })
    );


    setLesson({

      title: "",
      description: "",
      videoUrl: "",

    });


    alert("Lesson added successfully.");

  }


  // =====================================================
  // Remove Lesson
  // =====================================================

  function removeLesson(lessonId) {

    setCourse(
      (previousCourse) => ({

        ...previousCourse,

        lessons:
          previousCourse.lessons.filter(
            (item) =>
              item.id !== lessonId
          ),

      })
    );

  }


  // =====================================================
  // Submit
  // =====================================================

  function handleSubmit(event) {

    event.preventDefault();


    if (
      course.lessons.length === 0
    ) {

      alert(
        "Please add at least one lesson."
      );

      return;
    }


    const createdCourse =
      createCourse(course);


    if (!createdCourse) {
      return;
    }


    alert(
      "Course created successfully!"
    );


    navigate(
      "/instructor/manage-courses"
    );

  }


  // =====================================================
  // JSX
  // =====================================================

  return (

    <div style={styles.container}>

      <div style={styles.header}>

        <h1 style={styles.title}>
          Create Course
        </h1>

        <p style={styles.subtitle}>
          Create a course and add learning
          content for students.
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
            value={course.title}
            onChange={handleCourseChange}
            placeholder="Enter course name"
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
            value={course.description}
            onChange={handleCourseChange}
            placeholder="Enter course description"
            rows="4"
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
            value={course.duration}
            onChange={handleCourseChange}
            placeholder="Example: 6 Weeks"
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
            value={course.level}
            onChange={handleCourseChange}
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
            value={course.topics}
            onChange={handleCourseChange}
            placeholder="Example: Components, Props, Hooks, Routing"
            rows="3"
            style={styles.textarea}
            required
          />

        </div>


        {/* =================================================
            LESSON SECTION
        ================================================= */}

        <div style={styles.lessonSection}>

          <h2 style={styles.lessonHeading}>
            Add Learning Content
          </h2>

          <p style={styles.lessonText}>
            Add lessons and video links
            for students.
          </p>


          {/* Lesson Title */}

          <div style={styles.formGroup}>

            <label style={styles.label}>
              Lesson Title
            </label>

            <input
              type="text"
              name="title"
              value={lesson.title}
              onChange={handleLessonChange}
              placeholder="Example: Introduction to React"
              style={styles.input}
            />

          </div>


          {/* Lesson Description */}

          <div style={styles.formGroup}>

            <label style={styles.label}>
              Lesson Description
            </label>

            <textarea
              name="description"
              value={lesson.description}
              onChange={handleLessonChange}
              placeholder="What will students learn?"
              rows="3"
              style={styles.textarea}
            />

          </div>


          {/* Video URL */}

          <div style={styles.formGroup}>

            <label style={styles.label}>
              Video URL
            </label>

            <input
              type="url"
              name="videoUrl"
              value={lesson.videoUrl}
              onChange={handleLessonChange}
              placeholder="https://www.youtube.com/..."
              style={styles.input}
            />

          </div>


          <button
            type="button"
            onClick={addLesson}
            style={styles.addLessonButton}
          >
            + Add Lesson
          </button>


          {/* Added Lessons */}

          {course.lessons.length > 0 && (

            <div style={styles.lessonList}>

              <h3>
                Added Lessons
              </h3>


              {course.lessons.map(
                (item, index) => (

                  <div
                    key={item.id}
                    style={styles.lessonCard}
                  >

                    <div
                      style={
                        styles.lessonCardHeader
                      }
                    >

                      <strong>
                        Lesson {index + 1}:{" "}
                        {item.title}
                      </strong>


                      <button
                        type="button"
                        onClick={() =>
                          removeLesson(item.id)
                        }
                        style={
                          styles.removeButton
                        }
                      >
                        Remove
                      </button>

                    </div>


                    <p>
                      {item.description}
                    </p>


                    <small>
                      {item.videoUrl}
                    </small>

                  </div>

                )
              )}

            </div>

          )}

        </div>


        {/* Create */}

        <button
          type="submit"
          style={styles.createButton}
        >
          Create Course
        </button>

      </form>

    </div>

  );

}


// =====================================================
// Styles
// =====================================================

const styles = {

  container: {
    minHeight: "70vh",
    backgroundColor: "#F9FAFB",
    padding: "40px 50px",
    fontFamily: "Arial, sans-serif",
    color: "#111827",
  },

  header: {
    maxWidth: "800px",
    margin: "0 auto 30px",
  },

  title: {
    color: "#5B21B6",
    fontSize: "30px",
  },

  subtitle: {
    color: "#6B7280",
  },

  form: {
    maxWidth: "800px",
    margin: "auto",
    backgroundColor: "#FFFFFF",
    border: "1px solid #E5E7EB",
    borderRadius: "8px",
    padding: "30px",
  },

  formGroup: {
    marginBottom: "20px",
  },

  label: {
    display: "block",
    marginBottom: "7px",
    fontWeight: "600",
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
    padding: "25px",
    backgroundColor: "#F9FAFB",
    border: "1px solid #E5E7EB",
    borderRadius: "8px",
  },

  lessonHeading: {
    color: "#5B21B6",
  },

  lessonText: {
    color: "#6B7280",
  },

  addLessonButton: {
    backgroundColor: "#EDE9FE",
    color: "#5B21B6",
    border: "1px solid #C4B5FD",
    padding: "10px 16px",
    borderRadius: "6px",
    cursor: "pointer",
  },

  lessonList: {
    marginTop: "25px",
  },

  lessonCard: {
    backgroundColor: "#FFFFFF",
    border: "1px solid #E5E7EB",
    borderRadius: "6px",
    padding: "15px",
    marginTop: "10px",
  },

  lessonCardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  removeButton: {
    backgroundColor: "#FEE2E2",
    color: "#B91C1C",
    border: "none",
    padding: "6px 10px",
    borderRadius: "5px",
    cursor: "pointer",
  },

  createButton: {
    marginTop: "30px",
    backgroundColor: "#7C3AED",
    color: "#FFFFFF",
    border: "none",
    padding: "12px 22px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "15px",
  },

};

export default CreateCourse;