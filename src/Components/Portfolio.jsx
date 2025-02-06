import React from "react";
import image from "../assets/image2.jpg"
function Portfolio() {
  const projects = [
    {
      title: "Project 1: Web Stopwatch",
      description: "A stopwatch built with HTML, CSS, and JavaScript to track time.",
      img: "https://via.placeholder.com/300",
      link: "https://github.com/Ishwari208/Stop_watch",
    },
    {
      title: "Project 2: Tic-Tac-Toe Game",
      description: "A classic Tic-Tac-Toe game built using JavaScript and React.",
      img: "https://via.placeholder.com/300",
      link: "https://github.com/yourusername/tic-tac-toe",
    },
    {
      title: "Project 3: Weather App",
      description: "A weather app built with React, fetching real-time weather data using an API.",
      img: "https://via.placeholder.com/300",
      link: "https://github.com/yourusername/weather-app",
    },
    {
      title: "Project 4: Disease Predictor_bot",
      description: "An machine learning project on disease prediction.",
      img: image,
      link: "https://github.com/Ishwari208/Disease_prediction_bot",
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>My Work</h1>
      <div style={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div key={index} style={styles.projectCard}>
            <img src={project.img} alt={project.title} style={styles.projectImage} />
            <h3 style={styles.projectTitle}>{project.title}</h3>
            <p style={styles.projectDescription}>{project.description}</p>
            <a href={project.link} style={styles.projectLink} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
           
          </div>
        ))}
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
    textAlign: "center",
  },
  projectsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "20px",
  },
  projectCard: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  projectImage: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  projectTitle: {
    fontSize: "1.5rem",
    fontWeight: "600",
    margin: "10px 0",
  },
  projectDescription: {
    fontSize: "1rem",
    color: "#666",
    marginBottom: "15px",
  },
  projectLink: {
    backgroundColor: "#4A90E2",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    textDecoration: "none",
    fontWeight: "600",
    display: "inline-block",
  },
};

export default Portfolio;
