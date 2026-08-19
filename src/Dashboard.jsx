import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard({ search = "" }) {

  const navigate = useNavigate();

  const courses = [
    {
      title: "Python Full Stack",
      category: "Web Development",
      students: 45,
      lessons: 12,
      progress: 78,
      status: "Published",
      date: "10 Aug 2026",
      icon: <i className="fa-brands fa-python"></i>,
      iconClass: "python"
    },

    {
      title: "Java Full Stack",
      category: "Web Development",
      students: 32,
      lessons: 15,
      progress: 65,
      status: "Published",
      date: "5 Aug 2026",
      icon: <i className="fa-brands fa-java"></i>,
      iconClass: "java"
    },

    {
      title: "Data Analyst",
      category: "Data Analysis",
      students: 28,
      lessons: 10,
      progress: 90,
      status: "Published",
      date: "2 Aug 2026",
      icon: <i className="fa-solid fa-chart-column"></i>,
      iconClass: "analyst"
    },

    {
      title: "DevOps Engineering",
      category: "DevOps",
      students: 15,
      lessons: 8,
      progress: 40,
      status: "Draft",
      date: "26 July 2026",
      icon: <i className="fa-solid fa-gears"></i>,
      iconClass: "devops"
    },

    {
      title: "Cloud Computing",
      category: "Cloud",
      students: 22,
      lessons: 9,
      progress: 60,
      status: "Draft",
      date: "20 July 2026",
      icon: <i className="fa-solid fa-cloud"></i>,
      iconClass: "cloud"
    }
  ];


  /* =========================
     Search Filter
  ========================= */

  const filteredCourses = courses.filter((course) =>
    course.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );


  return (
    <div className="dashboard">

      {/* =========================
          Welcome
      ========================= */}

      <div className="welcome-section mb-4">

        <div>

          <h1 className="welcome-title">
            Welcome back, Instructor 👋
          </h1>

          <p className="welcome-text">
            Here's what's happening with your courses today.
          </p>

        </div>

      </div>


      {/* =========================
          Summary Cards
      ========================= */}

      <div className="row g-4">


        {/* Total Courses */}

        <div className="col-md-6 col-lg-3">

          <div className="card dashboard-card">

            <div className="card-body">

              <div className="card-icon">
                <i className="fa-solid fa-book"></i>
              </div>

              <div>

                <h2 className="card-number">
                  5
                </h2>

                <p className="card-label">
                  Total Courses
                </p>

              </div>

            </div>

          </div>

        </div>


        {/* Total Students */}

        <div className="col-md-6 col-lg-3">

          <div className="card dashboard-card">

            <div className="card-body">

              <div className="card-icon">
                <i className="fa-solid fa-users"></i>
              </div>

              <div>

                <h2 className="card-number">
                  120
                </h2>

                <p className="card-label">
                  Total Students
                </p>

              </div>

            </div>

          </div>

        </div>


        {/* Total Lessons */}

        <div className="col-md-6 col-lg-3">

          <div className="card dashboard-card">

            <div className="card-body">

              <div className="card-icon">
                <i className="fa-solid fa-book-open"></i>
              </div>

              <div>

                <h2 className="card-number">
                  45
                </h2>

                <p className="card-label">
                  Total Lessons
                </p>

              </div>

            </div>

          </div>

        </div>


        {/* Average Progress */}

        <div className="col-md-6 col-lg-3">

          <div className="card dashboard-card">

            <div className="card-body">

              <div className="card-icon">
                <i className="fa-solid fa-chart-line"></i>
              </div>

              <div>

                <h2 className="card-number">
                  72%
                </h2>

                <p className="card-label">
                  Average Progress
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* =========================
          Course Overview
      ========================= */}

      <div className="course-overview">


        {/* Header */}

        <div className="course-header">

          <h2>
            Course Overview
          </h2>


          <button
            className="view-courses-btn"
            onClick={() => navigate("/mycourses")}
          >
            View All Courses →
          </button>

        </div>


        {/* Table */}

        <div className="table-responsive">

          <table className="table course-table">


            {/* Table Header */}

            <thead>

              <tr>

                <th>
                  Course Name
                </th>

                <th>
                  Students
                </th>

                <th>
                  Lessons
                </th>

                <th>
                  Progress
                </th>

                <th>
                  Status
                </th>

                <th>
                  Last Updated
                </th>

              </tr>

            </thead>


            {/* Table Body */}

            <tbody>

              {filteredCourses.length > 0 ? (

                filteredCourses.map((course, index) => (

                  <tr key={index}>


                    {/* Course Name */}

                    <td>

                      <div className="course-name">

                        <div
                          className={`course-image ${course.iconClass}`}
                        >
                          {course.icon}
                        </div>


                        <div>

                          <strong>
                            {course.title}
                          </strong>

                          <small>
                            {course.category}
                          </small>

                        </div>

                      </div>

                    </td>


                    {/* Students */}

                    <td>
                      {course.students}
                    </td>


                    {/* Lessons */}

                    <td>
                      {course.lessons}
                    </td>


                    {/* Progress */}

                    <td>

                      <div className="progress-info">

                        <span>
                          {course.progress}%
                        </span>


                        <div className="progress">

                          <div
                            className="progress-bar"
                            style={{
                              width: `${course.progress}%`
                            }}
                          >
                          </div>

                        </div>

                      </div>

                    </td>


                    {/* Status */}

                    <td>

                      <span
                        className={`status ${
                          course.status === "Published"
                            ? "published"
                            : "draft"
                        }`}
                      >
                        {course.status}
                      </span>

                    </td>


                    {/* Date */}

                    <td>
                      {course.date}
                    </td>

                  </tr>

                ))

              ) : (

                /* No Search Result */

                <tr>

                  <td
                    colSpan="6"
                    className="course-not-found"
                  >
                    Course Not Found
                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;