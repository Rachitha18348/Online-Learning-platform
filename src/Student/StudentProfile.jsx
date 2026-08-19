import React, { useState } from "react";

function StudentProfile() {
  const [isEditing, setIsEditing] = useState(false);

  const [student, setStudent] = useState({
    name: "Rachitha",
    email: "rachitha@example.com",
    phone: "9876543210",
    course: "B.Tech CSE",
  });

  function handleChange(e) {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  }

  function handleSave() {
    setIsEditing(false);
  }

  return (
    <div style={styles.container}>

      <h1 style={styles.heading}>My Profile</h1>

      <p style={styles.subText}>
        View and manage your student information.
      </p>

      <div style={styles.profileCard}>

        <div style={styles.profileHeader}>
          <div style={styles.avatar}>
            {student.name.charAt(0)}
          </div>

          <div>
            <h2 style={styles.name}>{student.name}</h2>
            <p style={styles.subText}>Student</p>
          </div>
        </div>

        <div style={styles.details}>

          <div style={styles.field}>
            <label>Name</label>

            {isEditing ? (
              <input
                name="name"
                value={student.name}
                onChange={handleChange}
                style={styles.input}
              />
            ) : (
              <p>{student.name}</p>
            )}
          </div>

          <div style={styles.field}>
            <label>Email</label>

            {isEditing ? (
              <input
                name="email"
                value={student.email}
                onChange={handleChange}
                style={styles.input}
              />
            ) : (
              <p>{student.email}</p>
            )}
          </div>

          <div style={styles.field}>
            <label>Phone</label>

            {isEditing ? (
              <input
                name="phone"
                value={student.phone}
                onChange={handleChange}
                style={styles.input}
              />
            ) : (
              <p>{student.phone}</p>
            )}
          </div>

          <div style={styles.field}>
            <label>Course</label>

            {isEditing ? (
              <input
                name="course"
                value={student.course}
                onChange={handleChange}
                style={styles.input}
              />
            ) : (
              <p>{student.course}</p>
            )}
          </div>

        </div>

        <div style={styles.actions}>
          {isEditing ? (
            <button
              onClick={handleSave}
              style={styles.saveButton}
            >
              Save Changes
            </button>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              style={styles.editButton}
            >
              Edit Profile
            </button>
          )}
        </div>

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

  heading: {
    marginBottom: "5px",
  },

  subText: {
    color: "#6B7280",
    fontSize: "14px",
    margin: "5px 0",
  },

  profileCard: {
    maxWidth: "700px",
    marginTop: "25px",
    backgroundColor: "#FFFFFF",
    border: "1px solid #E5E7EB",
    borderRadius: "8px",
    padding: "30px",
  },

  profileHeader: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    paddingBottom: "25px",
    borderBottom: "1px solid #E5E7EB",
  },

  avatar: {
    width: "55px",
    height: "55px",
    borderRadius: "50%",
    backgroundColor: "#7C3AED",
    color: "#FFFFFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "22px",
    fontWeight: "bold",
  },

  name: {
    margin: 0,
  },

  details: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
    marginTop: "25px",
  },

  field: {
    display: "flex",
    flexDirection: "column",
    gap: "7px",
  },

  input: {
    padding: "9px",
    border: "1px solid #D1D5DB",
    borderRadius: "5px",
    fontSize: "14px",
  },

  actions: {
    marginTop: "25px",
  },

  editButton: {
    backgroundColor: "#7C3AED",
    color: "#FFFFFF",
    border: "none",
    padding: "9px 18px",
    borderRadius: "6px",
    cursor: "pointer",
  },

  saveButton: {
    backgroundColor: "#22C55E",
    color: "#FFFFFF",
    border: "none",
    padding: "9px 18px",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default StudentProfile;