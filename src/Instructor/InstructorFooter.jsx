import React from "react";

function InstructorFooter() {
  return (
    <footer style={styles.footer}>
      <p>
        © 2026 LearnHub | Instructor Portal
      </p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#FFFFFF",
    borderTop: "1px solid #E5E7EB",
    padding: "18px",
    textAlign: "center",
    color: "#6B7280",
    fontSize: "13px",
    fontFamily: "Arial, sans-serif",
  },
};

export default InstructorFooter;