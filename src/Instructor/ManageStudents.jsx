import React from "react";

function ManageStudents() {

  const students = [
    {
      id: 1,
      name: "Rachitha",
      email: "rachitha@example.com",
      course: "React JS",
      progress: 70,
    },
    {
      id: 2,
      name: "Ananya",
      email: "ananya@example.com",
      course: "Python Programming",
      progress: 85,
    },
    {
      id: 3,
      name: "Rahul",
      email: "rahul@example.com",
      course: "React JS",
      progress: 45,
    },
  ];

  return (
    <div style={styles.container}>

      <h1>Manage Students</h1>

      <p style={styles.subText}>
        View students enrolled in your courses.
      </p>

      <div style={styles.tableContainer}>

        <table style={styles.table}>

          <thead>
            <tr>
              <th style={styles.th}>Student</th>
              <th style={styles.th}>Email</th>
              <th style={styles.th}>Course</th>
              <th style={styles.th}>Progress</th>
            </tr>
          </thead>

          <tbody>

            {students.map((student) => (
              <tr key={student.id}>

                <td style={styles.td}>
                  {student.name}
                </td>

                <td style={styles.td}>
                  {student.email}
                </td>

                <td style={styles.td}>
                  {student.course}
                </td>

                <td style={styles.td}>
                  {student.progress}%
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#F9FAFB",
    padding: "35px 50px",
    fontFamily: "Arial, sans-serif",
    color: "#111827",
  },

  subText: {
    color: "#6B7280",
    fontSize: "14px",
  },

  tableContainer: {
    backgroundColor: "#FFFFFF",
    border: "1px solid #E5E7EB",
    borderRadius: "8px",
    marginTop: "25px",
    overflow: "hidden",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
  },

  th: {
    textAlign: "left",
    padding: "15px",
    backgroundColor: "#F3F4F6",
    fontSize: "14px",
  },

  td: {
    padding: "15px",
    borderTop: "1px solid #E5E7EB",
    fontSize: "14px",
  },
};

export default ManageStudents;