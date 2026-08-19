import React, { useState } from "react";

function StudentProfile() {

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    college: "",
    skills: "",
  });

  const [isEditing, setIsEditing] = useState(true);

  function handleChange(event) {

    const { name, value } = event.target;

    setProfile({
      ...profile,
      [name]: value,
    });
  }

  function handleSubmit(event) {

    event.preventDefault();

    setIsEditing(false);

    alert("Profile updated successfully!");
  }

  return (
    <div style={styles.container}>

      {/* Header */}

      <div style={styles.header}>

        <h1 style={styles.title}>
          My Profile
        </h1>

        <p style={styles.subtitle}>
          Add and manage your personal and academic information.
        </p>

      </div>


      {/* Profile Form */}

      <div style={styles.profileCard}>

        <form onSubmit={handleSubmit}>

          {/* Name */}

          <div style={styles.formGroup}>

            <label style={styles.label}>
              Full Name
            </label>

            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              disabled={!isEditing}
              style={styles.input}
              required
            />

          </div>


          {/* Email */}

          <div style={styles.formGroup}>

            <label style={styles.label}>
              Email
            </label>

            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              placeholder="Enter your email"
              disabled={!isEditing}
              style={styles.input}
              required
            />

          </div>


          {/* Phone */}

          <div style={styles.formGroup}>

            <label style={styles.label}>
              Phone Number
            </label>

            <input
              type="tel"
              name="phone"
              value={profile.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              disabled={!isEditing}
              style={styles.input}
            />

          </div>


          {/* Education */}

          <div style={styles.formGroup}>

            <label style={styles.label}>
              Education
            </label>

            <input
              type="text"
              name="education"
              value={profile.education}
              onChange={handleChange}
              placeholder="Example: B.Tech CSE"
              disabled={!isEditing}
              style={styles.input}
            />

          </div>


          {/* College */}

          <div style={styles.formGroup}>

            <label style={styles.label}>
              College / University
            </label>

            <input
              type="text"
              name="college"
              value={profile.college}
              onChange={handleChange}
              placeholder="Enter your college or university"
              disabled={!isEditing}
              style={styles.input}
            />

          </div>


          {/* Skills */}

          <div style={styles.formGroup}>

            <label style={styles.label}>
              Skills
            </label>

            <textarea
              name="skills"
              value={profile.skills}
              onChange={handleChange}
              placeholder="Example: JavaScript, React, Python"
              disabled={!isEditing}
              rows="4"
              style={styles.textarea}
            />

          </div>


          {/* Buttons */}

          <div style={styles.buttons}>

            {isEditing ? (

              <button
                type="submit"
                style={styles.saveButton}
              >
                Save Profile
              </button>

            ) : (

              <button
                type="button"
                onClick={() => setIsEditing(true)}
                style={styles.editButton}
              >
                Edit Profile
              </button>

            )}

          </div>

        </form>

      </div>

    </div>
  );
}


const styles = {

  container: {
    minHeight: "70vh",
    backgroundColor: "#F9FAFB",
    padding: "40px 50px",
    fontFamily: "Arial, sans-serif",
    color: "#111827",
  },


  header: {
    maxWidth: "800px",
    margin: "0 auto 30px",
  },


  title: {
    color: "#5B21B6",
    fontSize: "30px",
    marginBottom: "8px",
  },


  subtitle: {
    color: "#6B7280",
    fontSize: "15px",
  },


  profileCard: {
    maxWidth: "800px",
    margin: "auto",
    backgroundColor: "#FFFFFF",
    border: "1px solid #E5E7EB",
    borderRadius: "8px",
    padding: "30px",
  },


  formGroup: {
    marginBottom: "20px",
  },


  label: {
    display: "block",
    marginBottom: "7px",
    fontSize: "14px",
    fontWeight: "600",
  },


  input: {
    width: "100%",
    boxSizing: "border-box",
    padding: "11px",
    border: "1px solid #D1D5DB",
    borderRadius: "6px",
    fontSize: "14px",
    outline: "none",
  },


  textarea: {
    width: "100%",
    boxSizing: "border-box",
    padding: "11px",
    border: "1px solid #D1D5DB",
    borderRadius: "6px",
    fontSize: "14px",
    resize: "vertical",
    fontFamily: "Arial, sans-serif",
  },


  buttons: {
    marginTop: "25px",
  },


  saveButton: {
    backgroundColor: "#7C3AED",
    color: "#FFFFFF",
    border: "none",
    padding: "11px 20px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "14px",
  },


  editButton: {
    backgroundColor: "#5B21B6",
    color: "#FFFFFF",
    border: "none",
    padding: "11px 20px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "14px",
  },

};


export default StudentProfile;