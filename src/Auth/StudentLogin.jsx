import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function StudentLogin() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(event) {
    event.preventDefault();

    const user = {
      name: name,
      email: email,
      password: password,
      role: "student",
    };

    localStorage.setItem(
      "loggedInUser",
      JSON.stringify(user)
    );

    navigate("/student/dashboard");
  }

  return (
    <div style={styles.container}>

      <form
        onSubmit={handleLogin}
        style={styles.card}
      >

        <h1 style={styles.title}>
          Student Login
        </h1>

        <p style={styles.subtitle}>
          Login to continue learning
        </p>


        {/* Name */}

        <div style={styles.formGroup}>

          <label style={styles.label}>
            Name
          </label>

          <input
            type="text"
            value={name}
            onChange={(event) =>
              setName(event.target.value)
            }
            placeholder="Enter your name"
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
            value={email}
            onChange={(event) =>
              setEmail(event.target.value)
            }
            placeholder="Enter your email"
            style={styles.input}
            required
          />

        </div>


        {/* Password */}

        <div style={styles.formGroup}>

          <label style={styles.label}>
            Password
          </label>

          <input
            type="password"
            value={password}
            onChange={(event) =>
              setPassword(event.target.value)
            }
            placeholder="Enter your password"
            style={styles.input}
            required
          />

        </div>


        <button
          type="submit"
          style={styles.loginButton}
        >
          Login
        </button>


        <button
          type="button"
          onClick={() => navigate("/")}
          style={styles.backButton}
        >
          Back
        </button>

      </form>

    </div>
  );
}


const styles = {

  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F9FAFB",
    fontFamily: "Arial, sans-serif",
  },

  card: {
    width: "400px",
    backgroundColor: "#FFFFFF",
    padding: "40px",
    borderRadius: "10px",
    border: "1px solid #E5E7EB",
  },

  title: {
    textAlign: "center",
    color: "#5B21B6",
    marginBottom: "10px",
  },

  subtitle: {
    textAlign: "center",
    color: "#6B7280",
    marginBottom: "30px",
  },

  formGroup: {
    marginBottom: "20px",
  },

  label: {
    display: "block",
    marginBottom: "7px",
    fontWeight: "600",
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

  loginButton: {
    width: "100%",
    backgroundColor: "#7C3AED",
    color: "#FFFFFF",
    border: "none",
    padding: "12px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "15px",
    marginBottom: "10px",
  },

  backButton: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    color: "#374151",
    border: "1px solid #D1D5DB",
    padding: "11px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "14px",
  },

};

export default StudentLogin;