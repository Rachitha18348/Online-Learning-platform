import React, { createContext, useContext, useState } from "react";

const CourseContext = createContext();

export function CourseProvider({ children }) {

  const [courses, setCourses] = useState([]);

  const [enrolledCourses, setEnrolledCourses] = useState([]);


  // Instructor creates a course
  function addCourse(course) {

    const newCourse = {
      ...course,
      id: Date.now(),
    };

    setCourses((previousCourses) => [
      ...previousCourses,
      newCourse,
    ]);
  }


  // Student enrolls in a course
  function enrollCourse(course) {

    const alreadyEnrolled = enrolledCourses.some(
      (item) => item.id === course.id
    );

    if (alreadyEnrolled) {
      return false;
    }

    setEnrolledCourses((previousCourses) => [
      ...previousCourses,
      course,
    ]);

    return true;
  }


  return (
    <CourseContext.Provider
      value={{
        courses,
        enrolledCourses,
        addCourse,
        enrollCourse,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
}


export function useCourses() {
  return useContext(CourseContext);
}