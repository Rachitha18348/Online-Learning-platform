import React, {
  useEffect,
  useState,
} from "react";

import { Link } from "react-router-dom";

import { useCourses } from "../Context/CourseContext";


function StudentMyCourses() {

  const {
    getMyEnrolledCourses,
  } = useCourses();


  const [search, setSearch] =
    useState("");

  const [debouncedSearch, setDebouncedSearch] =
    useState("");


  // =====================================================
  // Debouncing
  // =====================================================

  useEffect(() => {

    const timer =
      setTimeout(() => {

        setDebouncedSearch(search);

      }, 500);


    return () => {

      clearTimeout(timer);

    };

  }, [search]);


  // =====================================================
  // Get Student Courses
  // =====================================================

  const myCourses =
    getMyEnrolledCourses();


  // =====================================================
  // Search
  // =====================================================

  const filteredCourses =
    myCourses.filter((course) => {

      const searchText =
        debouncedSearch
          .toLowerCase()
          .trim();


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
        My Courses
      </h1>


      <p style={styles.subtitle}>
        Courses you have enrolled in are displayed here.
      </p>


      {/* Search */}

      <div style={styles.searchContainer}>

        <input
          type="text"
          placeholder="Search my courses..."
          value={search}
          onChange={(event) =>
            setSearch(event.target.value)
          }
          style={styles.searchInput}
        />

      </div>


      {/* No Courses */}

      {myCourses.length === 0 ? (

        <div style={styles.emptyCard}>

          <h2>
            No Courses Yet
          </h2>

          <p>
            Explore available courses and
            enroll in a course to start learning.
          </p>


          <Link
            to="/student/courses"
            style={styles.exploreButton}
          >
            Explore Courses
          </Link>

        </div>

      ) : filteredCourses.length === 0 ? (

        <div style={styles.emptyCard}>

          <h2>
            Search Not Found
          </h2>

          <p>
            No enrolled courses match your search.
          </p>

          <button
            onClick={() => setSearch("")}
            style={styles.clearButton}
          >
            Clear Search
          </button>

        </div>

      ) : (

        <div style={styles.grid}>

          {filteredCourses.map(
            (course) => (

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


                <div style={styles.info}>

                  <p>
                    <strong>
                      Instructor:
                    </strong>{" "}
                    {course.instructor}
                  </p>

                  <p>
                    <strong>
                      Duration:
                    </strong>{" "}
                    {course.duration}
                  </p>

                  <p>
                    <strong>
                      Level:
                    </strong>{" "}
                    {course.level}
                  </p>

                  <p>
                    <strong>
                      Lessons:
                    </strong>{" "}
                    {course.lessons?.length || 0}
                  </p>

                </div>


                <Link
                  to={`/student/lessons/${course.id}`}
                  style={styles.startButton}
                >
                  Start Learning
                </Link>

              </div>

            )
          )}

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
  },

  searchContainer: {
    width: "100%",
    maxWidth: "500px",
    marginBottom: "30px",
  },

  searchInput: {
    width: "100%",
    boxSizing: "border-box",
    padding: "12px 15px",
    border: "1px solid #D1D5DB",
    borderRadius: "8px",
    fontSize: "15px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(3, 1fr)",
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

  info: {
    color: "#4B5563",
    fontSize: "14px",
    marginTop: "15px",
    marginBottom: "20px",
  },

  startButton: {
    display: "inline-block",
    backgroundColor: "#7C3AED",
    color: "#FFFFFF",
    textDecoration: "none",
    padding: "10px 16px",
    borderRadius: "6px",
  },

  emptyCard: {
    maxWidth: "600px",
    margin: "50px auto",
    padding: "40px",
    backgroundColor: "#FFFFFF",
    textAlign: "center",
    borderRadius: "8px",
  },

  exploreButton: {
    display: "inline-block",
    backgroundColor: "#7C3AED",
    color: "#FFFFFF",
    textDecoration: "none",
    padding: "10px 18px",
    borderRadius: "6px",
  },

  clearButton: {
    backgroundColor: "#7C3AED",
    color: "#FFFFFF",
    border: "none",
    padding: "10px 18px",
    borderRadius: "6px",
    cursor: "pointer",
  },

};

export default StudentMyCourses;