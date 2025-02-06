import React from "react";

function About() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Me</h1>
      <div style={styles.section}>
        <h2 style={styles.subHeading}>Who Am I?</h2>
        <p style={styles.paragraph}>
          Hello! I'm a third-year undergraduate student passionate about
          <strong style={styles.highlight}> UI design, React, and web development</strong>. My journey into web development started with a fascination for how design and technology come together to create seamless, interactive experiences. I love building clean, responsive, and user-friendly interfaces.
        </p>
        <p style={styles.paragraph}>
          As a UI/UX enthusiast, I enjoy blending creativity with technical skills. I am constantly learning new frameworks, tools, and technologies to stay updated with the latest trends in web development.
        </p>
      </div>
      <div style={styles.section}>
        <h2 style={styles.subHeading}>Skills & Technologies</h2>
        <ul style={styles.skillsList}>
          <li style={styles.skillsItem}>UI/UX Design</li>
          <li style={styles.skillsItem}>React.js, JavaScript</li>
          <li style={styles.skillsItem}>HTML5, CSS3</li>
          <li style={styles.skillsItem}>Responsive Web Design</li>
          <li style={styles.skillsItem}>Version Control (Git)</li>
          <li style={styles.skillsItem}>Bootstrap, Material-UI</li>
        </ul>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "50px",
    fontFamily: "'Roboto', sans-serif",
    backgroundColor: "#f7f7f7",
    color: "#333",
  },
  heading: {
    fontSize: "3rem",
    fontWeight: "600",
    color: "#4A90E2",
    marginBottom: "30px",
  },
  subHeading: {
    fontSize: "2rem",
    color: "#4A90E2",
    marginBottom: "15px",
  },
  paragraph: {
    fontSize: "1.2rem",
    lineHeight: "1.8",
    marginBottom: "15px",
  },
  highlight: {
    color: "#4A90E2",
  },
  skillsList: {
    listStyleType: "none",
    padding: 0,
  },
  skillsItem: {
    fontSize: "1.2rem",
    margin: "10px 0",
  },
};

export default About;
