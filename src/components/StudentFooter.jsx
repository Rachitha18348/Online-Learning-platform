import React from "react";

function StudentFooter() {
  return (
    <footer style={styles.footer}>
      <div>
        <h3 style={styles.logo}>LearnHub</h3>
        <p style={styles.text}>
          Learn new skills and grow your knowledge.
        </p>
      </div>

      <p style={styles.copyright}>
        © 2026 LearnHub. All rights reserved.
      </p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#FFFFFF",
    borderTop: "1px solid #E5E7EB",
    padding: "25px 50px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "30px",
  },

  logo: {
    color: "#7C3AED",
    margin: "0 0 5px",
    fontSize: "18px",
  },

  text: {
    color: "#6B7280",
    margin: 0,
    fontSize: "13px",
  },

  copyright: {
    color: "#6B7280",
    fontSize: "13px",
  },
};

export default StudentFooter;