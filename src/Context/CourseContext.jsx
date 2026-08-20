import React, {
  createContext,
  useContext,
  useState,
} from "react";


const CourseContext = createContext();


function getStoredCourses() {

  const storedCourses =
    localStorage.getItem("courses");

  if (storedCourses) {

    try {

      return JSON.parse(storedCourses);

    } catch (error) {

      console.log(
        "Error reading courses:",
        error
      );

    }

  }


  return [];

}


function getStoredEnrollments() {

  const storedEnrollments =
    localStorage.getItem(
      "enrolledCourses"
    );

  if (storedEnrollments) {

    try {

      return JSON.parse(
        storedEnrollments
      );

    } catch (error) {

      console.log(
        "Error reading enrolled courses:",
        error
      );

    }

  }


  return [];

}


export function CourseProvider({
  children,
}) {

  const [courses, setCourses] =
    useState(getStoredCourses);


  const [enrolledCourses, setEnrolledCourses] =
    useState(getStoredEnrollments);


  // =========================
  // Create Course
  // =========================

  function createCourse(courseData) {

    const newCourse = {

      id: Date.now(),

      title:
        courseData.title || "Untitled Course",

      description:
        courseData.description || "",

      instructor:
        courseData.instructor || "Instructor",

      duration:
        courseData.duration || "",

      level:
        courseData.level || "",

      category:
        courseData.category || "",

    };


    const updatedCourses = [

      ...courses,

      newCourse,

    ];


    setCourses(updatedCourses);


    localStorage.setItem(

      "courses",

      JSON.stringify(
        updatedCourses
      )

    );


    return newCourse;

  }


  // =========================
  // Update Course
  // =========================

  function updateCourse(
    id,
    updatedData
  ) {

    const updatedCourses =
      courses.map((course) => {

        if (
          String(course.id) ===
          String(id)
        ) {

          return {

            ...course,

            ...updatedData,

          };

        }


        return course;

      });


    setCourses(updatedCourses);


    localStorage.setItem(

      "courses",

      JSON.stringify(
        updatedCourses
      )

    );

  }


  // =========================
  // Delete Course
  // =========================

  function deleteCourse(id) {

    const updatedCourses =
      courses.filter(

        (course) =>
          String(course.id) !==
          String(id)

      );


    setCourses(updatedCourses);


    localStorage.setItem(

      "courses",

      JSON.stringify(
        updatedCourses
      )

    );


    // Also remove the course
    // from enrolled courses

    const updatedEnrollments =
      enrolledCourses.filter(

        (course) =>
          String(course.id) !==
          String(id)

      );


    setEnrolledCourses(
      updatedEnrollments
    );


    localStorage.setItem(

      "enrolledCourses",

      JSON.stringify(
        updatedEnrollments
      )

    );

  }


  // =========================
  // Enroll Course
  // =========================

  function enrollCourse(course) {

    const alreadyEnrolled =
      enrolledCourses.some(

        (item) =>
          String(item.id) ===
          String(course.id)

      );


    if (alreadyEnrolled) {

      return;

    }


    const updatedEnrollments = [

      ...enrolledCourses,

      course,

    ];


    setEnrolledCourses(
      updatedEnrollments
    );


    localStorage.setItem(

      "enrolledCourses",

      JSON.stringify(
        updatedEnrollments
      )

    );

  }


  // =========================
  // Get Course
  // =========================

  function getCourseById(id) {

    return courses.find(

      (course) =>
        String(course.id) ===
        String(id)

    );

  }


  return (

    <CourseContext.Provider

      value={{

        courses,

        enrolledCourses,

        createCourse,

        updateCourse,

        deleteCourse,

        enrollCourse,

        getCourseById,

      }}

    >

      {children}

    </CourseContext.Provider>

  );

}


export function useCourses() {

  const context =
    useContext(CourseContext);


  if (!context) {

    throw new Error(
      "useCourses must be used inside CourseProvider"
    );

  }


  return context;

}