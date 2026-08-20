import React from "react";

import {
  Routes,
  Route,
  Link,
} from "react-router-dom";

// =========================
// Authentication
// =========================

import RoleSelection from "./Auth/RoleSelection";
import StudentLogin from "./Auth/StudentLogin";
import InstructorLogin from "./Auth/InstructorLogin";

import ProtectedRoute from "./ProtectedRoute";

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
import EditCourse from "./Instructor/EditCourse";
import InstructorProfile from "./Instructor/InstructorProfile";


function App() {
  return (
    <Routes>

      {/* =========================
          ROLE SELECTION
      ========================= */}

      <Route
        path="/"
        element={<RoleSelection />}
      />


      {/* =========================
          LOGIN
      ========================= */}

      <Route
        path="/student/login"
        element={<StudentLogin />}
      />

      <Route
        path="/instructor/login"
        element={<InstructorLogin />}
      />


      {/* =========================
          STUDENT DASHBOARD
      ========================= */}

      <Route
        path="/student/dashboard"
        element={
          <ProtectedRoute role="student">
            <StudentNavbar />
            <StudentDashboard />
            <StudentFooter />
          </ProtectedRoute>
        }
      />


      {/* =========================
          AVAILABLE COURSES
      ========================= */}

      <Route
        path="/student/courses"
        element={
          <ProtectedRoute role="student">
            <StudentNavbar />
            <StudentCourses />
            <StudentFooter />
          </ProtectedRoute>
        }
      />


      {/* =========================
          COURSE DETAILS
      ========================= */}

      <Route
        path="/student/course-details/:id"
        element={
          <ProtectedRoute role="student">
            <StudentNavbar />
            <StudentCourseDetails />
            <StudentFooter />
          </ProtectedRoute>
        }
      />


      {/* =========================
          MY COURSES
      ========================= */}

      <Route
        path="/student/my-courses"
        element={
          <ProtectedRoute role="student">
            <StudentNavbar />
            <StudentMyCourses />
            <StudentFooter />
          </ProtectedRoute>
        }
      />


      {/* =========================
          STUDENT LESSONS
          IMPORTANT:
          Parameter is courseId
      ========================= */}

      <Route
        path="/student/lessons/:courseId"
        element={
          <ProtectedRoute role="student">
            <StudentNavbar />
            <StudentLessons />
            <StudentFooter />
          </ProtectedRoute>
        }
      />


      {/* =========================
          STUDENT QUIZ
      ========================= */}

      <Route
        path="/student/quiz/:id"
        element={
          <ProtectedRoute role="student">
            <StudentNavbar />
            <StudentQuiz />
            <StudentFooter />
          </ProtectedRoute>
        }
      />


      {/* =========================
          STUDENT PROFILE
      ========================= */}

      <Route
        path="/student/profile"
        element={
          <ProtectedRoute role="student">
            <StudentNavbar />
            <StudentProfile />
            <StudentFooter />
          </ProtectedRoute>
        }
      />


      {/* =========================
          INSTRUCTOR DASHBOARD
      ========================= */}

      <Route
        path="/instructor/dashboard"
        element={
          <ProtectedRoute role="instructor">
            <InstructorNavbar />
            <InstructorDashboard />
            <InstructorFooter />
          </ProtectedRoute>
        }
      />


      {/* =========================
          CREATE COURSE
      ========================= */}

      <Route
        path="/instructor/create-course"
        element={
          <ProtectedRoute role="instructor">
            <InstructorNavbar />
            <CreateCourse />
            <InstructorFooter />
          </ProtectedRoute>
        }
      />


      {/* =========================
          MANAGE COURSES
      ========================= */}

      <Route
        path="/instructor/manage-courses"
        element={
          <ProtectedRoute role="instructor">
            <InstructorNavbar />
            <ManageCourses />
            <InstructorFooter />
          </ProtectedRoute>
        }
      />


      {/* =========================
          EDIT COURSE
      ========================= */}

      <Route
        path="/instructor/edit-course/:id"
        element={
          <ProtectedRoute role="instructor">
            <InstructorNavbar />
            <EditCourse />
            <InstructorFooter />
          </ProtectedRoute>
        }
      />


      {/* =========================
          MANAGE STUDENTS
      ========================= */}

      <Route
        path="/instructor/students"
        element={
          <ProtectedRoute role="instructor">
            <InstructorNavbar />
            <ManageStudents />
            <InstructorFooter />
          </ProtectedRoute>
        }
      />


      {/* =========================
          INSTRUCTOR PROFILE
      ========================= */}

      <Route
        path="/instructor/profile"
        element={
          <ProtectedRoute role="instructor">
            <InstructorNavbar />
            <InstructorProfile />
            <InstructorFooter />
          </ProtectedRoute>
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
              minHeight: "70vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              fontFamily: "Arial, sans-serif",
              backgroundColor: "#F9FAFB",
            }}
          >

            <h1
              style={{
                fontSize: "60px",
                color: "#5B21B6",
                marginBottom: "10px",
              }}
            >
              404
            </h1>

            <h2
              style={{
                color: "#111827",
                marginBottom: "10px",
              }}
            >
              Page Not Found
            </h2>

            <p
              style={{
                color: "#6B7280",
                marginBottom: "25px",
              }}
            >
              The page you are looking for does not exist.
            </p>

            <Link
              to="/"
              style={{
                backgroundColor: "#7C3AED",
                color: "#FFFFFF",
                padding: "11px 20px",
                borderRadius: "6px",
                textDecoration: "none",
                fontSize: "14px",
              }}
            >
              Return to Home
            </Link>

          </div>
        }
      />

    </Routes>
  );
}

export default App;