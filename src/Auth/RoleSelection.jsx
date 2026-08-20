import React from "react";
import { useNavigate } from "react-router-dom";

function RoleSelection() {

  const navigate = useNavigate();


  return (

    <div style={styles.container}>

      <div style={styles.card}>

        <h1 style={styles.title}>
            LearnHub
            <br/>
            <hr/>
          Online Learning Platform
        </h1>

        <p style={styles.subtitle}>
          Select your role to continue
        </p>


        <div style={styles.buttons}>

          <button
            style={styles.button}
            onClick={() =>
              navigate("/student/login")
            }
          >
            Student
          </button>


          <button
            style={styles.button}
            onClick={() =>
              navigate("/instructor/login")
            }
          >
            Instructor
          </button>

        </div>

      </div>

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
    textAlign: "center",
  },


  title: {
    color: "#5B21B6",
    marginBottom: "10px",
  },


  subtitle: {
    color: "#6B7280",
    marginBottom: "30px",
  },


  buttons: {
    display: "flex",
    gap: "15px",
    justifyContent: "center",
  },


  button: {
    backgroundColor: "#7C3AED",
    color: "#FFFFFF",
    border: "none",
    padding: "12px 25px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "15px",
  },

};


export default RoleSelection;