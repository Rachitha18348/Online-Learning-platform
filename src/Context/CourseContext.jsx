import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const CourseContext = createContext();


// =====================================================
// LOCAL STORAGE HELPERS
// =====================================================

function getStoredCourses() {
  try {
    const storedCourses = localStorage.getItem("courses");

    if (!storedCourses) {
      return [];
    }

    const parsedCourses = JSON.parse(storedCourses);

    return Array.isArray(parsedCourses)
      ? parsedCourses
      : [];
  } catch (error) {
    console.error("Error reading courses:", error);
    return [];
  }
}


function getLoggedInUser() {
  try {
    const storedUser =
      localStorage.getItem("loggedInUser");

    if (!storedUser) {
      return null;
    }

    return JSON.parse(storedUser);
  } catch (error) {
    console.error(
      "Error reading logged-in user:",
      error
    );

    return null;
  }
}


// =====================================================
// PROVIDER
// =====================================================

export function CourseProvider({ children }) {

  const [courses, setCourses] =
    useState(getStoredCourses);

  const [enrolledCourses, setEnrolledCourses] =
    useState([]);


  // ===================================================
  // SAVE COURSES
  // ===================================================

  useEffect(() => {
    localStorage.setItem(
      "courses",
      JSON.stringify(courses)
    );
  }, [courses]);


  // ===================================================
  // CURRENT USER
  // ===================================================

  function getCurrentUser() {
    return getLoggedInUser();
  }


  // ===================================================
  // CURRENT STUDENT EMAIL
  // ===================================================

  function getCurrentStudentEmail() {

    const user = getCurrentUser();

    if (!user || user.role !== "student") {
      return null;
    }

    return user.email || null;
  }


  // ===================================================
  // ENROLLMENT KEY
  // ===================================================

  function getEnrollmentKey() {

    const email =
      getCurrentStudentEmail();

    if (!email) {
      return null;
    }

    return `enrolledCourses_${email}`;
  }


  // ===================================================
  // GET ENROLLED COURSES
  // ===================================================

  function getEnrolledCourses() {

    const key =
      getEnrollmentKey();

    if (!key) {
      return [];
    }

    try {

      const stored =
        localStorage.getItem(key);

      if (!stored) {
        return [];
      }

      const parsed =
        JSON.parse(stored);

      return Array.isArray(parsed)
        ? parsed
        : [];

    } catch (error) {

      console.error(
        "Error reading enrolled courses:",
        error
      );

      return [];
    }
  }


  // ===================================================
  // LOAD STUDENT ENROLLMENTS
  // ===================================================

  function loadStudentEnrollments() {

    const studentCourses =
      getEnrolledCourses();

    setEnrolledCourses(
      studentCourses
    );
  }


  useEffect(() => {

    loadStudentEnrollments();

  }, []);


  // ===================================================
  // GET MY ENROLLED COURSES
  // ===================================================

  function getMyEnrolledCourses() {

    return getEnrolledCourses();

  }


  // ===================================================
  // ENROLL COURSE
  // ===================================================

  function enrollCourse(course) {

    const user =
      getCurrentUser();

    if (!user) {

      alert(
        "Please login as a student first."
      );

      return false;
    }

    if (user.role !== "student") {

      alert(
        "Only students can enroll in courses."
      );

      return false;
    }

    const key =
      `enrolledCourses_${user.email}`;

    const existingCourses =
      getEnrolledCourses();

    const alreadyEnrolled =
      existingCourses.some(
        (item) =>
          String(item.id) ===
          String(course.id)
      );

    if (alreadyEnrolled) {

      setEnrolledCourses(
        existingCourses
      );

      return false;
    }

    const courseToSave = {

      ...course,

      lessons:
        Array.isArray(course.lessons)
          ? [...course.lessons]
          : [],

    };

    const updatedCourses = [

      ...existingCourses,

      courseToSave,

    ];

    localStorage.setItem(
      key,
      JSON.stringify(updatedCourses)
    );

    setEnrolledCourses(
      updatedCourses
    );

    return true;
  }


  // ===================================================
  // CHECK ENROLLMENT
  // ===================================================

  function isEnrolled(courseId) {

    const studentCourses =
      getEnrolledCourses();

    return studentCourses.some(
      (course) =>
        String(course.id) ===
        String(courseId)
    );
  }


  // ===================================================
  // GET COURSE BY ID
  // ===================================================

  function getCourseById(courseId) {

    return courses.find(
      (course) =>
        String(course.id) ===
        String(courseId)
    );
  }


  // ===================================================
  // GET INSTRUCTOR COURSES
  // ===================================================

  function getInstructorCourses() {

    const user =
      getCurrentUser();

    if (!user) {
      return [];
    }

    if (user.role !== "instructor") {
      return [];
    }

    return courses.filter(
      (course) =>
        course.instructorId === user.email
        ||
        course.email === user.email
    );
  }


  // ===================================================
  // CREATE COURSE
  // ===================================================

  function createCourse(courseData) {

    const user =
      getCurrentUser();

    if (!user) {

      alert(
        "Please login as an instructor first."
      );

      return null;
    }

    if (user.role !== "instructor") {

      alert(
        "Only instructors can create courses."
      );

      return null;
    }

    const newCourse = {

      id: Date.now(),

      title:
        courseData.title.trim(),

      description:
        courseData.description.trim(),

      duration:
        courseData.duration.trim(),

      level:
        courseData.level,

      topics:
        courseData.topics.trim(),

      lessons:
        Array.isArray(courseData.lessons)
          ? courseData.lessons
          : [],

      instructor:
        user.name,

      email:
        user.email,

      instructorId:
        user.email,

      createdAt:
        new Date().toISOString(),

    };

    setCourses(
      (previousCourses) => [

        ...previousCourses,

        newCourse,

      ]
    );

    return newCourse;
  }


  // ===================================================
  // ADD COURSE
  // ===================================================

  function addCourse(course) {

    const newCourse = {

      ...course,

      id:
        course.id ||
        Date.now(),

      lessons:
        Array.isArray(course.lessons)
          ? course.lessons
          : [],

      createdAt:
        course.createdAt ||
        new Date().toISOString(),

    };

    setCourses(
      (previousCourses) => [

        ...previousCourses,

        newCourse,

      ]
    );

    return newCourse;
  }


  // ===================================================
  // UPDATE COURSE
  // ===================================================

  function updateCourse(updatedCourse) {

    const newCourse = {

      ...updatedCourse,

      lessons:
        Array.isArray(
          updatedCourse.lessons
        )
          ? updatedCourse.lessons
          : [],

    };


    setCourses(
      (previousCourses) =>

        previousCourses.map(
          (course) =>

            String(course.id) ===
            String(updatedCourse.id)

              ? newCourse
              : course
        )
    );


    // Update enrolled copies
    Object.keys(localStorage)
      .filter(
        (key) =>
          key.startsWith(
            "enrolledCourses_"
          )
      )
      .forEach((key) => {

        try {

          const stored =
            localStorage.getItem(key);

          if (!stored) {
            return;
          }

          const studentCourses =
            JSON.parse(stored);

          if (!Array.isArray(studentCourses)) {
            return;
          }

          const updatedStudentCourses =
            studentCourses.map(
              (course) =>

                String(course.id) ===
                String(updatedCourse.id)

                  ? newCourse
                  : course
            );

          localStorage.setItem(
            key,
            JSON.stringify(
              updatedStudentCourses
            )
          );

        } catch (error) {

          console.error(
            "Error updating enrolled course:",
            error
          );

        }

      });


    loadStudentEnrollments();
  }


  // ===================================================
  // DELETE COURSE
  // ===================================================

  function deleteCourse(courseId) {

    setCourses(
      (previousCourses) =>

        previousCourses.filter(
          (course) =>
            String(course.id) !==
            String(courseId)
        )
    );


    // Remove from student enrollments
    Object.keys(localStorage)
      .filter(
        (key) =>
          key.startsWith(
            "enrolledCourses_"
          )
      )
      .forEach((key) => {

        try {

          const stored =
            localStorage.getItem(key);

          if (!stored) {
            return;
          }

          const studentCourses =
            JSON.parse(stored);

          if (!Array.isArray(studentCourses)) {
            return;
          }

          const updatedStudentCourses =
            studentCourses.filter(
              (course) =>
                String(course.id) !==
                String(courseId)
            );

          localStorage.setItem(
            key,
            JSON.stringify(
              updatedStudentCourses
            )
          );

        } catch (error) {

          console.error(
            "Error deleting enrolled course:",
            error
          );

        }

      });


    loadStudentEnrollments();
  }


  // ===================================================
  // ADD LESSON
  // ===================================================

  function addLesson(courseId, lesson) {

    const newLesson = {

      ...lesson,

      id:
        lesson.id ||
        Date.now(),

    };


    setCourses(
      (previousCourses) =>

        previousCourses.map(
          (course) => {

            if (
              String(course.id) !==
              String(courseId)
            ) {

              return course;

            }

            return {

              ...course,

              lessons: [

                ...(Array.isArray(
                  course.lessons
                )
                  ? course.lessons
                  : []),

                newLesson,

              ],

            };

          }
        )
    );


    // Update enrolled course copies
    setTimeout(() => {

      const updatedCourses =
        getStoredCourses();

      const updatedCourse =
        updatedCourses.find(
          (course) =>
            String(course.id) ===
            String(courseId)
        );

      if (!updatedCourse) {
        return;
      }


      Object.keys(localStorage)
        .filter(
          (key) =>
            key.startsWith(
              "enrolledCourses_"
            )
        )
        .forEach((key) => {

          try {

            const stored =
              localStorage.getItem(key);

            if (!stored) {
              return;
            }

            const studentCourses =
              JSON.parse(stored);

            if (!Array.isArray(studentCourses)) {
              return;
            }

            const updatedStudentCourses =
              studentCourses.map(
                (course) =>

                  String(course.id) ===
                  String(courseId)

                    ? {
                        ...course,

                        lessons:
                          updatedCourse.lessons,
                      }

                    : course
              );

            localStorage.setItem(
              key,
              JSON.stringify(
                updatedStudentCourses
              )
            );

          } catch (error) {

            console.error(
              "Error updating lesson:",
              error
            );

          }

        });


      loadStudentEnrollments();

    }, 100);

  }


  // ===================================================
  // CONTEXT VALUE
  // ===================================================

  const value = {

    courses,

    enrolledCourses,

    getCurrentUser,

    getCourseById,

    getInstructorCourses,

    getMyEnrolledCourses,

    enrollCourse,

    isEnrolled,

    createCourse,

    addCourse,

    updateCourse,

    deleteCourse,

    addLesson,

  };


  return (

    <CourseContext.Provider value={value}>

      {children}

    </CourseContext.Provider>

  );

}


// =====================================================
// CUSTOM HOOK
// =====================================================

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


export default CourseContext;