import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCourses } from "../Context/CourseContext";

function StudentCourses() {

  const {
    courses,
    enrollCourse,
  } = useCourses();


  const [search, setSearch] = useState("");

  const [debouncedSearch, setDebouncedSearch] =
    useState("");


  // =========================
  // Debouncing
  // =========================

  useEffect(() => {

    const timer = setTimeout(() => {

      setDebouncedSearch(search);

    }, 500);


    return () => {

      clearTimeout(timer);

    };

  }, [search]);


  // =========================
  // Filter Courses
  // =========================

  const filteredCourses = courses.filter((course) => {

    const searchText =
      debouncedSearch.toLowerCase().trim();


    return (

      course.title
        ?.toLowerCase()
        .includes(searchText)

      ||

      course.description
        ?.toLowerCase()
        .includes(searchText)

      ||

      course.instructor
        ?.toLowerCase()
        .includes(searchText)

      ||

      course.level
        ?.toLowerCase()
        .includes(searchText)

      ||

      course.topics
        ?.toLowerCase()
        .includes(searchText)

    );

  });


  return (

    <div style={styles.container}>


      <h1 style={styles.title}>
        Available Courses
      </h1>


      <p style={styles.subtitle}>
        Explore courses created by our instructors.
      </p>


      {/* =========================
          Search
      ========================= */}

      <div style={styles.searchContainer}>

        <input
          type="text"
          placeholder="Search courses..."
          value={search}
          onChange={(event) =>
            setSearch(event.target.value)
          }
          style={styles.searchInput}
        />

      </div>


      {/* =========================
          No Courses Available
      ========================= */}

      {courses.length === 0 ? (

        <div style={styles.emptyCard}>

          <h2>
            No Courses Available
          </h2>

          <p>
            Courses will appear here when instructors create them.
          </p>

        </div>


      ) : filteredCourses.length === 0 ? (

        /* =========================
           Search Not Found
        ========================= */

        <div style={styles.emptyCard}>

          <h2>
            Search Not Found
          </h2>

          <p>
            No courses match your search.
          </p>

          <button
            onClick={() => setSearch("")}
            style={styles.clearButton}
          >
            Clear Search
          </button>

        </div>


      ) : (

        /* =========================
           Display Courses
        ========================= */

        <div style={styles.grid}>

          {filteredCourses.map((course) => (

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


              <div style={styles.buttons}>

                <Link
                  to={`/student/course-details/${course.id}`}
                  style={styles.detailsButton}
                >
                  View Details
                </Link>


                <button
                  onClick={() => {

                    enrollCourse(course);

                    alert(
                      "Course enrolled successfully!"
                    );

                  }}
                  style={styles.enrollButton}
                >
                  Enroll
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


  title: {
    color: "#5B21B6",
    fontSize: "30px",
  },


  subtitle: {
    color: "#6B7280",
    marginBottom: "20px",
  },


  searchContainer: {
    marginBottom: "30px",
    maxWidth: "500px",
  },


  searchInput: {
    width: "100%",
    boxSizing: "border-box",
    padding: "12px 15px",
    border: "1px solid #D1D5DB",
    borderRadius: "8px",
    fontSize: "15px",
    outline: "none",
  },


  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
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


  buttons: {
    display: "flex",
    gap: "10px",
    marginTop: "20px",
  },


  detailsButton: {
    backgroundColor: "#EDE9FE",
    color: "#5B21B6",
    padding: "9px 14px",
    borderRadius: "6px",
    textDecoration: "none",
  },


  enrollButton: {
    backgroundColor: "#7C3AED",
    color: "#FFFFFF",
    border: "none",
    padding: "9px 14px",
    borderRadius: "6px",
    cursor: "pointer",
  },


  emptyCard: {
    textAlign: "center",
    backgroundColor: "#FFFFFF",
    padding: "40px",
    borderRadius: "8px",
  },


  clearButton: {
    marginTop: "15px",
    backgroundColor: "#7C3AED",
    color: "#FFFFFF",
    border: "none",
    padding: "10px 18px",
    borderRadius: "6px",
    cursor: "pointer",
  },

};


export default StudentCourses;