import React from "react";

import {
  Routes,
  Route,
  Navigate,
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
          STUDENT ROUTES
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


      <Route
        path="/student/lessons/:id"
        element={

          <ProtectedRoute role="student">

            <StudentNavbar />

            <StudentLessons />

            <StudentFooter />

          </ProtectedRoute>

        }
      />


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
          INSTRUCTOR ROUTES
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
      <Route
        path="/instructor/profile"
        element={
          <>
            <InstructorNavbar />
            <InstructorProfile />
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

            <h1>
              404
            </h1>

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