import React from "react";

import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// =========================
// Student Components
// =========================

import StudentNavbar from "./components/StudentNavbar";
import StudentFooter from "./components/StudentFooter";

// =========================
// Instructor Components
// =========================

import InstructorNavbar from "./Instructor/InstructorNavbar";
import InstructorFooter from "./Instructor/InstructorFooter";

// =========================
// Student Pages
// =========================

import StudentDashboard from "./Student/StudentDashboard";
import StudentCourses from "./Student/StudentCourses";
import StudentCourseDetails from "./Student/StudentCourseDetails";
import StudentMyCourses from "./Student/StudentMyCourses";
import StudentLessons from "./Student/StudentLessons";
import StudentQuiz from "./Student/StudentQuiz";
import StudentProfile from "./Student/StudentProfile";

// =========================
// Instructor Pages
// =========================

import InstructorDashboard from "./Instructor/InstructorDashboard";
import CreateCourse from "./Instructor/CreateCourse";
import ManageCourses from "./Instructor/ManageCourses";
import ManageStudents from "./Instructor/ManageStudents";


// =========================
// App
// =========================

function App() {

  return (

    <Routes>

      {/* =========================
          DEFAULT ROUTE
      ========================= */}

      <Route
        path="/"
        element={
          <Navigate
            to="/student/dashboard"
            replace
          />
        }
      />


      {/* =========================
          STUDENT ROUTES
      ========================= */}

      <Route
        path="/student/dashboard"
        element={
          <>
            <StudentNavbar />
            <StudentDashboard />
            <StudentFooter />
          </>
        }
      />


      <Route
        path="/student/courses"
        element={
          <>
            <StudentNavbar />
            <StudentCourses />
            <StudentFooter />
          </>
        }
      />


      <Route
        path="/student/course-details/:id"
        element={
          <>
            <StudentNavbar />
            <StudentCourseDetails />
            <StudentFooter />
          </>
        }
      />


      <Route
        path="/student/my-courses"
        element={
          <>
            <StudentNavbar />
            <StudentMyCourses />
            <StudentFooter />
          </>
        }
      />


      <Route
        path="/student/lessons/:id"
        element={
          <>
            <StudentNavbar />
            <StudentLessons />
            <StudentFooter />
          </>
        }
      />


      <Route
        path="/student/quiz/:id"
        element={
          <>
            <StudentNavbar />
            <StudentQuiz />
            <StudentFooter />
          </>
        }
      />


      <Route
        path="/student/profile"
        element={
          <>
            <StudentNavbar />
            <StudentProfile />
            <StudentFooter />
          </>
        }
      />


      {/* =========================
          INSTRUCTOR ROUTES
      ========================= */}

      <Route
        path="/instructor/dashboard"
        element={
          <>
            <InstructorNavbar />
            <InstructorDashboard />
            <InstructorFooter />
          </>
        }
      />


      <Route
        path="/instructor/create-course"
        element={
          <>
            <InstructorNavbar />
            <CreateCourse />
            <InstructorFooter />
          </>
        }
      />


      <Route
        path="/instructor/manage-courses"
        element={
          <>
            <InstructorNavbar />
            <ManageCourses />
            <InstructorFooter />
          </>
        }
      />


      <Route
        path="/instructor/students"
        element={
          <>
            <InstructorNavbar />
            <ManageStudents />
            <InstructorFooter />
          </>
        }
      />


      {/* =========================
          PAGE NOT FOUND
      ========================= */}

      <Route
        path="*"
        element={
          <div
            style={{
              padding: "50px",
              textAlign: "center",
              fontFamily: "Arial",
            }}
          >
            <h1>404</h1>

            <p>
              Page not found.
            </p>
          </div>
        }
      />

    </Routes>

  );
}

export default App;