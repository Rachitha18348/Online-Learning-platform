import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import StudentNavbar from "./components/StudentNavbar";
import StudentFooter from "./components/StudentFooter";

import StudentDashboard from "./student/StudentDashboard";
import StudentCourses from "./student/StudentCourses";
import StudentCourseDetails from "./student/StudentCourseDetails";
import StudentMyCourses from "./student/StudentMyCourses";
import StudentLessons from "./student/StudentLessons";
import StudentQuiz from "./student/StudentQuiz";
import StudentProfile from "./student/StudentProfile";

function App() {
  return (
    <BrowserRouter>

      <StudentNavbar />

      <Routes>

        <Route
          path="/student/dashboard"
          element={<StudentDashboard />}
        />

        <Route
          path="/student/courses"
          element={<StudentCourses />}
        />

        <Route
          path="/student/course-details"
          element={<StudentCourseDetails />}
        />

        <Route
          path="/student/my-courses"
          element={<StudentMyCourses />}
        />

        <Route
          path="/student/lessons"
          element={<StudentLessons />}
        />

        <Route
          path="/student/quiz"
          element={<StudentQuiz />}
        />

        <Route
          path="/student/profile"
          element={<StudentProfile />}
        />

      </Routes>

      <StudentFooter />

    </BrowserRouter>
  );
}

export default App;