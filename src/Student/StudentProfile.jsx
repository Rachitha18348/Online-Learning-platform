import React, { useState } from "react";

function StudentProfile() {

  // Get logged-in student
  const loggedInUser = JSON.parse(
    localStorage.getItem("loggedInUser")
  );

  const studentEmail =
    loggedInUser?.email || "student";


  // Get this student's profile
  const [profile, setProfile] = useState(() => {

    const savedProfile = localStorage.getItem(
      `studentProfile_${studentEmail}`
    );

    if (savedProfile) {
      return JSON.parse(savedProfile);
    }

    return {
      name: loggedInUser?.name || "",
      email: loggedInUser?.email || "",
      phone: "",
      gender: "",
      dateOfBirth: "",
      college: "",
      degree: "",
      skills: "",
      address: "",
    };

  });


  const [saved, setSaved] = useState(false);


  // Handle input changes
  function handleChange(event) {

    const {
      name,
      value,
    } = event.target;

    setProfile({
      ...profile,
      [name]: value,
    });

    setSaved(false);

  }


  // Save profile
  function handleSubmit(event) {

    event.preventDefault();

    localStorage.setItem(
      `studentProfile_${studentEmail}`,
      JSON.stringify(profile)
    );

    setSaved(true);

  }


  return (

    <div style={styles.container}>

      {/* Header */}

      <div style={styles.header}>

        <h1 style={styles.title}>
          Student Profile
        </h1>

        <p style={styles.subtitle}>
          Fill in your personal and academic details.
        </p>

      </div>


      {/* Profile Form */}

      <form
        onSubmit={handleSubmit}
        style={styles.form}
      >

        {/* =========================
            PERSONAL INFORMATION
        ========================== */}

        <h2 style={styles.sectionTitle}>
          Personal Information
        </h2>


        <div style={styles.grid}>

          {/* Full Name */}

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
              style={styles.input}
            />

          </div>


          {/* Gender */}

          <div style={styles.formGroup}>

            <label style={styles.label}>
              Gender
            </label>

            <select
              name="gender"
              value={profile.gender}
              onChange={handleChange}
              style={styles.input}
            >

              <option value="">
                Select Gender
              </option>

              <option value="Male">
                Male
              </option>

              <option value="Female">
                Female
              </option>

              <option value="Other">
                Other
              </option>

            </select>

          </div>


          {/* Date of Birth */}

          <div style={styles.formGroup}>

            <label style={styles.label}>
              Date of Birth
            </label>

            <input
              type="date"
              name="dateOfBirth"
              value={profile.dateOfBirth}
              onChange={handleChange}
              style={styles.input}
            />

          </div>

        </div>


        {/* =========================
            ACADEMIC INFORMATION
        ========================== */}

        <h2 style={styles.sectionTitle}>
          Academic Information
        </h2>


        <div style={styles.grid}>

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
              placeholder="Enter college or university"
              style={styles.input}
            />

          </div>


          {/* Degree */}

          <div style={styles.formGroup}>

            <label style={styles.label}>
              Degree
            </label>

            <input
              type="text"
              name="degree"
              value={profile.degree}
              onChange={handleChange}
              placeholder="Example: B.Tech CSE"
              style={styles.input}
            />

          </div>

        </div>


        {/* =========================
            SKILLS
        ========================== */}

        <h2 style={styles.sectionTitle}>
          Skills
        </h2>


        <div style={styles.formGroup}>

          <label style={styles.label}>
            Skills
          </label>

          <textarea
            name="skills"
            value={profile.skills}
            onChange={handleChange}
            placeholder="Example: Python, React, SQL"
            rows="4"
            style={styles.textarea}
          />

        </div>


        {/* =========================
            ADDRESS
        ========================== */}

        <h2 style={styles.sectionTitle}>
          Address
        </h2>


        <div style={styles.formGroup}>

          <label style={styles.label}>
            Address
          </label>

          <textarea
            name="address"
            value={profile.address}
            onChange={handleChange}
            placeholder="Enter your address"
            rows="4"
            style={styles.textarea}
          />

        </div>


        {/* =========================
            SAVE BUTTON
        ========================== */}

        <div style={styles.footer}>

          <button
            type="submit"
            style={styles.saveButton}
          >
            Save Profile
          </button>


          {saved && (

            <span style={styles.success}>
              Profile saved successfully!
            </span>

          )}

        </div>

      </form>

    </div>

  );
}


const styles = {

  container: {
    minHeight: "70vh",
    backgroundColor: "#F9FAFB",
    padding: "40px 50px",
    fontFamily: "Arial, sans-serif",
  },


  header: {
    maxWidth: "900px",
    margin: "0 auto 25px",
  },


  title: {
    color: "#5B21B6",
    fontSize: "30px",
    marginBottom: "8px",
  },


  subtitle: {
    color: "#6B7280",
  },


  form: {
    maxWidth: "900px",
    margin: "auto",
    backgroundColor: "#FFFFFF",
    border: "1px solid #E5E7EB",
    borderRadius: "8px",
    padding: "30px",
  },


  sectionTitle: {
    color: "#111827",
    fontSize: "20px",
    marginTop: "10px",
    marginBottom: "20px",
    borderBottom: "1px solid #E5E7EB",
    paddingBottom: "10px",
  },


  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "20px",
  },


  formGroup: {
    marginBottom: "20px",
  },


  label: {
    display: "block",
    fontSize: "14px",
    fontWeight: "600",
    marginBottom: "7px",
    color: "#374151",
  },


  input: {
    width: "100%",
    boxSizing: "border-box",
    padding: "11px",
    border: "1px solid #D1D5DB",
    borderRadius: "6px",
    fontSize: "14px",
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


  footer: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    marginTop: "10px",
  },


  saveButton: {
    backgroundColor: "#7C3AED",
    color: "#FFFFFF",
    border: "none",
    padding: "11px 22px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "14px",
  },


  success: {
    color: "#15803D",
    fontSize: "14px",
  },

};


export default StudentProfile;