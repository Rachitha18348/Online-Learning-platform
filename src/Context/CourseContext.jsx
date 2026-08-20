import React, {
  createContext,
  useContext,
  useState,
} from "react";

const CourseContext = createContext(null);


export function CourseProvider({ children }) {

  const [courses, setCourses] = useState(() => {

    const savedCourses =
      localStorage.getItem("courses");

    return savedCourses
      ? JSON.parse(savedCourses)
      : [];

  });


  const [enrolledCourses, setEnrolledCourses] =
    useState(() => {

      const savedCourses =
        localStorage.getItem("enrolledCourses");

      return savedCourses
        ? JSON.parse(savedCourses)
        : [];

    });


  // =========================
  // ADD COURSE
  // =========================

  function addCourse(course) {

    setCourses((previousCourses) => {

      const updatedCourses = [
        ...previousCourses,
        course,
      ];

      localStorage.setItem(
        "courses",
        JSON.stringify(updatedCourses)
      );

      return updatedCourses;

    });

  }


  // =========================
  // UPDATE COURSE
  // =========================

  function updateCourse(updatedCourse) {

    setCourses((previousCourses) => {

      const updatedCourses =
        previousCourses.map((course) =>

          course.id === updatedCourse.id
            ? updatedCourse
            : course

        );


      localStorage.setItem(
        "courses",
        JSON.stringify(updatedCourses)
      );


      return updatedCourses;

    });

  }


  // =========================
  // DELETE COURSE
  // =========================

  function deleteCourse(courseId) {

    setCourses((previousCourses) => {

      const updatedCourses =
        previousCourses.filter(
          (course) =>
            course.id !== courseId
        );


      localStorage.setItem(
        "courses",
        JSON.stringify(updatedCourses)
      );


      return updatedCourses;

    });

  }


  // =========================
  // ENROLL COURSE
  // =========================

  function enrollCourse(course) {

    const loggedInUser =
      JSON.parse(
        localStorage.getItem("loggedInUser")
      );


    if (!loggedInUser) {

      alert(
        "Please login before enrolling."
      );

      return;

    }


    const alreadyEnrolled =
      enrolledCourses.some(

        (item) =>

          item.courseId === course.id &&

          item.studentEmail ===
            loggedInUser.email

      );


    if (alreadyEnrolled) {

      alert(
        "You are already enrolled in this course."
      );

      return;

    }


    const enrollment = {

      courseId: course.id,

      course: course,

      studentName:
        loggedInUser.name,

      studentEmail:
        loggedInUser.email,

    };


    const updatedEnrollments = [

      ...enrolledCourses,

      enrollment,

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


    alert(
      "Course enrolled successfully!"
    );

  }


  return (

    <CourseContext.Provider

      value={{

        courses,

        enrolledCourses,

        addCourse,

        updateCourse,

        deleteCourse,

        enrollCourse,

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