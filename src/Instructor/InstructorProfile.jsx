import React, { useState } from "react";

function InstructorProfile() {

  const loggedInUser =
    JSON.parse(
      localStorage.getItem("loggedInUser")
    );


  const instructorEmail =
    loggedInUser?.email || "instructor";


  const [profile, setProfile] = useState(() => {

    return (
      JSON.parse(
        localStorage.getItem(
          `instructorProfile_${instructorEmail}`
        )
      )
    ) || {

      name: loggedInUser?.name || "",

      email: loggedInUser?.email || "",

      phone: "",

      qualification: "",

      specialization: "",

      experience: "",

      skills: "",

      bio: "",

    };

  });


  const [saved, setSaved] = useState(false);


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


  function handleSubmit(event) {

    event.preventDefault();


    localStorage.setItem(

      `instructorProfile_${instructorEmail}`,

      JSON.stringify(profile)

    );


    setSaved(true);

  }


  return (

    <div style={styles.container}>

      <div style={styles.header}>

        <h1 style={styles.title}>
          Instructor Profile
        </h1>

        <p style={styles.subtitle}>
          Fill in your professional and personal details.
        </p>

      </div>


      <form
        onSubmit={handleSubmit}
        style={styles.form}
      >

        {/* Personal Information */}

        <h2 style={styles.sectionTitle}>
          Personal Information
        </h2>


        <div style={styles.grid}>

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

        </div>


        {/* Professional Information */}

        <h2 style={styles.sectionTitle}>
          Professional Information
        </h2>


        <div style={styles.grid}>

          <div style={styles.formGroup}>

            <label style={styles.label}>
              Qualification
            </label>

            <input
              type="text"
              name="qualification"
              value={profile.qualification}
              onChange={handleChange}
              placeholder="Example: M.Tech CSE"
              style={styles.input}
            />

          </div>


          <div style={styles.formGroup}>

            <label style={styles.label}>
              Specialization
            </label>

            <input
              type="text"
              name="specialization"
              value={profile.specialization}
              onChange={handleChange}
              placeholder="Example: Artificial Intelligence"
              style={styles.input}
            />

          </div>


          <div style={styles.formGroup}>

            <label style={styles.label}>
              Experience
            </label>

            <input
              type="text"
              name="experience"
              value={profile.experience}
              onChange={handleChange}
              placeholder="Example: 3 Years"
              style={styles.input}
            />

          </div>

        </div>


        {/* Skills */}

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
            placeholder="Example: Python, React, AI/ML, SQL"
            rows="4"
            style={styles.textarea}
          />

        </div>


        {/* Bio */}

        <h2 style={styles.sectionTitle}>
          About You
        </h2>


        <div style={styles.formGroup}>

          <label style={styles.label}>
            Bio
          </label>

          <textarea
            name="bio"
            value={profile.bio}
            onChange={handleChange}
            placeholder="Write a short description about yourself"
            rows="5"
            style={styles.textarea}
          />

        </div>


        {/* Save */}

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

export default InstructorProfile;