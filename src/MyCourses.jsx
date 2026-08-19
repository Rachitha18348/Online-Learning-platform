import React from "react";
import "./MyCourses.css";

function MyCourses() {

  const courses = [

    {
      title: "Python Full Stack",

      description:
        "Learn Python, Flask, databases and web development.",

      lessons: 12,

      students: 45,

      status: "Published",

      icon: (
        <i className="fa-brands fa-python"></i>
      )
    },


    {
      title: "Java Full Stack",

      description:
        "Learn Java, Spring Boot, databases and web development.",

      lessons: 15,

      students: 32,

      status: "Published",

      icon: (
        <i className="fa-brands fa-java"></i>
      )
    },


    {
      title: "Data Analyst",

      description:
        "Data analysis and visualization from basics to advanced.",

      lessons: 10,

      students: 28,

      status: "Draft",

      icon: (
        <i className="fa-solid fa-chart-column"></i>
      )
    },


    {
      title: "DevOps Engineering",

      description:
        "Master CI/CD, Docker, Kubernetes and cloud infrastructure.",

      lessons: 8,

      students: 15,

      status: "Draft",

      icon: (
        <i className="fa-solid fa-gears"></i>
      )
    },


    {
      title: "Cloud Computing",

      description:
        "Learn AWS, cloud services and cloud infrastructure.",

      lessons: 9,

      students: 22,

      status: "Published",

      icon: (
        <i className="fa-solid fa-cloud"></i>
      )
    }

  ];


  return (

    <div className="my-courses">


      {/* =========================
          Header
         ========================= */}

      <div className="my-courses-header">

        <div>

          <h1>
            My Courses
          </h1>

          <p>
            Manage and organize your courses
          </p>

        </div>

      </div>


      {/* =========================
          Filters
         ========================= */}

      <div className="course-filters">

        <input
          type="text"
          placeholder="🔍  Search courses..."
        />


        <select>

          <option>
            All Categories
          </option>

          <option>
            Web Development
          </option>

          <option>
            Programming
          </option>

          <option>
            Data Analysis
          </option>

          <option>
            DevOps
          </option>

          <option>
            Cloud Computing
          </option>

        </select>


        <select>

          <option>
            All Status
          </option>

          <option>
            Published
          </option>

          <option>
            Draft
          </option>

        </select>


        <select>

          <option>
            Newest First
          </option>

          <option>
            Oldest First
          </option>

        </select>

      </div>


      {/* =========================
          Course Grid
         ========================= */}

      <div className="my-course-grid">

        {courses.map((course, index) => (

          <div
            className="my-course-card"
            key={index}
          >


            {/* Icon */}

            <div className="course-card-icon">

              {course.icon}

            </div>


            {/* Title */}

            <h3>
              {course.title}
            </h3>


            {/* Description */}

            <p className="course-description">
              {course.description}
            </p>


            {/* Details */}

            <div className="course-details">

              <span>

                <i className="fa-solid fa-book-open"></i>

                {course.lessons} Lessons

              </span>


              <span>

                <i className="fa-solid fa-users"></i>

                {course.students} Students

              </span>

            </div>


            {/* Status */}

            <div
              className={`course-status ${
                course.status === "Published"
                  ? "published"
                  : "draft"
              }`}
            >

              <span className="status-dot">
                ●
              </span>

              {course.status}

            </div>


            {/* Buttons */}

            <div className="course-actions">

              <button className="view-btn">

                <i className="fa-regular fa-eye"></i>

                View

              </button>


              <button className="edit-btn">

                <i className="fa-solid fa-pen"></i>

                Edit

              </button>


              <button className="delete-btn">

                <i className="fa-solid fa-trash"></i>

                Delete

              </button>

            </div>

          </div>

        ))}

      </div>


      {/* =========================
          Pagination
         ========================= */}

      <div className="pagination">

        <button className="page-active">
          1
        </button>

        <button>
          2
        </button>

        <button>
          ›
        </button>

      </div>

    </div>
  );
}

export default MyCourses;